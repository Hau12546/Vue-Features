<template>
    <ul >
        <li v-for="(goal,index) in goals" :key="index">
            <slot name="slotProps" v-bind="goal" another-prop="index"></slot>
        </li>
    </ul>
</template>


<script>
export default {
    data(){
        return {
            goals:['Learn Vue','Be Dev']
        }
    }
}
</script>