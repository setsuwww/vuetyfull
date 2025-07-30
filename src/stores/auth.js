import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  const login = async (email, password) => {
    if (email === 'user@example.com' && password === '123456') {
      user.value = { name: 'User', email }
      return true
    }
    return false
  }

  const register = async (name, email, password) => {
    user.value = { name, email }
  }

  const logout = () => {
    user.value = null
  }

  return { user, login, register, logout }
})
