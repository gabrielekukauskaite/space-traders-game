import { useSystemsServiceGetSystems } from "../../../openapi/queries";

const Systems = () => {
  const { data: systems } = useSystemsServiceGetSystems({ limit: 100 });
  console.log("Systems data:", systems);

  return <main>systems</main>;
};

export default Systems;
