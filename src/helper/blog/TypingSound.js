import { useRef, useCallback } from "react";

/**
 * useTypingSound — Hook template untuk efek suara typing retro (8-bit style)
 *
 * Usage:
 *   const playSound = useTypingSound();
 *   playSound(); // panggil setiap karakter muncul
 *
 * Options (opsional, lewat parameter):
 *   frequency   — frekuensi dasar oscillator dalam Hz    (default: 520)
 *   randomRange — rentang acak ditambahkan ke frequency   (default: 80)
 *   volume      — volume awal gain (0.0 – 1.0)           (default: 0.04)
 *   duration    — durasi bunyi dalam detik               (default: 0.06)
 *   type        — tipe waveform oscillator               (default: "square")
 *                 pilihan: "sine" | "square" | "sawtooth" | "triangle"
 */
export function useTypingSound({
  frequency = 520,
  randomRange = 80,
  volume = 0.04,
  duration = 0.06,
  type = "square",
} = {}) {
  const ctxRef = useRef(null);

  const play = useCallback(() => {
    try {
      // Lazy-init AudioContext (harus dipicu oleh interaksi user)
      if (!ctxRef.current) {
        ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }

      const ctx = ctxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = type;
      osc.frequency.setValueAtTime(
        frequency + Math.random() * randomRange,
        ctx.currentTime
      );

      gain.gain.setValueAtTime(volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration);
    } catch {
      /* AudioContext tidak tersedia atau dibatasi browser — abaikan */
    }
  }, [frequency, randomRange, volume, duration, type]);

  return play;
}