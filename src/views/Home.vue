<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to Prompt Teaching App</h1>
      <p>Your one-stop shop for mastering ChatGPT prompts and enhancing your productivity.</p>
      <router-link to="/lessons" class="cta-button">Get Started with Lessons</router-link>
    </section>

    <section class="introduction">
      <h2>Introduction</h2>
      <p>Our platform offers a comprehensive set of tools and resources to help you create effective prompts for ChatGPT. Whether you're a beginner or an experienced user, our lessons and practice areas will guide you through the process of mastering prompt creation.</p>
    </section>

    <section class="links">
      <h2>Explore More</h2>
      <ul>
        <li><router-link to="/lessons">Lessons</router-link></li>
        <li><router-link to="/practice">Practice</router-link></li>
        <li><router-link to="/resources">Resources</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  padding: 2em;
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
}

.hero {
  text-align: center;
  margin-bottom: 2em;
  background-color: #f0f4f8;
  padding: 2em;
  border-radius: 8px;
}

.hero h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
  color: #333;
}

.hero p {
  font-size: 1.5em;
  margin-bottom: 1.5em;
  color: #666;
}

.cta-button {
  background-color: #4CAF50;
  color: white;
  padding: 1em 2em;
  font-size: 1.2em;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #45a049;
}

.introduction, .links {
  margin-bottom: 2em;
}

.introduction h2, .links h2 {
  font-size: 2.5em;
  margin-bottom: 0.5em;
  color: #333;
}

.links ul {
  list-style: none;
  padding: 0;
}

.links li {
  margin-bottom: 0.5em;
}

.links li a {
  color: #4CAF50;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.3s ease;
}

.links li a:hover {
  color: #45a049;
  text-decoration: underline;
}
</style>
