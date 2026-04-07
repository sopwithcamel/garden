import Script from 'next/script';

export const metadata = {
  title: '🌿 Garden Manager',
};

export default function RootLayout({ children }) {
  const cfg = {
    supabaseUrl:  process.env.NEXT_PUBLIC_SUPABASE_URL  || '',
    supabaseKey:  process.env.NEXT_PUBLIC_SUPABASE_KEY  || '',
    passwordHash: process.env.NEXT_PUBLIC_GARDEN_PASSWORD_HASH || '',
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/garden.css" />
      </head>
      <body className="bg-green-50 min-h-screen">
        {children}

        {/* CDN libs load before our app script */}
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2" strategy="beforeInteractive" />

        {/* Inject config THEN run app — both after React hydration */}
        <Script id="garden-config" strategy="afterInteractive">
          {`window.__G__ = ${JSON.stringify(cfg)};`}
        </Script>
        <Script src="/garden-app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
