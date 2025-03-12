import { useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

interface PublicRouteProps {
  component: React.FC;
  layout: React.FC<{ children: React.ReactNode }>;
}

export default function PublicRoutes({
  component: Component,
  layout: Layout,
}: PublicRouteProps) {
  const { authUser, checkAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (authUser) {
      navigate("/profile", { replace: true });
    }
  }, [authUser, navigate]);

  return <Layout children={<Component />} />;
}
