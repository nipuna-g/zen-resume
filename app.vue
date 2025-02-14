<template>
  <div>
    <nav class="p-4 bg-gray-800 text-white">
      <ul class="flex space-x-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
        <li><NuxtLink to="/register">Register</NuxtLink></li>
        <li><NuxtLink to="/editor">Resume Editor</NuxtLink></li>
      </ul>
    </nav>
    <NuxtPage />
  </div>
</template>
