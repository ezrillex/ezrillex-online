<script>
    import Materia from "../components/Materia.svelte";
    import { fade } from "svelte/transition";
    import ProgressBar from "@okrad/svelte-progressbar";
    import { Row } from "sveltestrap";

    export let series = [
        {
            perc: ((21 / 45) * 100).toFixed(1),
            color: "#3CB043",
        },
    ];

    let data = [
        {
            nombre: "ALGORITMOS I",
            nota: 8.7,
            emoji: "😍",
        },
        {
            nombre: "MATEMÁTICA I",
            nota: 6.0,
            emoji: "😒",
        },
        {
            nombre: "ORGANIZACIÓN DE LAS COMPUTADORAS",
            nota: 8.4,
            emoji: "😍",
        },
        {
            nombre: "SEMINARIO TALLER DE COMPETENCIAS",
            nota: 8,
            emoji: "😒",
        },
        {
            nombre: "FÍSICA I",
            nota: 6.4,
            emoji: "😒",
        },
        {
            nombre: "PROGRAMACIÓN ORIENTADA A OBJETOS",
            nota: 8.7,
            emoji: "😍",
        },
        {
            nombre: "INGLÉS I ",
            nota: 8.7,
            emoji: "🤣",
        },
        {
            nombre: "BASE DE DATOS I",
            nota: 7.3,
            emoji: "😍",
        },
        {
            nombre: "PROGRAMACIÓN I",
            nota: 7.5,
            emoji: "😍",
        },
        {
            nombre: "REALIDAD NACIONAL",
            nota: 0.4,
            emoji: "🤮",
        },
        {
            nombre: "UML",
            nota: 3.1,
            emoji: "🤬",
        },
        {
            nombre: "REALIDAD NACIONAL",
            nota: 7.4,
            emoji: "💻",
        },
        {
            nombre: "REDES DE DATOS I",
            nota: 7.6,
            emoji: "😍",
        },
        {
            nombre: "UML",
            nota: 8.3,
            emoji: "😌",
        },
        {
            nombre: "ADMINISTRACIÓN I",
            nota: 9.7,
            emoji: "😒",
        },
        {
            nombre: "BASE DE DATOS II",
            nota: 9.4,
            emoji: "😍",
        },
        {
            nombre: "DESARROLLO DE LA PLATAFORMA WEB",
            nota: 8.3,
            emoji: "💪",
        },
        {
            nombre: "PROGRAMACIÓN II",
            nota: 7.9,
            emoji: "😍",
        },
        {
            nombre: "EXPRESIÓN ORAL Y ESCRITA DEL ESPAÑOL",
            nota: 7.7,
            emoji: "😒",
        },
        {
            nombre: "FÍSICA II",
            nota: 9.6,
            emoji: "😒",
        },
        {
            nombre: "MATEMÁTICA II",
            nota: 8.4,
            emoji: "😒",
        },
        {
            nombre: "INGENIERÍA Y PRODUCTIVIDAD",
            nota: 8.8,
            emoji: "😒",
        },
        {
            nombre: "PROGRAMACIÓN III",
            nota: 10,
            emoji: "😎",
        },

        {
            nombre: "PROGRAMACIÓN IV ",
            nota: 0,
            emoji: "🧐",
        },
        {
            nombre: "ADMINISTRACIÓN DE CENTROS DE CÓMPUTO",
            nota: 0,
            emoji: "🧐",
        },
        {
            nombre: "FÍSICA III",
            nota: 0,
            emoji: "🧐",
        },
        {
            nombre: "MATEMÁTICA III",
            nota: 0,
            emoji: "🧐",
        },
        {
            nombre: "FILOSOFÍA",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "DIBUJO TÉCNICO",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "MATEMÁTICA IV",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "ESTADÍSTICA Y PROBABILIDADES",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "REDES DE DATOS II",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "MATEMÁTICA FINANCIERA",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "LENGUAJE DE MÁQUINA",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "ELECTRÓNICA",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "SISTEMAS DE INFORMACIÓN GERENCIAL",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "SISTEMAS DIGITALES",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "INGLÉS II ",
            nota: 0,
            emoji: "🤣",
        },
        {
            nombre: "ESTÁNDARES DE PROGRAMACIÓN",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "SISTEMAS OPERATIVOS",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "DESARROLLO DE SOFTWARE I (ET1)",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "DESARROLLO DE SOFTWARE II (ET2) ",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "DESARROLLO DE SOFTWARE III (ET3) ",
            nota: 0,
            emoji: "🤔",
        },
        {
            nombre: "DESARROLLO DE SOFTWARE IV (ET4)",
            nota: 0,
            emoji: "🤔",
        },
    ];
</script>

<main in:fade={{ duration: 500 }}>
    <div class="container p-5">
        <div
            class="row row-cols-1 row-cols-md-2 justify-content-md-center pb-5"
        >
            <div class="col col-md-auto ps-0 pe-0">
                <div class="d-flex justify-content-center">
                    <img src="./images/PFP.jpeg" alt="Developer" />
                </div>
                
            </div>

            <div class="col align-self-center">
                <div class="row ">
                    <div
                        class="d-flex justify-content-center align-items-center"
                    >
                        <h1 class="me-2">Ingeniero en Sistemas</h1>
                        <ProgressBar
                            thickness="10"
                            textSize="150"
                            style="radial"
                            {series}
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="d-flex flex-row justify-content-evenly">
                        <a
                            href="https://www.linkedin.com/in/ezra-alejandro-abarca-cordova-sv"
                            target="_blank"
                            class="link-dark"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="auto" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a
                            href="https://github.com/ezrillex"
                            target="_blank"
                            class="link-dark"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="3rem"
                                height="auto"
                                fill="currentColor"
                                class="bi bi-github fa-lg"
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

        <div class="container  ps-0 pe-0">
            <div class="row row-cols-auto justify-content-evenly">
                {#each data as mat}
                    <Materia {...mat} />
                {/each}
            </div>
        </div>
    </div>
</main>

<style type="text/postcss">
    h1 {
        display: inline;
    }

    img {
        width: 100%;
        border-radius: 10%;
        max-width: 15rem;
        height: auto;
    }

   @include media-breakpoint-down(md){
       img {
           max-width: 100%;
       }
   }
    
</style>
