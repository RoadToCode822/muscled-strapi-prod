export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "9b794b84c8d561eff950b6abb94b04f0"),
  },
});
