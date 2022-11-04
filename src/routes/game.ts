import {prisma} from "../libs/prisma";
import {FastifyInstance} from "fastify";

export async function gameRoutes(fastify: FastifyInstance){
	fastify.get('/games/count', async () => {
		const count = await prisma.pool.count()
		return { count }
	})
}
