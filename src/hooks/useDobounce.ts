import { useRef, useEffect } from "react";

type Timer = ReturnType<typeof setTimeout>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SomeFunction = (...args: any[]) => void;

/**
 * Custom hook per il debounce di una funzione.
 *
 * @param func La funzione originale da debouncizzare.
 * @param delay Il ritardo (in ms) prima di eseguire la funzione.
 * @returns La funzione debounced, che verrà eseguita solo se non viene richiamata di nuovo entro il tempo specificato.
 */
export function useDebounce<Func extends SomeFunction>(func: Func, delay = 1000) {
  const timer = useRef<Timer | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const debouncedFunction = (...args: Parameters<Func>) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      func(...args);
    }, delay);
  };

  return debouncedFunction as Func;
}