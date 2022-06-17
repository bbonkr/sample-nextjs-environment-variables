module.exports = {
  // ... rest of the configuration.
  //   experimental: {
  //     outputStandalone: true,
  //   },
  publicRuntimeConfig: {
    NEXT_PUBLIC_V1: process.env.NEXT_PUBLIC_V1 ?? "",
  },
};
