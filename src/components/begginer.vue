<template>
  <div>
       <h1>Welcome to begginer class {{ title }}</h1>
       <button @click="sendParent">Show</button>
  </div>
</template>

<script>
export default {
  created() {
    console.log('Component has been created!');
  },
  name: 'begginer',
  props: {
    title: String
  },
  // data(){
  //   return{
  //     message:this.msg
  //   }
  // },
  methods:{
    showconsole:function(){
      console.log(this.title)
    },
    sendParent:function(){
      this.$emit('changeMessage', 'Vue js pros')
      this.$router.push({name:'home',params:{title:"Vue js pros"}})
    }
  }
}
</script>

<style>

</style>