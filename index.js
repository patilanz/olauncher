// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const images = require('./images.json');

// Declare a route
fastify.get('/o_images', async (request, reply) => {
	return images;
})

// Run the server!
const start = async () => {
	try {
		await fastify.listen({ port: process.env.PORT })
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()