import { redirect } from "react-router";
import data from "../../data/data.json";
const crewData = data.crew;
export async function loader({ params }) {
  const paramName = params.name;

  if (!paramName)
    return redirect(
      `/crew/${crewData[0]?.name.toLowerCase().replaceAll(" ", "-")}`,
    );

  const targetCrew = crewData.find(
    (crew) => crew.name.toLowerCase().replaceAll(" ", "-") === paramName,
  );

  return targetCrew;
}
