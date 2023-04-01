import Script from 'next/script';

const AnalyticsScript = () => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=UA-11798603-21"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {[
        'window.dataLayer = window.dataLayer || [];',
        'function gtag(){window.dataLayer.push(arguments);}',
        "gtag('js', new Date());",
        '',
        "gtag('config', 'UA-11798603-21');",
      ].join('\n')}
    </Script>
  </>
);

export default AnalyticsScript;
