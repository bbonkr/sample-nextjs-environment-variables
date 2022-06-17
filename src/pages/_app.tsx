import App, { AppContext, AppProps } from "next/app";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

CustomApp.displayName = "CustomApp";

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
CustomApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`

  const appProps = await App.getInitialProps(appContext);
  let componentProps = {};
  if (appContext.Component?.getInitialProps) {
    componentProps = await appContext.Component?.getInitialProps(
      appContext.ctx
    );
  }
  return { ...appProps, ...componentProps };
};

// https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
// CustomApp.getServerSideProps = async (appContext: AppContext) => {
//   const { Component, ctx } = appContext
//   let pageProps = {}
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx)
//   }
//   return { ...pageProps }
// }

export default CustomApp;
