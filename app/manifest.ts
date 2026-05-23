import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ignitly — Apps, AI Workflows, Chatbots & Voice Agents",
    short_name: "Ignitly",
    description:
      "Mobile apps, AI workflows, chatbots & voice agents for founders.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#4ade80",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
