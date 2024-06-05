<template>
  <div id="app">
    <div class="content">
      <AppHeader />
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 1em;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}
</style>
