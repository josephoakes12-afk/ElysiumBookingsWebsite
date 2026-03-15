import type { APIRoute } from "astro";
import { absoluteUrl, siteConfig } from "../config/site";

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: siteConfig.name,
      short_name: siteConfig.shortName,
      start_url: "/",
      display: "standalone",
      background_color: "#FEFBF7",
      theme_color: "#51504F",
      icons: [
        {
          src: absoluteUrl("/branding/icons/elysium-monogram-rounded-square.png"),
          type: "image/png",
          sizes: "1024x1024"
        }
      ]
    }),
    {
      headers: {
        "Content-Type": "application/manifest+json; charset=utf-8"
      }
    }
  );
