import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createQuizLead } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  quiz: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Nome muito curto"),
          whatsapp: z.string().min(8, "WhatsApp inválido"),
          city: z.string().min(2, "Cidade obrigatória"),
          legalArea: z.string().min(2, "Área obrigatória"),
          description: z.string().optional(),
          hasProcess: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const leadId = await createQuizLead(input);
        return { success: true, leadId };
      }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
