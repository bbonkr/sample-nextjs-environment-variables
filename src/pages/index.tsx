import React from "react";
import Head from "../../node_modules/next/head";
import { NEXT_PUBLIC_V1 } from "../../config";
import getConfig from "next/config";

const HomePage = () => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <div>
      <Head>
        <title>Environment variables :: Home</title>
      </Head>
      <h1>Home</h1>
      <div>
        <h3>Environment variables</h3>
        <dl>
          <dt>NEXT_PUBLIC_V1:</dt>
          <dd>
            {process.env.NEXT_PUBLIC_V1} | {publicRuntimeConfig.NEXT_PUBLIC_V1}| {NEXT_PUBLIC_V1}
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default HomePage;
