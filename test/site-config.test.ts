import assert from "node:assert/strict";
import test from "node:test";

import { siteConfig } from "../src/config/site.ts";

test("live feature truth includes client import and no-show protection", () => {
  const liveTitles = siteConfig.featureTruth.liveNow.map((item) => item.title);

  assert.ok(liveTitles.includes("Client import wizard"));
  assert.ok(liveTitles.includes("Stripe card hold and no-show protection"));
});

test("roadmap only contains occasion-based booking", () => {
  assert.deepEqual(siteConfig.featureTruth.roadmap.map((item) => item.title), ["Occasion-based booking"]);
});

test("public pricing stays simple and monthly", () => {
  assert.deepEqual(
    siteConfig.pricing.map((tier) => tier.price),
    ["\u00A30", "\u00A319", "\u00A330"]
  );

  assert.ok(siteConfig.pricing.every((tier) => tier.period === "/month"));
});
