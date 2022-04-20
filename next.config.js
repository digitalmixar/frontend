let imageHosts = process.env.IMAGE_HOSTS || "";
imageHosts = imageHosts.split(", ");

module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["localhost"].concat(imageHosts),
  },
};
