import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import type { UserAccount } from "@/types";
import { storage } from "@/services/storage";
import { dbQuery } from "@/services/db";

interface AuthContextValue {
  user: UserAccount | null;
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  login: (identifier: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserAccount | null>(() => storage.getUser());
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = useCallback(() => setIsLoginOpen(true), []);
  const closeLogin = useCallback(() => setIsLoginOpen(false), []);

  const login = useCallback(async (identifier: string, password: string) => {
    try {
      const res = await dbQuery<UserAccount>(
        "SELECT id, nome, email FROM usuarios WHERE (LOWER(email) = LOWER($1) OR LOWER(nome) = LOWER($1)) AND senha = $2 LIMIT 1;",
        [identifier.trim(), password]
      );
      if (!res.rows || res.rows.length === 0) {
        return { ok: false, error: "Usuário/e-mail ou senha incorretos." };
      }
      const account = res.rows[0];
      setUser(account);
      storage.setUser(account);
      setIsLoginOpen(false);
      return { ok: true };
    } catch {
      return { ok: false, error: "Erro de conexão ao autenticar. Verifique sua internet." };
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    storage.setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoginOpen, openLogin, closeLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}
