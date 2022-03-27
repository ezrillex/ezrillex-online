<script>
    import { Card, CardBody } from "sveltestrap";
    export let nombre;
    export let emoji;
    export let nota;

    let color = "";
    let hacker = "";
    if (nota === 10) {
        hacker = "background-color: #20C20E;"
    } else if (nota >= 7) {
        color = "success";
    } else if (nota >= 6) {
        color = "warning";
    } else if ((nota < 6) & (nota > 0)) {
        color = "danger";
    } else {
        color = "secondary";
    }
</script>

    <Card class="col m-3" inverse {color} style={hacker}>
        <CardBody class="d-flex flex-column ">
            <span>{nombre}</span><br />
            <span class="align-self-center">{nota}</span>
        </CardBody>
        <p>{emoji}</p>
    </Card>

<style>
    p {
        position: absolute;
        font-size: xx-large;
        right: -1.5rem;
        top: -1.5rem;
    }

    
</style>
