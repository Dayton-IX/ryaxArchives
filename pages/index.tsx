import Head from 'next/head'
import { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import MainButton from '../components/micro/MainButton';

export default function Home() {
	const [loading, setLoading] = useState(false);
	const [formComplete, setFormComplete] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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
		console.log('🍇!!!')
		setLoading(true);
	}

	useEffect(() => {
		checkForm()
	})

	return (
		<Layout>
			<Head>
				<title>Log In</title>
			</Head>
			<div className="container flex flex-col mx-auto w-5/6 md:w-1/2 lg:w-1/3 bg-light-backgroundMain dark:bg-dark-backgroundMain mt-20">
				<h1 className="text-4xl -ml-2 text-light-textMain dark:text-dark-textMain">Log In</h1>
				<div className="bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary rounded-xl shadow hover:shadow-lg p-5 w-full mx-auto mt-3">
					<form className="mx-auto w-full flex flex-col">
						<label htmlFor="email" className="text-light-textMain dark:text-dark-textMain text-xl">Email</label>
						<input id="email" onChange={(e) => onUpdateForm(e.target.value, 'EMAIL')} className="bg-light-backgroundMain dark:bg-dark-backgroundMain shadow-inner rounded-md text-light-textSecondary dark:text-dark-textSecondary text-lg w-11/12 mx-auto px-3 py-1 my-2" placeholder="name@example.com" />
						<label htmlFor="password" className="text-light-textMain dark:text-dark-textMain text-xl">Password</label>
						<input id="password" onChange={(e) => onUpdateForm(e.target.value, 'PASSWORD')} type="password" className="bg-light-backgroundMain dark:bg-dark-backgroundMain shadow-inner rounded-md text-light-textSecondary dark:text-dark-textSecondary text-lg w-11/12 mx-auto px-3 py-1 my-2" placeholder="Password" />
					</form>
				</div>
				<MainButton onClick={() => onSubmit()} loading={loading} disabled={!formComplete} className="w-3/4 text-xl mx-auto my-3">Log In</MainButton>
			</div>
		</Layout>
	)
}
