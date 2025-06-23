import { createFileRoute } from "@tanstack/react-router";
import Navigation from "../components/Navigation/Navigation";

export const Route = createFileRoute("/navigation")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Navigation />;
}
