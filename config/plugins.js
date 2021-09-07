module.exports = ({ env }) => ({
  email: {
    provider: "smtp",
    providerOptions: {
      host: env("EMAIL_HOST"), //SMTP Host
      port: env("EMAIL_PORT"), //SMTP Port
      secure: true,
      username: env("EMAIL_USERNAME"),
      password: env("EMAIL_PASSWORD"),
      rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 1,
    },
    settings: {
      from: env("EMAIL_FROM"),
      replyTo: env("EMAIL_TO"),
    },
  },
});
