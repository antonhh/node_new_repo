const credentials = require("./config/mysqlCredentials.js");

const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: credentials.development.connection.database,
      host:credentials.development.connection.host,
      user: credentials.development.connection.user,
      password: credentials.development.connection.password,
      port: credentials.development.connection.port
      
    },
    ...knexSnakeCaseMappers(),
  },
};
