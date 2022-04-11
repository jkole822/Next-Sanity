import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "nprogress/nprogress.css";

declare global {
  interface Window {
    routeTimeout: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  //@ts-ignore
  Router.onRouteChangeStart = (url: Location) => {
    console.log("URL: ", url);
    console.log("Window Location Pathname", window.location.pathname);
    if (String(url) !== window.location.pathname) {
      window.routeTimeout = setTimeout(() => {
        console.log("refresh");
        window.location = url;
      }, 100);
      NProgress.start();
    }
  };

  //@ts-ignore
  Router.onRouteChangeComplete = (url: Location) => {
    clearTimeout(window.routeTimeout);
    NProgress.done();
  };

  return <Component {...pageProps} />;
}

export default MyApp;
