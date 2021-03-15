import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Log In</title>
			</Head>
			<div className="container mx-auto w-5/6 bg-light-backgroundMain dark:bg-dark-backgroundMain mt-20">
				<h1 className="text-4xl text-light-textMain dark:text-dark-textMain">Log In</h1>
				<div className="bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary rounded-xl shadow hover:shadow-lg p-5 w-full mx-auto mt-3">
					<form className="mx-auto w-full flex flex-col">
						<label className="text-light-textMain dark:text-dark-textMain text-xl">Email</label>
						<input className="bg-light-backgroundMain dark:bg-dark-backgroundMain shadow-inner rounded-md text-light-textSecondary dark:text-dark-textSecondary text-lg w-11/12 mx-auto px-3 py-1 my-2" placeholder="name@example.com" />
						<label className="text-light-textMain dark:text-dark-textMain text-xl">Password</label>
						<input className="bg-light-backgroundMain dark:bg-dark-backgroundMain shadow-inner rounded-md text-light-textSecondary dark:text-dark-textSecondary text-lg w-11/12 mx-auto px-3 py-1 my-2" placeholder="Password" />
					</form>
				</div>
			</div>
		</Layout>
	)
}
