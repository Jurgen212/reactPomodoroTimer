import React from "react";
import loadable from "@loadable/component";

// Importaciones de rutas
import { Routes, Route, Navigate } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { AuthLoadingSpinner } from "../ui/components/AuthLoadingSpinner";


const AuthRoutes      = loadable(() => import("../auth/routes/AuthRoutes"         ) );
const PomodoroRoutes  = loadable(() => import("../pomodoro/routes/PomodoroRoutes" ) );


export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") return <AuthLoadingSpinner />;

  return (
    <>
      <Routes>

        {/* TODO cambiar el simbolo !== por === al terminar de maquetar el Pomodoro */}
        {status === "authenticated" ? (
          <Route path="/*" element={<PomodoroRoutes />} />
        ) : (
          <Route path="/auth/*" element={<AuthRoutes />} />
        )}

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
};
