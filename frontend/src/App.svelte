<script>
	import Router from "svelte-spa-router";

	import Home from "./pages/Home.svelte";
	import NotFoundPage from "./pages/404.svelte";
	import Changelog from "./pages/Changelog.svelte";
	import Series from "./pages/video/Series.svelte";
	import Serie from "./pages/video/Serie.svelte";
	import Player from "./pages/video/Player.svelte";
	import blog from "./pages/blog/blog.svelte"
	import post from "./pages/blog/post.svelte"

	import Navbar from "./components/layout/navbar.svelte";
	import Footer from "./components/layout/footer.svelte";

	const routes = {
		"/": Home,

		"/blog": blog,

		"/blog/:id": post,

		"/series": Series,

		"/series/:id": Serie,

		"/series/:id/:order": Player,

		"/changelog": Changelog,

		"/404": NotFoundPage,
		"*": NotFoundPage,
	};
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
