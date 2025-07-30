<template>
  <div class="flex items-center justify-center px-6 py-12">
    <div class="w-full max-w-6xl bg-white border border-gray-200 rounded-xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-gray-700 text-center mb-6">Login</h2>
      <div class="space-y-6">
        <!-- Email Field -->
        <Input id="email" type="email" customClass="px-3 py-2" label="Email"
          placeholder="Enter your email"
          v-model="email"
        />

        <Input id="password" type="password" customClass="px-3 py-2" label="Password"
          placeholder="Enter your password"
          v-model="password"
        />

        <!-- Remember Me and Forgot Password -->
        <div class="flex items-center justify-between">
          <label class="flex items-center space-x-2">
            <input v-model="rememberMe" type="checkbox" class="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-200 rounded"/>
            <span class="text-sm font-semibold text-gray-600">Remember Me</span>
          </label>
          <a href="#" class="text-sm font-semibold text-teal-600 hover:text-teal-700">Forgot Password?</a>
        </div>

        <!-- Login Button -->
        <button @click="handleLogin" class="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200">
          Sign In
        </button>

        <!-- Link to Register -->
        <AuthLink label="Don't have an Account?" link="/auth/register" text="Register"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Input from '@/components/ui/Input.vue';
import AuthLink from './AuthLink.vue';

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const router = useRouter()

const handleLogin = async () => {
  if (!email.value || !password.value) {
    alert('Email dan Password harus diisi!')
    return
  }

  try {
    const res = await fetch('http://localhost:4321/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.message || 'Login gagal')
      return
    }

    localStorage.setItem('user', JSON.stringify(data.user))
    router.push('/admin/dashboard')

  } catch (error) {
    console.error('Login error:', error)
    alert('Terjadi kesalahan saat login')
  }
}
</script>