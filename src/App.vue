<script >
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
export default {
  setup(){

  },
  data(){
    return{
      post: {
        longUrl: '',
        shortUrl: '',
      },
    }

  },
  methods: {
    shorten(){
      let longUrl= this.post.longUrl
      let shortUrl= this.post.shortUrl

      axios.post('http://127.0.0.1:5000/api/url/shorten',{
        longUrl: longUrl,
        shortUrl: shortUrl,
      }).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<template>
  <div class="">
    <div class="border-8 border-red-500 py-5">
      
        <label class="p-4">Short Ur Link  </label>
        <!-- <span class="block text-sm font-medium text-slate-700">Username</span> -->
        <input type="text" name="username" class="border-2 border-black mx-4" v-model="post.longUrl"/>
        <button @click="shorten" class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ... px-5 rounded-3xl" >Short Now</button>
        <br>
        <br>
        <label class="p-5">Hasil Shorter</label>
        <input type="text" value="hasil shortener" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "/>
        <!-- <input type="text" name="username" class="border-2 border-black mx-4" :disabled="disabled"/>
         -->
        <!-- <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
        <span>Copy</span>
        </button> -->
        <div class="grid grid-cols-4 gap-4 border-8 border-indigo-600" >
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
          <div>08</div>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>
