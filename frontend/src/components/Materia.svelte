<script>
    import { Card, CardBody } from "sveltestrap";
    export let nombre;
    export let emoji;
    export let nota;
   
    let color = '';
    if(nota >= 7){
        color = "success"
    }
    else if(nota >= 6){
        color = "warning";
    }
    else if(nota < 6 & nota > 0){
        color = "danger"
    }
    else {
        color = "secondary"
    }
</script>

<Card class="col m-3 " inverse {color}>
    <CardBody>{ nombre }<br>{nota}</CardBody>
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
