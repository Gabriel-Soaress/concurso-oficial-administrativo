import { ThemeProvider } from "@/contexts/ThemeContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { AppRouter } from "@/router/AppRouter";

export function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <ProgressProvider>
            <AppRouter />
          </ProgressProvider>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
