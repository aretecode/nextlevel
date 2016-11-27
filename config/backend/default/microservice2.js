module.exports = {
  port: 3011,
  database: {
    url: process.env.MICROSERVICE2_DEFAULT_DB_URL || "",
    redis: process.env.REDIS_URL || null,
    secret: 'eh!',
  },
}
