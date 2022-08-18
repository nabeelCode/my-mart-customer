import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
import cookies from "cookie";
import { useState, useEffect } from "react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cookie, setCookie] = useCookies(["customerId"]);

  const customerId = pageProps?.customer?.customerId;
  
  useEffect(() => {
    !cookie.customerId &&
      setCookie("customerId", customerId, {
        path: "/",
        sameSite: true,
      });
  }, [customerId, setCookie, cookie.customerId]);

  return (
    <CookiesProvider>
      <div className="grid sm:grid-cols-6 h-screen">
        <div className="sm:col-span-3 md:col-span-2 h-full">
          <Component {...pageProps} />
        </div>
        <div className="hidden sm:grid bg-primary h-full sm:col-span-3 md:col-span-4"></div>
      </div>
    </CookiesProvider>
  );
}

export async function getInitialProps({ req, res }) {
  const cookieData = req.headers?.cookie
    ? cookies.parse(req.headers?.cookie)
    : null;
  let customer = null;

  if (res) {
    if (!cookieData) {
      customer = await createGuest();
    }
  }

  return {
    props: {
      customer: customer,
    },
  };
}

export default MyApp;
