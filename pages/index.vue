<script setup>
  // This is just a mock of an actual axios instance.
  const axios = {
    post: () => new Promise(r => setTimeout(r, 1000))
  }

  async function login (credentials) {
    const res = await axios.post(credentials)
    // do some login things now
    alert('Logged in!')
  }
</script>

<template>
<div>
  <div class="container-fluid">
    <div class="row vh-100">
      <div class="col-7 welcome d-flex align-items-center ">
        <h1 class="text-welcome mb-5 pb-5 pl-5">
          Welcome!
        </h1>
      </div>
      <div class="col-5 d-flex justify-content-center align-items-center">
        <div class="row row-cols-3">
          <div class="d-flex justify-content-center align-items-center col-12 mb-5">
            <div class="logo row d-flex justify-content-center">
              <img src="/assets/img/logo.svg" alt="" class="imag col-12">
              <h1 class="d-flex justify-content-center align-items-center col-12">To Do List</h1>
            </div>
          </div>

          <div class="col-12 d-flex justify-content-center">
            <div class="formulario d-flex justify-content-center">
                <FormKit
                type="form"
                submit-label="Login"
                @submit="login"
                >
                <FormKit
                  name="email"
                  label="Email address"
                  validation="required|email"
                />
                <FormKit
                  type="password"
                  name="password"
                  label="Password"
                  validation="required"
                />
              </FormKit>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <p class="olvidaste"><a href="#">¿Olvidaste tu contraseña?</a></p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
// Use a static import for server-side compatibility
import '~/assets/styles/first.css'

// Caution: Dynamic imports are not server-side compatible
import('~/assets/styles/first.css')
</script>