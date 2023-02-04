<template>
    <form class="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="username">
              Username
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="username" type="text" placeholder="******************">
            <p class="text-red-500 text-xs italic">Harap Di isi</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Password
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
            <p class="text-gray-600 text-xs italic">! Bikin yang rumit namun mudah di ingat !</p>
          </div>
        </div>
      </form>
      <div class="flex flex-row-reverse">
        <div>
          <router-link to="/login"><button class="bg-gray-200 px-5 py-1 rounded-3xl">Daftar</button></router-link>
        </div>
        <div>
          <router-link to="/login"><button class="bg-gray-200 px-5 py-1 rounded-3xl">Back</button></router-link>
        </div>
      </div> 
</template>