<script>
    import { fade } from "svelte/transition";
    import visitors from "../stores/visitorStore"


    const percentage = ((26 / 45) * 100).toFixed(1);
    
</script>

<main in:fade={{ duration: 500 }}>
    <div class="container p-5 ">
        <div
            class="row row-cols-1 row-cols-md-2 justify-content-md-center pb-5 "
        >
            <div class="col col-md-auto ps-0 pe-0 ">
                <div class="d-flex justify-content-center">
                    <img
                        src="./images/PFP.jpeg"
                        alt="Developer"
                    />
                </div>

                <div class="d-flex justify-content-center align-items-center ">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 488.85 488.85"
                        class="h-auto w-2rem"
                        style="enable-background:new 0 0 488.85 488.85;"
                        xml:space="preserve"
                    >
                        <g>
                            <path
                                d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2
                        s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025
                        c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3
                        C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7
                        c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"
                            />
                        </g>
                    </svg>
                    <span class="ms-2 fs-4 ">{$visitors}</span>
                </div>
            </div>

            <div class="col align-self-center">
                <div class="row mt-3">
                    <div
                        class="d-flex justify-content-center align-items-center"
                    >
                        <h1 class="me-2">Systems Engineer</h1>
                        <div class="wheel">
                            <p class="text-middle text-center">{percentage}%</p>

                            <div class="the-wheel" />
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div
                        class="d-flex flex-row justify-content-evenly align-items-center"
                    >
                        <a
                            href="https://academy.pega.com/verify-certification?fname=Ezra&lname=Abarca"
                            target="_blank"
                        >
                            <img
                                src="/images/pega.png"
                                class="pega"
                                alt="PEGA 8.5 CSA Certification"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ezra-alejandro-abarca-cordova-sv"
                            target="_blank"
                            class="link-dark"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="h-auto w-5rem"
                                ><path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                /></svg
                            >
                        </a>
                        <a
                            href="https://github.com/ezrillex"
                            target="_blank"
                            class="link-dark"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="bi bi-github fa-lg h-auto w-5rem"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                                />
                            </svg></a
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center">
            <h1>~My Projects~</h1>
        </div>
        <div class="card mt-3">
            <div class="row g-0 justify-content-center">
                <div class="col col-auto ">
                    <img
                        src="/images/tech-stack-abarca-dev.png"
                        alt="project tech stack"
                        classes="img-fluid"
                        loading="lazy"
                    />
                </div>

                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title">ezra.abarca.dev</h5>
                        <p class="card-text text-justify">
                            My personal website tech stack is: Svelte.JS
                            (frontend), Bootstrap 5 (Styles), Express.JS (API),
                            Wordpress (Headless CMS), Github (CI/CD), OneDrive
                            (Video Hosting), Crypto.JS (decrypting / encrypting
                            onedrive links). The frontend is available on
                            GitHub.
                        </p>

                        <div class="card-text">
                            <a
                                href="https://github.com/ezrillex/abarca.dev-frontend"
                                target="_blank"
                                class="link-dark"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    class="bi bi-github fa-lg h-auto w-3rem"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/ezrillex/abarca.dev-frontend"
                                target="_blank"
                                class="link-dark ms-1"
                            >
                                <p class="d-inline">View repo on GitHub.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style type="text/postcss">
    .w-2rem {
        width: 2rem;
    }
    .w-3rem {
        width: 3rem;
    }
    .w-5rem {
        width: 5rem;
    }

    h1 {
        display: inline;
    }

    img {
        width: 100%;
        border-radius: 10%;
        max-width: 15rem;
        height: auto;
    }

    .pega {
        width: 10rem;
        height: auto;
        margin: -0.5rem;
    }

    @include media-breakpoint-down(md) {
        img {
            max-width: 100%;
        }
    }

    .the-wheel {
        background-color: transparent;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        top: 0px;
        position: absolute;
        border-style: solid;
        border-color: green;
        border-width: 12px;
        /*clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%);
        https://bennettfeely.com/clippy/ */
        clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
    }

    .wheel {
        width: 100px;
        height: 100px;
        position: relative;
    }

    .text-middle {
        position: relative;
        top: 37%;
    }
</style>
