import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useSWR from 'swr'
import { Auth, Card, Typography, Space, Button, Icon } from '@supabase/ui'
import { supabase } from '../utils/initSupabase';

import Layout from '../components/Layout'
import MainButton from '../components/micro/MainButton';

const fetcher = (url: string, token: string) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
}).then((res) => res.json())

export default function Home() {
	const { user, session } = Auth.useUser()
	const { data, error } = useSWR(session ? ['/api/getUser', session.access_token] : null, fetcher)
	const [authView, setAuthView] = useState('sign_in')

	const [loading, setLoading] = useState(false);
	const [formComplete, setFormComplete] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	  
	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
		if (event === 'PASSWORD_RECOVERY') setAuthView('update_password')
		if (event === 'USER_UPDATED') setTimeout(() => setAuthView('sign_in'), 1000)
		// Send session to /api/auth route to set the auth cookie.
		// NOTE: this is only needed if you're doing SSR (getServerSideProps)!
		fetch('/api/auth', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			credentials: 'same-origin',
			body: JSON.stringify({ event, session }),
		}).then((res) => res.json())
		})
	
		return () => {
		authListener.unsubscribe()
		}
	}, [])

	const onUpdateForm = (value: string, type: 'PASSWORD' | 'EMAIL'): void => {
		if (type === 'EMAIL') {
			setEmail(value);
		} else if (type === 'PASSWORD') {
			setPassword(value);
		}
	}

	const checkForm = (): void => {
		if (email !== '' && password !== '') {
			setFormComplete(true);
		} else {
			setFormComplete(false);
		}
	}

	const onSubmit = (): void => {
		console.log('🍇!!!!');
		setLoading(true);
	}

	useEffect(() => {
		checkForm()
	})

	const View = () => {
		if (!user)
		  return (
			<Space direction="vertical" size={8}>
			  <div>
				<img src="https://app.supabase.io/img/supabase-dark.svg" width="96" />
				<Typography.Title level={3}>Welcome to Supabase Auth</Typography.Title>
			  </div>
			  <Auth
				supabaseClient={supabase}
				providers={['google', 'github']}
				view={authView}
				socialLayout="horizontal"
				socialButtonSize="xlarge"
			  />
			</Space>
		  )
	
		return (
		  <Space direction="vertical" size={6}>
			{authView === 'update_password' && <Auth.UpdatePassword supabaseClient={supabase} />}
			{user && (
			  <>
				<Typography.Text>You're signed in</Typography.Text>
				<Typography.Text strong>Email: {user.email}</Typography.Text>
	
				<Button
				  icon={<Icon type="LogOut" />}
				  type="outline"
				  onClick={() => supabase.auth.signOut()}
				>
				  Log out
				</Button>
				{error && <Typography.Text danger>Failed to fetch user!</Typography.Text>}
				{data && !error ? (
				  <>
					<Typography.Text type="success">
					  User data retrieved server-side (in API route):
					</Typography.Text>
	
					<Typography.Text>
					  <pre>{JSON.stringify(data, null, 2)}</pre>
					</Typography.Text>
				  </>
				) : (
				  <div>Loading...</div>
				)}
	
				<Typography.Text>
				  <Link href="/profile">
					<a>SSR example with getServerSideProps</a>
				  </Link>
				</Typography.Text>
			  </>
			)}
		  </Space>
		)
	}
	
	return (
	<div style={{ maxWidth: '420px', margin: '96px auto' }}>
		<Card>
		<View />
		</Card>
	</div>
	)

	// return (
	// 	<Layout>
	// 		<Head>
	// 			<title>Log In</title>
	// 		</Head>
	// 		<div className="container flex flex-col mx-auto w-5/6 md:w-1/2 lg:w-1/3 bg-light-backgroundMain dark:bg-dark-backgroundMain mt-20">
	// 			<h1 className="text-4xl -ml-2 text-light-textMain dark:text-dark-textMain">Log In</h1>
	// 			<div className="bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary rounded-xl shadow hover:shadow-lg p-5 w-full mx-auto mt-3">
	// 				<form className="mx-auto w-full flex flex-col">
	// 					<label htmlFor="email" className="text-light-textMain dark:text-dark-textMain text-xl">Email</label>
	// 					<input id="email" onChange={(e) => onUpdateForm(e.target.value, 'EMAIL')} className="bg-light-backgroundMain dark:bg-dark-backgroundMain shadow-inner rounded-md text-light-textSecondary dark:text-dark-textSecondary text-lg w-11/12 mx-auto px-3 py-1 my-2" placeholder="name@example.com" />
	// 					<label htmlFor="password" className="text-light-textMain dark:text-dark-textMain text-xl">Password</label>
	// 					<input id="password" onChange={(e) => onUpdateForm(e.target.value, 'PASSWORD')} type="password" className="bg-light-backgroundMain dark:bg-dark-backgroundMain shadow-inner rounded-md text-light-textSecondary dark:text-dark-textSecondary text-lg w-11/12 mx-auto px-3 py-1 my-2" placeholder="Password" />
	// 				</form>
	// 			</div>
	// 			<MainButton onClick={() => onSubmit()} loading={loading} disabled={!formComplete} className="w-3/4 text-xl mx-auto my-3">Log In</MainButton>
	// 		</div>
	// 	</Layout>
	// )
}
