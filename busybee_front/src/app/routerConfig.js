import SignupPage from "../pages/Signup/SignupPage";
import LoginPage from "../pages/Login/LoginPage";
import HomePage from "../pages/Home/HomePage";

export const routesConfig = [
  {
    path: "/login",
    element: <LoginPage />,
    private: false,
  },
  {
    path: "/signup",
    element: <SignupPage />,
    private: false,
  },
  {
    path: "/",
    element: <HomePage />,
    private: true, // доступен только после авторизации
  },
];