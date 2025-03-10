import React from "react";
import ClientLayout from "../layout/client-layout";
import HomePage from "../public/home-page";
import Login from "../auth/login";
import SignUp from "../auth/sign-up";
import ProfilePage from "../user/profile-page";
import SettingPage from "../user/setting-page";

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

export const privateRoutes: RouteProps[] = [
  { path: "/profile", component: ProfilePage, layout: ClientLayout },
  { path: "/settings", component: SettingPage, layout: ClientLayout },
];
