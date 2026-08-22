import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const homePath = fileURLToPath(new URL("./Home.tsx", import.meta.url));
const homeSource = readFileSync(homePath, "utf8");

describe("crédito da Alfa Flow no rodapé", () => {
  it("mantém o texto institucional e o link oficial da empresa", () => {
    expect(homeSource).toContain("Site desenvolvido por Alfa Flow");
    expect(homeSource).toContain("https://alfaflow-ai-growth.lovable.app");
    expect(homeSource).toContain('target="_blank"');
  });
});
