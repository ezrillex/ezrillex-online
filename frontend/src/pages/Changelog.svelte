<script>
    import {fade} from 'svelte/transition'
</script>
<main in:fade="{{duration: 500}}"> 
    <div class="container">
        <br>
        <div class="jumbotron">
            <h4>[Unreleased] v0.6.0</h4>
            <ul>
                <li>A blog.</li>
                <li>Account System</li>
                <li>A comment section under each episode.</li>
            </ul>

            <h4>[Unreleased] v0.5.5</h4>
            <ul>
                <li>Polish UI, most was just ported from bootstrap 4 to bootstrap 5 without major tweaks.</li>
                <li>Deploy Gravity Falls</li>
            </ul>

            <h4>[Unreleased] v0.5.4</h4>
            <ul>
                <li>Automated deployment with GitHub actions.</li>
                <li>Next episode autoplays.</li>
                <li>Deploy F/SN: 2005</li>
            </ul>

            <h4>v0.5.3</h4>
            <ul>
                <li>Reworked encryption, key is required only once and is saved to localStorage. </li>
                <li>Deployed Heavens Feel</li>
                <li>Add some transition effects.</li>
            </ul>

            <h4>v0.5.2</h4>
            <ul>
                <li>Something other than a gif on the homepage.</li>
                <li>Deploy Steins;Gate series.</li>
            </ul>

            <h4>v0.5.1</h4>
            <ul>
                <li>Add encryption to fetch private videos.</li>
                <li>Remove torrent web player, it worked fine on LAN however when connecting through mobile data it was extremely slow (82 kb/s) or when connecting through the Internet (same ISP) it didn't load at all. Changed back to OneDrive.</li>
            </ul>
    
            <h4>v0.5.0</h4>
            <ul>
                <li>Rewrite using SVELTE.</li>
                <li>Add torrent web player for decentralized streaming.</li>
            </ul>
    
            <h4>v0.4.0</h4>
            <ul>
                <li>Rewrite in LAMP stack.</li>
                <li>Removed fate content. Lack of space for a behemoth of a franchise.</li>
                <li>Next and Previous buttons under player</li>
            </ul>
    
            <h4>v0.3.3</h4>
            <ul>
                <li>Deploy BDRip of UBW.</li>
                <li>Transcode web-optimized UBW BDrip. (26/26)</li>
            </ul>
    
            <h4>v0.3.2</h4>
            <ul>
                <li><del>Deployed BDRip of FZero.</del> Rollback due to mobile devices not supporting the video codec.</li>
                <li>Changed episode names to a dropdown list to easily jump between multiple episodes.</li>
            </ul>
    
            <h4>v0.3.1</h4>
            <ul>
                <li>Implemented this changelog.</li>
                <li>Implemented a json based series pages auto generation using Gatsby's API. Caveat is the loss of per page customization such as previous S;G tu-tu-ru when changing episodes.</li>
                <li>Bugfix: json file slug field must have a / before the slug to be rooted in the page, not having it results in the page being linked in /series/ instead of the root. Added a / before the offending fields. Where this prefix comes from I have no idea.</li>
            </ul>
    
            <h4>v0.3.0</h4>
            <ul>
                <li>Rewrite in Gatsby.js + React.js.</li>
                <li>Helmet wrapper for tab titles in one line. (DRY)</li>
                <li>Legacy redirects implemented, dropped some urls temporally.</li>
                <li>Bugfix: custom 404 not working, implemented a manual redirect to the 404 page, this is necessary because of broken urls.</li>
            </ul>
    
            <h4>v0.2.1</h4>
            <ul><li>Deployed spoiler version of FSN.</li></ul>
    
            <h4>v0.2.0</h4>
            <ul>
                <li>Validated cookies have unique identifiers to avoid overriding states between series.</li>
                <li>Validated linking between pages.</li>
                <li>Verified quotes.</li>
                <li>Deployed low-quality bladeworks.</li>
            </ul>
    
            <h4>v0.1.2 - Alpha</h4>
            <ul><li>Unknown progress.</li></ul>
        </div>
    </div>
</main>