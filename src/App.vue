<template>
  <div id="app">
    <nav>
      <router-link to="/">MAIN</router-link>
      <router-link to="/test">TEST</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav a {
  display: inline-block;
  padding: 4px 12px;
  margin: 0 4px;
  border: 1px solid;
}
</style>
