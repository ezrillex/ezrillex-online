<script>
	import Router from "svelte-spa-router";

	import Home from "./pages/Home.svelte";
	import NotFoundPage from "./pages/404.svelte";
	import Changelog from "./pages/Changelog.svelte";
	import Series from "./pages/video/Series.svelte";
	import Serie from "./pages/video/Serie.svelte";
	import Player from "./pages/video/Player.svelte";

	import Navbar from "./components/layout/navbar.svelte";
	import Footer from "./components/layout/footer.svelte";
	import Shortener from "./pages/url_shortener/shortener.svelte";
	import Redirect from "./pages/url_shortener/redirect.svelte";

    import { io } from "socket.io-client";
	import visitors from "./stores/visitorStore";

	const routes = {
		"/": Home,
		"/series": Series,
		"/series/:id": Serie,
		"/series/:id/:order": Player,
		"/changelog": Changelog,
		"/shortener": Shortener,
		"/link/:sauce": Redirect,
		"/404": NotFoundPage,
		"*": NotFoundPage,
	};

	var socket = io("https://abarca.dev/", {
		path: "/api/v1/socket.io/socket.io/",
		port: 8000
	});

    socket.on("update", (arg_num) => {
        $visitors = arg_num
    });
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
