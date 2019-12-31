<template>
  <div class="container">
    <app-header />
    <slot />
    <app-footer />
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
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter
  },
  metaInfo: {
    title: "Patrik Nilsson Portfolio"
  },
  data() {
    return {
      isActive: true
    };
  }
};
</script>
<style></style>
