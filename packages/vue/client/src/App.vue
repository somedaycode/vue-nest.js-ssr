<template>
  <div id="app">
    <div>
      <router-link to="/">About</router-link> |
      <router-link to="/todo">TodoPage</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
a {
  text-decoration: none;
  color:inherit;
  
}
</style>
