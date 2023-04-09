<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/log-in">Log In</RouterLink>
        <RouterLink to="/sign-up">Sign Up</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
       
      </nav>
      
    </div>
  </header>

  <RouterView />
</template>

