import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})
// Verifica se esta seguindo a config correta
export const env = envSchema.parse(process.env)
