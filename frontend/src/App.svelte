<script>
	import Router from "svelte-spa-router";
	import {wrap} from "svelte-spa-router/wrap"

	import Navbar from "./components/layout/navbar.svelte";
	import Footer from "./components/layout/footer.svelte";
    
	import visitors from "./stores/visitorStore";

	const routes = {
		"/": wrap({ asyncComponent: ()=> import("./pages/Home.svelte")}),
		"/series": wrap({ asyncComponent: () => import("./pages/video/Series.svelte") }),
		"/series/:id": wrap({ asyncComponent: () => import("./pages/video/Serie.svelte") }),
		"/series/:id/:order": wrap({ asyncComponent: () => import("./pages/video/Player.svelte") }),
		"/changelog": wrap({ asyncComponent: () => import("./pages/Changelog.svelte") }),
		"/shortener": wrap({asyncComponent: ()=> import("./pages/url_shortener/shortener.svelte")}),
		"/link/:sauce": wrap({asyncComponent: ()=> import("./pages/url_shortener/redirect.svelte")}),
		"/404": wrap({ asyncComponent: () => import("./pages/404.svelte") }),
		"*": wrap({ asyncComponent: () => import("./pages/404.svelte") }),
	};

	

	import {onMount} from "svelte"

	let socket;

	onMount(async ()=>{
		const {io} = await import("socket.io-client");

		socket = io("https://abarca.dev/", {
			path: "/api/v1/socket.io/socket.io/",
			port: 8000
		});

		socket.on("update", (arg_num) => {
			$visitors = arg_num
		});
	})
</script>

<main>
	<Navbar />
	<Router {routes} />
	<div style="flex-grow: 1;" />
	<Footer />
</main>

<style>
	/* levelup.gitconnected.com/how-to-keep-your-footer-at-the-bottom-of-the-page-the-easy-way-20aa3bcd621f */
	main {
		min-height: 100vh;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}
</style>
