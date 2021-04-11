import Head from 'next/head';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/initSupabase';

import MainButton from './micro/MainButton';
import { Logo } from '../assets/svgLib';

enum FormField {
	EMAIL,
	PASSWORD
}

enum FormType {
	LOGIN,
	FORGOTPASSWORD,
	VERIFICATION
}

const fetcher = (url: string, token: string) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
}).then((res) => res.json())

const Layout = ({children}: any) => {
	const user = supabase.auth.user()
	const [authView, setAuthView] = useState(FormType.LOGIN)

	const [loading, setLoading] = useState(false);
	const [formComplete, setFormComplete] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	  
	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
			if (event === 'USER_UPDATED') setTimeout(() => setAuthView(FormType.LOGIN), 1000)
			fetch('/api/auth', {
				method: 'POST',
				headers: new Headers({ 'Content-Type': 'application/json' }),
				credentials: 'same-origin',
				body: JSON.stringify({ event, session }),
			}).then((res) => res.json())
		})

		if (authListener) {
			return () => {
				authListener.unsubscribe()
			}
		}
	}, [])

	const onUpdateForm = (value: string, type: FormField): void => {
		if (type === FormField.EMAIL) {
			setEmail(value);
		} else if (type === FormField.PASSWORD) {
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

	const onLogIn = async (): Promise<void> => {
		console.log('🍇!!!!');
		setLoading(true);
		const { user, session, error } = await supabase.auth.signIn({
			email: email,
			password: password
		})
		console.log(user);
		setLoading(false);
	}

	useEffect(() => {
		checkForm()
	})

	if (!user) {
		return (
			<div>
				<Head>
					<title>Log In</title>
				</Head>
				<div className="container flex flex-col mx-auto max-w-7xl w-5/6 md:w-1/2 lg:w-1/3 bg-light-backgroundMain dark:bg-dark-backgroundMain mt-20">
					<Logo className="self-center -mt-14" />
					<h1 className="text-4xl -ml-2 text-light-textMain dark:text-dark-textMain">Log In</h1>
						<form onSubmit={(e) => e.preventDefault()}>
							<div className="bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary rounded-xl shadow hover:shadow-lg p-5 w-full mx-auto mt-3 flex flex-col">
								<label htmlFor="email" className="text-light-textMain dark:text-dark-textMain text-xl">Email</label>
								<input id="email" onChange={(e) => onUpdateForm(e.target.value, FormField.EMAIL)} className="bg-light-backgroundMain dark:bg-dark-backgroundMain shadow-inner rounded-md text-light-textSecondary dark:text-dark-textSecondary text-lg w-11/12 mx-auto px-3 py-1 my-2" placeholder="name@example.com" />
								<label htmlFor="password" className="text-light-textMain dark:text-dark-textMain text-xl">Password</label>
								<input id="password" onChange={(e) => onUpdateForm(e.target.value, FormField.PASSWORD)} type="password" className="bg-light-backgroundMain dark:bg-dark-backgroundMain shadow-inner rounded-md text-light-textSecondary dark:text-dark-textSecondary text-lg w-11/12 mx-auto px-3 py-1 my-2" placeholder="Password" />
							</div>
							<MainButton onClick={() => onLogIn()} loading={loading} disabled={!formComplete} className="w-3/4 text-xl mx-auto my-3">Log In</MainButton>
						</form>
				</div>
			</div>
		)
	}
	
	
	return (
            <main>
                {children}
            </main>
	)
}

export default Layout;