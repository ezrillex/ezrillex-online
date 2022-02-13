<script>
	import Router from 'svelte-spa-router'
	import { wrap } from 'svelte-spa-router/wrap';

	import Home from './pages/Home.svelte';
	import NotFoundPage from './pages/404.svelte';
	import Changelog from './pages/Changelog.svelte'
	import Series from './pages/Series.svelte'
	import Serie from './pages/Serie.svelte'
	import Player from './components/Player.svelte'

	import Navbar from './components/layout/navbar.svelte';
	import Footer from './components/layout/footer.svelte';

	export let name;


	const routes = {
		'/': wrap({
			component: Home,
			props: {
				name
			}
		}),

		'/series': Series,

		'/series/:id': Serie,

		'/series/:id/:order': Player,

		'/changelog': Changelog,

		'*': NotFoundPage
	}




</script>

<main>
	<Navbar/>
	<Router {routes}/>
	<Footer/>
</main>

<style>

</style>