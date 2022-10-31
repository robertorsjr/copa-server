import Fastify from  'fastify'


async function bootstrap(){
	const fastFy = Fastify({
		logger: true,
	})

	fastFy.get('/pools/count', () => {
		return { count: 0 }
	})

	await fastFy.listen({port: 3333})
}

bootstrap()
