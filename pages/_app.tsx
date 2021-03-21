import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Auth } from '@supabase/ui'
import { supabase } from '../utils/initSupabase'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={'dark'}>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </main>
  )
}

export default MyApp
