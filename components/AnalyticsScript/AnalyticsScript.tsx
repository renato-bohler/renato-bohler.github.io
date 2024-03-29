import Script from 'next/script';

export const AnalyticsScript = () => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-T5ZEK0KJZR"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {[
        'window.dataLayer = window.dataLayer || [];',
        'function gtag(){dataLayer.push(arguments);}',
        "gtag('js', new Date());",
        "gtag('config', 'G-T5ZEK0KJZR');",
      ].join('\n')}
    </Script>
  </>
);
