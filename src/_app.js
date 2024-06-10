// src/pages/_app.js (or your main entry file)
import React from 'react';
import Auth0ProviderWithHistory from '../auth/Auth0ProviderWithHistory';

function MyApp({ Component, pageProps }) {
  return (
    <Auth0ProviderWithHistory>
      <Component {...pageProps} />
    </Auth0ProviderWithHistory>
  );
}

export default MyApp;
