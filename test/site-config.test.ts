import assert from "node:assert/strict";
import test from "node:test";

import { siteConfig } from "../src/config/site.ts";

test("live feature truth keeps import and no-show protection out of the public live list", () => {
  const liveTitles = siteConfig.featureTruth.liveNow.map((item) => item.title) as string[];

  assert.ok(!liveTitles.includes("Client import wizard"));
  assert.ok(!liveTitles.includes("Stripe card hold and no-show protection"));
});

test("roadmap contains the current coming-soon feature set", () => {
  assert.deepEqual(siteConfig.featureTruth.roadmap.map((item) => item.title), [
    "Client import wizard",
    "Stripe card hold and no-show protection",
    "Occasion-based booking"
  ]);
});

test("public pricing stays simple and monthly", () => {
  assert.deepEqual(
    siteConfig.pricing.map((tier) => tier.price),
    ["\u00A30", "\u00A319", "\u00A335"]
  );

  assert.ok(siteConfig.pricing.every((tier) => tier.period === "/month"));
});

test("public contact email reflects the current launch contact address", () => {
  assert.equal(siteConfig.contact.supportEmail, "josephoakes17@hotmail.com");
  assert.equal(siteConfig.contact.privacyEmail, "josephoakes17@hotmail.com");
});
