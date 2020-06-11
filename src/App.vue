<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
@import '~assets/css/global.css';

#app{
  background-color: #f7f7f7;
  height: 100vh;
}
</style>
