import "../styles/index.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      {/* Display the content */}
      <Component {...pageProps} />
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
// MyApp.getInitialProps = async (appContext) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   if (appContext.router.locale == null) {
//     appContext.router.locale = "en";
//   }
//   const globalLocale = await getGlobalData(appContext.router.locale);
//   // console.log("globalLocale");
//   // console.log(globalLocale);
//   // console.log("globalLocale");

//   return {
//     ...appProps,
//     pageProps: {
//       global: globalLocale,
//     },
//   };
// };

export default MyApp;
