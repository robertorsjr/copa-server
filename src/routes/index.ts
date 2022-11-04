import {FastifyInstance} from "fastify";
import {poolRoutes} from "./pool";
import {gameRoutes} from "./game";
import {userRoutes} from "./user";
import {guessRoutes} from "./guess";
import {authRoutes} from "./auth";

export async function routes(fastify: FastifyInstance){
	await fastify.register(poolRoutes)
	await fastify.register(gameRoutes)
	await fastify.register(userRoutes)
	await fastify.register(guessRoutes)
	await fastify.register(authRoutes)
}
