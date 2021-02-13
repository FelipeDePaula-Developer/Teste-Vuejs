<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">

@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url("fonts/Roboto/Roboto-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "Marck Script";
  src: local("Marck Script"),
    url("fonts/Marck_Script/MarckScript-Regular.ttf") format("truetype");
}
#app {
  font-family: "Roboto", sans-serif;
}
</style>
