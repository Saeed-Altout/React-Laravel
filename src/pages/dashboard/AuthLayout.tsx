import { useStateContext } from "@/hooks/useStateContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
