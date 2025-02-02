import dotenv from 'dotenv'

const result = dotenv.config()
let config = {
  es_proto: process.env.ES_PROTO,
  es_host: process.env.ES_HOST,
  es_port: process.env.ES_PORT,
  es_user: process.env.ES_USERNAME,
  es_pass: process.env.ES_PASSWORD,
  es_index: process.env.ES_INDEX,
  es_type: process.env.ES_TYPE,
  app_port: process.env.APP_PORT
}

if (result.error) {
  console.log(result.error, '[Error Parsing env variables!]')
  throw result.error
};
// console.log(result.parsed, '[Parsed env variables!]');

export { config as default }
