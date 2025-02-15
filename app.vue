<template>
  <div>
    <nav class="p-4 text-white bg-gray-800">
      <ul class="flex space-x-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
        <li><NuxtLink to="/register">Register</NuxtLink></li>
        <li><NuxtLink to="/123/edit">Resume Editor</NuxtLink></li>
      </ul>
    </nav>
    <NuxtPage />
  </div>
</template>
