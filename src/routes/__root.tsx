import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NavigationBar from "../components/NavigationBar/NavigationBar";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavigationBar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
