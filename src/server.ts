import Fastify from  'fastify'
import { PrismaClient } from "@prisma/client";
import cors from '@fastify/cors'
import {z} from "zod";
import ShortUniqueId from "short-unique-id";


const prisma = new PrismaClient({
	log: ['query']
})

async function bootstrap(){
	const fastFy = Fastify({
		logger: true,
	})

	await fastFy.register(cors, {
		origin: true
	})

	fastFy.get('/pools/count', async () => {
		const count = await prisma.pool.count()
		return { count }
	})

	fastFy.get('/users/count', async () => {
		const count = await prisma.user.count()
		return { count }
	})

	fastFy.get('/guesses/count', async () => {
		const count = await prisma.guess.count()
		return { count }
	})

	fastFy.post('/pools', async (request, reply) => {
		const createPoolBody = z.object({
			title: z.string(),
		})

		const { title } = createPoolBody.parse(request.body)

		const generate = new ShortUniqueId({ length: 6})
		const code = String(generate()).toUpperCase()

		await prisma.pool.create({
			data: {
				title,
				code: code
			}
		})

		return reply.status(201).send({ code })
	})

	await fastFy.listen({ port: 3333 })
	//  host: '0.0.0.0'
}

bootstrap()
