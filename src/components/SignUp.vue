<script>
export default {
  name: 'SignUp',
  data() {
    return {
      UserName: '',
      Email: '',
      Password: '',
      ConfirmPassword: '',
      passwordError: '',
      confirmPasswordError: ''
    }
  },
  methods: {
    handleSubmit() {
      // Check if the password is valid
      if (!this.validatePassword()) {
        // Set the error message for password validation
        this.passwordError =
          'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.'
        return // Stop form submission if password is not valid
      }

      // Check if passwords match
      if (this.Password !== this.ConfirmPassword) {
        // Set the error message for password mismatch
        this.confirmPasswordError = 'Passwords do not match.'
        return // Stop form submission if passwords don't match
      }

      // Clear any previous error messages
      this.passwordError = ''
      this.confirmPasswordError = ''

      // Proceed with form submission
      console.log('Form submitted!')
      console.log(this.UserName, this.Email, this.Password, this.ConfirmPassword)
    },
    validatePassword() {
      const strongPasswordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      return strongPasswordRegex.test(this.Password)
    }
  }
}
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto p-8 bg-white rounded-md shadow-md">
      <h1 class="text-2xl">Weather App</h1>
      <div>
        <h1 class="text-violet-900 text-1xl font-bold mb-6">SignUp</h1>
      </div>
      <div class="mb-3">
        <label for="userName" class="text-gray-700 font-normal text-left">User Name:</label>
        <input
          type="text"
          v-model="UserName"
          required
          class="w-full p-1 border border-solid border-gray-300 rounded-md box-border outline-none"
          placeholder="UserName"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="text-gray-700 font-normal">Email:</label>
        <input
          type="email"
          v-model="Email"
          required
          class="w-full p-1 border border-solid border-gray-300 rounded-md box-border outline-none"
          placeholder="Email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="text-gray-700 font-normal">Password:</label>
        <input
          type="password"
          v-model="Password"
          required
          class="w-full p-1 border border-solid border-gray-300 rounded-md box-border outline-none"
          placeholder="Password"
        />
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="text-gray-700 font-normal">Confirm Password:</label>
        <input
          type="password"
          v-model="ConfirmPassword"
          required
          class="w-full p-1 border border-solid border-gray-300 rounded-md box-border outline-none"
          placeholder="Confirm Password"
        />
        <!-- Display error message if passwords don't match -->
        <span v-if="confirmPasswordError" class="text-red-500">{{ confirmPasswordError }}</span>
      </div>
      <!-- Display error message if password is not valid -->
      <span v-if="passwordError" class="text-red-500 text-[12px]">{{ passwordError }}</span>
      <button
        type="submit"
        class="bg-violet-900 text-white p-1 rounded-md cursor-pointer transition duration-300 w-full"
      >
        Sign Up
      </button>
      <p class="text-blue-500 mt-3 text-sm">
        If you have Already account Please?
        <router-link to="/LogIn" class="text-black">Log In</router-link>
      </p>
    </form>
  </div>
</template>
