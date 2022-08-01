const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  "postgresql://doadmin:AVNS_tL4BIk4dCRcIm8WOvS7@strapi-prod-do-user-4657530-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require"
);
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
