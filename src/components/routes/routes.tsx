import React from "react";
import ClientLayout from "../layout/client-layout";
import HomePage from "../public/home-page";
import Login from "../auth/login";
import SignUp from "../auth/sign-up";

interface LayoutProps {
  children: React.ReactNode;
}

interface RouteProps {
  path: string;
  component: React.FC;
  layout: React.FC<LayoutProps>;
}

export const publicRoutes: RouteProps[] = [
  { path: "/", component: HomePage, layout: ClientLayout },
  { path: "/login", component: Login, layout: ClientLayout },
  { path: "/sign-up", component: SignUp, layout: ClientLayout },
];
