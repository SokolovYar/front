import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./providers/AuthProvider";
import { routesConfig } from "./routerConfig";

function RequireAuth({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Завантаження...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
}

const router = createBrowserRouter(
  routesConfig.map(({ path, element, private: isPrivate }) => ({
    path,
    element: isPrivate ? <RequireAuth>{element}</RequireAuth> : element,
  }))
);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
