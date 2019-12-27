<template>
  <Layout>
    <h1 class="title-header"> 
      > Patrik Nilsson
    </h1>
    <code-terminal class="spacing" />
    <project-card
      v-for="project in $page.projects.edges"
      :key="project.node.title"
      :title="project.node.title"
      :description="project.node.description"
      :features="project.node.features"
      :tags="project.node.tags"
      :frontImg="project.node.frontImg"
    />
    <contact-form class="spacing" />
  </Layout>
</template>

<script>
import CodeTerminal from "~/components/CodeTerminal.vue";
import ContactForm from "~/components/ContactForm.vue";
import ProjectCard from "~/components/ProjectCard.vue";
export default {
  components: {
    CodeTerminal,
    ContactForm,
    ProjectCard
  },
  metaInfo: {
    title: "Hello, world!"
  },
  mounted() {
    console.log(this.$page);
  },
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<page-query>
{
  projects: allPost(filter:{fileInfo: {directory: {regex: "content/projects"}} }) {
    edges {
      node {
       title
       description
       features
       tags
       frontImg (quality: 100)
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.spacing {
  margin: 5rem 0;
}
.title-header {
  font-size: 5rem;
}
</style>
