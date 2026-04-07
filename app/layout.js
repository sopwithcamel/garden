export const metadata = {
  title: '🌿 Garden Manager',
};

export default function RootLayout({ children }) {
  // Server-side config injected into window.__G__ for client JS
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
        <script src="https://cdn.tailwindcss.com" />
        <script
          src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
        />
        {/* Inject server config into window.__G__ before app JS runs */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__G__ = ${JSON.stringify(cfg)};`,
          }}
        />
      </head>
      <body className="bg-green-50 min-h-screen">
        {children}
        <script src="/garden-app.js" />
      </body>
    </html>
  );
}
