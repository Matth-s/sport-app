import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({
    error: "Email invalide",
  }),
  password: z.string().trim().min(1, {
    error: "Mot de passe requis",
  }),
  twoFaCode: z.string().optional(),
});

export type loginType = z.infer<typeof loginSchema>;
