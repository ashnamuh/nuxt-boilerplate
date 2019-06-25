const serverless = {
  stage: 'dev',
  warmup: true,
  NODE_ENV: process.env.NODE_ENV || 'development'
}

const server = {
  port: 3002,
  baseUrl: (process.env.NODE_ENV === 'production') ? `/${serverless.stage}/` : '/'
}

const api = {
  url: 'http://localhost:8080'
}

module.exports = {
  serverless,
  server,
  api
}
