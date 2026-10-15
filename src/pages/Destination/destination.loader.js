import { redirect } from "react-router";
import data from "../../data/data.json";

const destData = data.destinations;

export async function loader({ params }) {
  const paramName = params.name;

  if (!paramName)
    return redirect(`/destination/${destData[0]?.name.toLowerCase()}`);

  const targetDest = destData.find(
    (dest) => dest.name.toLowerCase() === paramName,
  );

  return targetDest;
}
