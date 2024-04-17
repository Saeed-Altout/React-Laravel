import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "@/hooks/useStateContext";

export default function AuthLayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center items-center h-full w-full">
      <Outlet />
    </div>
  );
}
