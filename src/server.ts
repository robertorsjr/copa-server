import Fastify from  'fastify'
import cors from '@fastify/cors'
import {routes} from "./routes";


async function bootstrap(){
	const fastify = Fastify({
		logger: true,
	})

	await fastify.register(cors, {
		origin: true
	})

	await routes(fastify)

	await fastify.listen({ port: 3333 })
	//  host: '0.0.0.0'
}

bootstrap()
