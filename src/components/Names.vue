<template>
    <ul>
      <li v-for="name in names " :key="name">{{ name }}</li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            names:['naveen','karan','prasanna']
        }
    }
}
</script>
<style scoped>

</style>