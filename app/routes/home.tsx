import type { Route } from "./+types/home";
import DamageReportForm from "~/components/other/Form";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Under maintenance Data" },
    { name: "Inventory form to collect under maintenance data", content: "" },
  ];
}

export default function Home() {
  return <DamageReportForm />;
}
