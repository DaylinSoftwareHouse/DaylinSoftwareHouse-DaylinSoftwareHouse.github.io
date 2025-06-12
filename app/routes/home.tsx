import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daylin Software House" },
    { name: "Home", content: "The Home Page" },
  ];
}

export default function Home() {
  return <Welcome />;
}
