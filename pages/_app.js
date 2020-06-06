
import App from 'next/app';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

// MEMO: we require the following snippet in order for it to be working on Firebase after deployment
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
