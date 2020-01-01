<template>
  <header class="header">
    <b-navbar>
      <template slot="start">
        <b-navbar-item href="/">
          Home
        </b-navbar-item>
        <b-navbar-item href="/#projects">
          Projects
        </b-navbar-item>
        <b-navbar-item href="/#contact">
          Contact
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    .header {
        font-size: 1.5rem;
    }
</style>
