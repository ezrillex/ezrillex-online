<script>
    import { fade } from "svelte/transition";
</script>

<main in:fade={{ duration: 500 }}>
    <div class="container">
        <br />
        <h1>Changelog</h1>
        <br />

        <h4>v0.6.4</h4>
        <ul>
            <li>Migrate from rollup to vite.</li>
            <li>Add visitor count on homepage.</li>
            <li>Fix minor styling warnings.</li>
        </ul>

        <h4>v0.6.3</h4>
        <ul>
            <li>Add Url shortening service.</li>
            <li>Rewrite without prisma. Hosting doesn't have GLIBC_2.18 dependency 😭.</li>
        </ul>

        <h4>v0.6.2</h4>
        <ul>
            <li>Changed style of navbar and footer, to reduce how similarly it looked to Github.</li>
        </ul>

        <h4>v0.6.1</h4>
        <ul>
            <li>Remove blog, I don't have time to be posting stuff.</li>
        </ul>

        <h4>v0.6.0</h4>
        <ul>
            <li>Remove svelte-progressbar dependency. It added 34k to the bundle size.</li>
            <li>Deplyed Gravity Falls and Baccano.</li>
            <li>Cache blog posts.</li>
        </ul>

        <h4>v0.5.9</h4>
        <ul>
            <li>Showcase projects on homepage.</li>
            <li>Cleaned/organized frontend codebase.</li>
            <li>Add this site frontend as showcase.</li>
            <li>Added lazy loading to images. (except blog ones)</li>
        </ul>

        <h4>v0.5.8</h4>
        <ul>
            <li>Localized site to english.</li>
            <li>
                Removed the GPA breakdown, making space for project showcase.
            </li>
        </ul>

        <h4>v0.5.7</h4>
        <ul>
            <li>Added a blog.</li>
            <li>Setup wordpress to use as a headless CMS for the blog.</li>
        </ul>

        <h4>v0.5.6</h4>
        <ul>
            <li>Tweaked home page layout, socials now are front and center.</li>
            <li>Add profile picture.</li>
            <li>Remove Font Awesome css dependency.</li>
            <li>Remove footer links, adjust footer layout.</li>
            <li>Revert navbar padding changes for better mobile UX.</li>
            <li>Update emojis for assignment cards.</li>
            <li>Add custom colors for assignment cards.</li>
            <li>Deployed F/Z</li>
        </ul>

        <h4>v0.5.5</h4>
        <ul>
            <li>Added a comment section under each episode.</li>
            <li>Automate backend deployment with GitHub actions.</li>
            <li>Developed a comments backend for the site using Express</li>
            <li>
                Due to comments being for password side of the site, a database
                is not yet used.
            </li>
        </ul>

        <h4>v0.5.4</h4>
        <ul>
            <li>Automated frontend deployment with GitHub actions.</li>
            <li>
                Mark and save to localStorage if an episode was viewed, display
                on list as an eye.
            </li>
            <li>Next episode autoplays.</li>
            <li>Deployed F/SN: 2006</li>
        </ul>

        <h4>v0.5.3</h4>
        <ul>
            <li>
                Reworked encryption, key is required only once and is saved to
                localStorage.
            </li>
            <li>Deployed F/HF.</li>
            <li>Add some transition effects.</li>
        </ul>

        <h4>v0.5.2</h4>
        <ul>
            <li>Something other than a gif on the homepage.</li>
            <li>Deployed S;G and S;G0</li>
        </ul>

        <h4>v0.5.1</h4>
        <ul>
            <li>Add encryption to fetch private videos.</li>
            <li>
                Remove torrent web player, it worked fine on LAN however when
                connecting through mobile data it was extremely slow (82 kb/s)
                or when connecting through the Internet (same ISP) it didn't
                load at all. Changed back to OneDrive.
            </li>
        </ul>

        <h4>v0.5.0</h4>
        <ul>
            <li>Rewrite using SVELTE.</li>
            <li>Add torrent web player for decentralized streaming.</li>
        </ul>

        <h4>v0.4.0</h4>
        <ul>
            <li>Rewrite in LAMP stack.</li>
            <li>
                Removed fate content. Lack of space for a behemoth of a
                franchise.
            </li>
            <li>Next and Previous buttons under player</li>
        </ul>

        <h4>v0.3.3</h4>
        <ul>
            <li>Deploy BDRip of UBW.</li>
            <li>Transcode web-optimized UBW BDrip. (26/26)</li>
        </ul>

        <h4>v0.3.2</h4>
        <ul>
            <li>
                <del>Deployed BDRip of FZero.</del> Rollback due to mobile devices
                not supporting the video codec.
            </li>
            <li>
                Changed episode names to a dropdown list to easily jump between
                multiple episodes.
            </li>
        </ul>

        <h4>v0.3.1</h4>
        <ul>
            <li>Implemented this changelog.</li>
            <li>
                Implemented a json based series pages auto generation using
                Gatsby's API. Caveat is the loss of per page customization such
                as previous S;G tu-tu-ru when changing episodes.
            </li>
            <li>
                Bugfix: json file slug field must have a / before the slug to be
                rooted in the page, not having it results in the page being
                linked in /series/ instead of the root. Added a / before the
                offending fields. Where this prefix comes from I have no idea.
            </li>
        </ul>

        <h4>v0.3.0</h4>
        <ul>
            <li>Rewrite in Gatsby.js + React.js.</li>
            <li>Helmet wrapper for tab titles in one line. (DRY)</li>
            <li>Legacy redirects implemented, dropped some urls temporally.</li>
            <li>
                Bugfix: custom 404 not working, implemented a manual redirect to
                the 404 page, this is necessary because of broken urls.
            </li>
        </ul>

        <h4>v0.2.1</h4>
        <ul><li>Deployed spoiler version of FSN.</li></ul>

        <h4>v0.2.0</h4>
        <ul>
            <li>
                Validated cookies have unique identifiers to avoid overriding
                states between series.
            </li>
            <li>Validated linking between pages.</li>
            <li>Verified quotes.</li>
            <li>Deployed low-quality bladeworks.</li>
        </ul>

        <h4>v0.1.2 - Alpha</h4>
        <ul><li>Unknown progress.</li></ul>
    </div>
</main>
