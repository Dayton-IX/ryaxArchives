import Head from 'next/head'
import { useState } from 'react';
import Layout from '../components/Layout'
import MainButton from '../components/micro/MainButton';

export default function Home() {
	const [loading, setLoading] = useState(false);
	const [formComplete, setFormComplete] = useState(false)

	return (
		<Layout>
			<Head>
				<title>Log In</title>
			</Head>
			<div className="container flex flex-col mx-auto w-5/6 bg-light-backgroundMain dark:bg-dark-backgroundMain mt-20">
				<h1 className="text-4xl -ml-2 text-light-textMain dark:text-dark-textMain">Log In</h1>
				<div className="bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary rounded-xl shadow hover:shadow-lg p-5 w-full mx-auto mt-3">
					<form className="mx-auto w-full flex flex-col">
						<label htmlFor="email" className="text-light-textMain dark:text-dark-textMain text-xl">Email</label>
						<input id="email" className="bg-light-backgroundMain dark:bg-dark-backgroundMain shadow-inner rounded-md text-light-textSecondary dark:text-dark-textSecondary text-lg w-11/12 mx-auto px-3 py-1 my-2" placeholder="name@example.com" />
						<label htmlFor="password" className="text-light-textMain dark:text-dark-textMain text-xl">Password</label>
						<input id="password" type="password" className="bg-light-backgroundMain dark:bg-dark-backgroundMain shadow-inner rounded-md text-light-textSecondary dark:text-dark-textSecondary text-lg w-11/12 mx-auto px-3 py-1 my-2" placeholder="Password" />
					</form>
				</div>
				<MainButton onClick={() => console.log('🍇')} loading={loading} disabled={formComplete} className="w-3/4 text-xl mx-auto my-3">Log In</MainButton>
			</div>
		</Layout>
	)
}
