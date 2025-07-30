<template>
  <div class="flex items-center justify-center px-6 py-12">
    <div class="w-full max-w-lg bg-white rounded-xl shadow-sm p-8">
      <h2 class="text-2xl font-bold text-gray-700 text-center mb-6">Register</h2>
      <div class="space-y-6">

        <!-- Name Field -->
        <Input id="username" type="username" customClass="px-3 py-2" label="Username"
          placeholder="Enter your username"
          v-model="username"
        />

        <!-- Email Field -->
        <Input id="email" type="email" customClass="px-3 py-2" label="Email"
          placeholder="Enter your email"
          v-model="email"
        />

        <!-- Password Field -->
        <Input id="password" type="password" customClass="px-3 py-2" label="Password"
          placeholder="Enter your password"
          v-model="password"
        />

        <!-- Register Button -->
        <button @click="handleRegister" class="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200">
          Create Account
        </button>

        <!-- Link to Login -->
        <AuthLink label="Have an account?" link="/auth/login" text="Sign In"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Input from '@/components/ui/Input.vue';
import AuthLink from './AuthLink.vue';

const router = useRouter()
const username = ref('')
const email = ref('')
const password = ref('')

// function handleRegister -> Api
const handleRegister = async () => {
  try {
    await fetch('http://localhost:4321/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        username: username.value, 
        email: email.value, 
        password: password.value 
      }),
    })
    router.push('/auth/login')
  } catch (err) {
    console.error(err)
  }
}
</script>