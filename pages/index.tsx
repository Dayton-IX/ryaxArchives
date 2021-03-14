import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Log In</title>
			</Head>
			<div className="container mx-auto w-11/12 bg-light-backgroundMain dark:bg-dark-backgroundMain">
				<h1 className="text-4xl text-light-textMain dark:text-dark-textMain">Log In</h1>
				<div className="bg-light-backgroundMain dark:bg-dark-backgroundMain rounded-xl shadow hover:shadow-lg p-5 w-5/6 mx-auto">

				</div>
			</div>
		</Layout>
	)
}
