import { useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Loader } from "lucide-react";

interface ProtectRouteProps {
  component: React.FC;
  layout: React.FC<{ children: React.ReactNode }>;
}

export default function ProtectRoutes({
  component: Component,
  layout: Layout,
}: ProtectRouteProps) {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return <Layout children={<Component />} />;
}
