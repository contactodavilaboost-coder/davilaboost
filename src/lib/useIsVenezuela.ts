import { useState, useEffect } from "react";

/**
 * Detecta si el usuario está en Venezuela.
 * Primero usa zona horaria (instantáneo, offline).
 * Si no es concluyente, hace fetch a ipapi.co como fallback.
 */
export function useIsVenezuela() {
  const [isVE, setIsVE] = useState(true); // default VE mientras carga
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";

      // Caracas timezone → Venezuela
      if (tz.includes("Caracas")) {
        setIsVE(true);
        setLoaded(true);
        return;
      }

      // Si no es ni americano ni atlántico, definitivamente no es VE
      if (!tz.includes("America/") && !tz.includes("Atlantic/")) {
        setIsVE(false);
        setLoaded(true);
        return;
      }
    } catch {
      // Si falla el Intl, seguimos con el fetch
    }

    // Fallback: detección por IP
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        setIsVE(data.country_code === "VE");
        setLoaded(true);
      })
      .catch(() => {
        setIsVE(false); // default internacional si falla
        setLoaded(true);
      });
  }, []);

  return { isVE, loaded };
}