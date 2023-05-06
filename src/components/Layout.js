import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Script from "next/script";
import siteData from "@/data/site_data.json";

export default function Layout({ children, pageTitle, pageDescription }) {
  const measurementId = siteData["ga_measurement_id"];
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
                  
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}');
        `}
      </Script>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
