<script>
    import Materia from "../components/Materia.svelte";
    import { fade } from 'svelte/transition'
    import ProgressBar from "@okrad/svelte-progressbar";

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
            emoji: "😍",
        },
        {
            nombre: "ORGANIZACIÓN DE LAS COMPUTADORAS",
            nota: 8.4,
            emoji: "😍",
        },
        {
            nombre: "SEMINARIO TALLER DE COMPETENCIAS",
            nota: 8,
            emoji: "😍",
        },
        {
            nombre: "FÍSICA I",
            nota: 6.4,
            emoji: "😍",
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
            emoji: "😍",
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
            emoji: "😍",
        },
        {
            nombre: "FÍSICA II",
            nota: 9.6,
            emoji: "😍",
        },
        {
            nombre: "MATEMÁTICA II",
            nota: 8.4,
            emoji: "😍",
        },
        {
            nombre: "INGENIERÍA Y PRODUCTIVIDAD",
            nota: 8.8,
            emoji: "😍",
        },
        {
            nombre: "PROGRAMACIÓN III",
            nota: 10,
            emoji: "😎",
        },
        {
            nombre: "ADMINISTRACIÓN DE CENTROS DE CÓMPUTO",
            nota: 0,
            emoji: "🧐",
        },
        {
            nombre: "PROGRAMACIÓN IV ",
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

<main in:fade="{{duration: 500}}" >
    <div class="container text-center p-5">
        <br />
        <div class="d-flex align-items-center justify-content-center mb-4">
            <h1 class="me-2">Ingeniero en Sistemas</h1>
            <ProgressBar
                thickness="10"
                textSize="150"
                style="radial"
                {series}
            />
        </div>

        <div class="container  ">
            <div  class="row row-cols-auto justify-content-center" >
                {#each data as mat}
                    <Materia {...mat} />
                {/each}
            </div>
        </div>
    </div>
</main>

<style>
    h1 {
        display: inline;
    }
</style>
