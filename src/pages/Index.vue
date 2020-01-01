<template>
  <Layout v-on:scroll.native="handleScroll">
    <div class="spacing">
      <h1 class="title-header" id="title">
        >
      </h1>
      <p class="me-description">
        I am a fullstack developer. My passion is writing simple and beatiful
        code.
      </p>
    </div>
    <code-terminal class="spacing" />
    <div class="spacing">
      <h2 id="projects" class="section-titles">></h2>
      <project-card
        v-for="project in $page.projects.edges"
        :key="project.node.title"
        :title="project.node.title"
        :description="project.node.description"
        :features="project.node.features"
        :tags="project.node.tags"
        :frontImg="project.node.frontImg"
        :github="project.node.github"
        :site="project.node.site"
      />
    </div>
    <div class="spacing">
      <h2 id="contact-title" class="section-titles">></h2>
      <contact-form  id="contact"/>
    </div>
  </Layout>
</template>

<script>
import CodeTerminal from "~/components/CodeTerminal.vue";
import ContactForm from "~/components/ContactForm.vue";
import ProjectCard from "~/components/ProjectCard.vue";
import isElementVisible from "~/utils/isElementVisible";
import typeWriter from "~/utils/typeWriter";

export default {
  components: {
    CodeTerminal,
    ContactForm,
    ProjectCard
  },
  methods: {
    handleScroll(event) {
      this.initWriting();
    },
    writeText(text, selector, flag) {
      if (this[flag] && isElementVisible(selector)) {
        typeWriter(0, 100, text, selector);
        this[flag] = false;
      }
    },
    initWriting() {
      this.writeText("Patrik Nilsson", "#title", "typeTitle");
      this.writeText("My Projects", "#projects", "typeProjects");
      this.writeText("Get in touch", "#contact-title", "typeContact");
    }
  },

  created: function() {
    if (typeof window === "undefined") {
      return;
    }
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.initWriting();
  },
  destroyed: function() {
    if (typeof window === "undefined") {
      return;
    }
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      isActive: true,
      typeTitle: true,
      typeProjects: true,
      typeContact: true
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
       github
       site
       frontImg (quality: 100)
      }
    }
  }
}
</page-query>

<style lang="scss">
.spacing {
  padding: 1.6rem 1rem;
}
.title-header {
  font-size: 3.1rem;
 
 @media only screen and (min-width: 768px) {
    font-size: 4.2rem;
  }
}
.section-titles {
  font-size: 2.8rem;
}
.me-description {
   font-size: 1.6rem;


   @media only screen and (min-width: 768px) {
     font-size: 2rem;
  }
}
</style>
