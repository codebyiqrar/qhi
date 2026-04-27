"use client";
import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Load GA4 script asynchronously */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-NLEM14920L"
      />

      {/* Initialize GA4 */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || []; 
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date()); 
gtag('config', 'G-NLEM14920L'); 
        `}
      </Script>
    </>
  );
}