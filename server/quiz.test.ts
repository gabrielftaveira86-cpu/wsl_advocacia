import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

describe("quiz.submit procedure", () => {
  it("successfully validates and stores a quiz lead submission", async () => {
    const ctx: TrpcContext = {
      user: undefined,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const result = await caller.quiz.submit({
      name: "João da Silva",
      whatsapp: "11999999999",
      city: "São Bernardo do Campo",
      legalArea: "Direito Cível",
      description: "Teste unitário de caso cível",
      hasProcess: "Não",
    });

    expect(result).toHaveProperty("success", true);
    expect(result).toHaveProperty("leadId");
  });
});
