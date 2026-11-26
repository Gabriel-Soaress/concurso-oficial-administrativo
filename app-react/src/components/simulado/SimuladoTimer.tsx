import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";

interface SimuladoTimerProps {
  initialSeconds: number;
  onSyncSeconds: (seconds: number) => void;
}

function formatTime(sec: number): string {
  const s = Math.max(0, Math.floor(sec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = s % 60;
  const pad = (n: number) => (n < 10 ? `0${n}` : String(n));
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(r)}` : `${pad(m)}:${pad(r)}`;
}

export function SimuladoTimer({ initialSeconds, onSyncSeconds }: SimuladoTimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(false);
  const secondsRef = useRef(seconds);
  secondsRef.current = seconds;

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      window.clearInterval(id);
      onSyncSeconds(secondsRef.current);
    };
  }, [running, onSyncSeconds]);

  useEffect(() => {
    if (running && seconds > 0 && seconds % 10 === 0) {
      onSyncSeconds(seconds);
    }
  }, [running, seconds, onSyncSeconds]);

  const handlePause = () => {
    setRunning(false);
    onSyncSeconds(secondsRef.current);
  };

  const handleReset = () => {
    if (!window.confirm("Zerar o cronômetro deste simulado?")) return;
    setRunning(false);
    setSeconds(0);
    onSyncSeconds(0);
  };

  return (
    <div className="flex items-center gap-2 shrink-0">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 text-cyan-400 font-mono text-sm sm:text-base font-black border border-slate-700 shadow-inner">
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            running ? "bg-emerald-400 animate-pulse" : "bg-slate-500"
          }`}
        />
        <span>{formatTime(seconds)}</span>
      </div>

      <div className="flex items-center gap-1">
        {!running ? (
          <button
            type="button"
            onClick={() => setRunning(true)}
            className="p-2 rounded-xl surface text-pri hover:text-emerald-500 border border-tech cursor-pointer"
            title="Iniciar/Continuar cronômetro"
          >
            <Play className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handlePause}
            className="p-2 rounded-xl surface text-pri hover:text-amber-500 border border-tech cursor-pointer"
            title="Pausar cronômetro"
          >
            <Pause className="w-4 h-4" />
          </button>
        )}

        <button
          type="button"
          onClick={handleReset}
          className="p-2 rounded-xl surface text-mut hover:text-rose-500 border border-tech cursor-pointer"
          title="Zerar cronômetro"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
