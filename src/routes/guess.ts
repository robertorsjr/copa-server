import {prisma} from "../libs/prisma";
import {FastifyInstance} from "fastify";

export async function guessRoutes(fastify: FastifyInstance){
	fastify.get('/guesses/count', async () => {
		const count = await prisma.guess.count()
		return { count }
	})
}