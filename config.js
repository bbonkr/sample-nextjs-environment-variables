import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const runtimeConfig =
  typeof window !== "undefined"
    ? {
        // client
        NEXT_PUBLIC_V1: publicRuntimeConfig.NEXT_PUBLIC_V1,
      }
    : {
        // server
        NEXT_PUBLIC_V1: process.env.NEXT_PUBLIC_V1,
      };

export const { NEXT_PUBLIC_V1 } = runtimeConfig;
