import Fastify from  'fastify'
import { PrismaClient } from "@prisma/client";
import cors from '@fastify/cors'


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

	await fastFy.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()
