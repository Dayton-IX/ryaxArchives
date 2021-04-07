import React, { useState } from 'react';
import Head from 'next/head';
import Colors from '../constants/Colors';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Auth } from '@supabase/ui';
import { supabase } from '../utils/initSupabase';

function MyApp({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(false);
  return (
    <main className={'dark'}>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Welcome To The Ryax Archives!' />
				<title>Ryax Archives</title>
				<link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet" />
        <meta name="theme-color" content={Colors.dark.backgroundSecondary} />
        <link rel="apple-touch-icon" href="/assets/Icon512.png" />
        <meta name="apple-mobile-web-app-status-bar" content={Colors.accentMain} />
			</Head>

      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>

      <style global jsx>{`
        :root {
          background-color: ${dark ? Colors.dark.backgroundMain : Colors.light.backgroundMain};
        }
      `}</style>
    </main>
  )
}

export default MyApp
