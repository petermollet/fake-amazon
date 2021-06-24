import Head from "next/head"
import Banner from "../components/products/Banner";
import ProductFeeds from "../components/products/ProductFeeds";
import Header from './../components/layouts/Header';

export default function Home({ products }) {
	return (
		<div className='bg-gray-100 min-h-screen'>
			<Head>
				<title>Amazon 2.0</title>
				<link rel="icon" href="/amazon.ico" />
			</Head>
			<Header/>
			<main className='max-w-screen-2xl mx-auto'>
				<Banner/>
				<ProductFeeds products={products} />
			</main>
		</div>
	)
}

export async function getServerSideProps(context) {
	const products = await fetch('http://fakestoreapi.com/products').then(
		res => res.json()
	)
	return {
		props: {
			products
		}
	}
}