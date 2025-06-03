import { createFileRoute } from "@tanstack/react-router";
import Systems from "../components/Systems/Systems";

export const Route = createFileRoute("/starmap")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Systems />;
}
