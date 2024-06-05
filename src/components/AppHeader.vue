<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/lessons">Lessons</router-link>
      <router-link to="/practice">Practice</router-link>
      <router-link to="/resources">Resources</router-link>
      <router-link to="/profile">Profile</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  background: #4CAF50;
  padding: 1em;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 2em; /* Adjust this value to increase/decrease the spacing */
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
