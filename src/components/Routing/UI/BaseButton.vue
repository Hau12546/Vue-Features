<template>
    <button type="function" class="mode">
        <slot name="commonButton">
        </slot>
    </button>
</template>


<style scoped>
    .myButton{
        margin: .5em;
        padding: 1em;
        border: 1px solid rgb(228, 220, 220);
        background-color: transparent;
        color: #000000;
        transition:  all 300ms ease-in-out;
    }
    button:hover{
        box-shadow: 3px 3px rgb(228, 220, 220), 1px 1px rgb(228, 220, 220), 3px 3px rgb(228, 220, 220);
    }

</style>

<script>
export default {
    props:['function','mode']
}
</script>