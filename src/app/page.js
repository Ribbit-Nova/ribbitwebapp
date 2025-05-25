// app/page.js
'use client';
import Home from '../component/home/Home';
import Loader from '../component/Loader/Loader';
import Script from 'next/script';
import * as gtag from '../../lib/gtag';

const GA_ID = gtag.GA_TRACKING_ID;


export default function HomePage() {
  return (
    <main>
      <Loader />
      <Home />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </main>
  );
}
