<template>
  <div class="home">
    <h1>Home</h1>
    <a v-on:changeMessage="changeMessage($event)">{{msg}}</a>
    <button v-on:click = "navigate">Click me</button>
    <names></names>
    <!-- <router-link class="nav-link" to="/begginer" title="55455">Blog</router-link> -->
  </div>
</template>
<script>
// import router from 'vue-router'
import router from '../router/index'
import Names from './Names.vue'
export default {
  components: { names :Names },
  name: 'home',
  props:{
    title:String
  },
  data () {
    return {
      msg: this.title,
      titleTemp:"Vue Js Wizards",
      names:['naveen','karan','prasanna']
    }
  },
  methods:{
    navigate:function(){
      // alert("Hi Naveen")
      router.push({name:'begginer', params: { title: this.titleTemp }})
    },
    changeMessage:function(updatedMessage){
      console.log("updatedMessage",updatedMessage)
      this.msg = updatedMessage
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>