import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";

function Portfolio({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Portfolio;
