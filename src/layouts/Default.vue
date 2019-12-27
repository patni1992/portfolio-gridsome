<template>
  <div class="container">
    <app-header /> 
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import AppHeader from "~/components/AppHeader.vue"
export default {
  components: {
    AppHeader
  },
  metaInfo: {
    title: "Hello, world!"
  },
  data() {
    return {
      isActive: true
    };
  }
};
</script>
<style>

</style>
