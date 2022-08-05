const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(process.env.DB_STRING);

//production

module.exports = () => ({
  connection: {
    client: "postgres",
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});


//  development

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'postgres'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', ''),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       ssl: false,
//     },
//     debug: false,
//   },
// });
