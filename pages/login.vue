<template>
  <div class="container mx-auto p-8 max-w-md">
    <h1 class="text-3xl font-bold mb-6">Login</h1>
    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label class="block mb-2">Email</label>
        <input type="email" v-model="email" class="w-full p-2 border rounded" required />
      </div>
      <div>
        <label class="block mb-2">Password</label>
        <input type="password" v-model="password" class="w-full p-2 border rounded" required />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
    </form>
  </div>
</template>

<script setup>
const email = ref("");
const password = ref("");

const handleLogin = () => {
  // Add login logic here
  console.log("Login attempt:", { email: email.value, password: password.value });
};
</script>
