import { redirect } from "react-router";
import data from "../../data/data.json";

const techData = data.technology;

export async function loader({ params }) {
  const paramName = params.name;

  if (!paramName)
    return redirect(
      `/technology/${techData[0]?.name.toLowerCase().replaceAll(" ", "-")}`,
    );

  const targetTech = techData.find(
    (tech) => tech.name.toLowerCase().replaceAll(" ", "-") === paramName,
  );

  return targetTech;
}
