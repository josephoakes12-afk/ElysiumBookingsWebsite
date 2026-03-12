import type { APIRoute } from "astro";
import { absoluteUrl, siteConfig } from "../config/site";

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: siteConfig.name,
      short_name: siteConfig.shortName,
      start_url: "/",
      display: "standalone",
      background_color: "#F5F4EF",
      theme_color: "#223A58",
      icons: [
        {
          src: absoluteUrl("/icon-192.png"),
          type: "image/png",
          sizes: "192x192"
        },
        {
          src: absoluteUrl("/icon-512.png"),
          type: "image/png",
          sizes: "512x512"
        }
      ]
    }),
    {
      headers: {
        "Content-Type": "application/manifest+json; charset=utf-8"
      }
    }
  );
