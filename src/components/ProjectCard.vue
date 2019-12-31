<template>
  <div>
    <div class="card columns">
      <div class="card-image column is-8">
        <figure  style="height: 100%;">
          <g-image   fit="cover" :src="frontImg" />
        </figure>
      </div>
      <div class="card-content column is-4">
        <div class="media">
          <div class="media-content">
            <h2 class="title is-4">{{ title }}</h2>
          </div>
        </div>

        <div class="content">
          <p style="margin-bottom: 0;" class="description"> 
            {{ description }}
          </p>
          <div class="field is-grouped is-grouped-multiline">
            <div class="control">
              <ul>
                <li v-for="feature in features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </div>
            
         
            <div class="portfolio-links">
              <a target="_blank" class="github-link" :href="github">
               
                  <img  svg-inline class="svg-icon" src="../assets/svgs/Github.svg" alt="github-icon" />
                Repo
              </a>
             
            </div>
            <div class="tags">
              <span class="tag is-medium" v-for="tag in tags" :key="tag">{{
                tag
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      requtype: String,
      required: true
    },
    description: {
      requtype: String,
      required: true
    },
    features: {
      type: Array
    },
    tags: {
      type: Array
    },
    github: {type: String},
    frontImg: {
      requtype: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.svg-icon {
    height: 1.2rem;
    width: 1.2rem;
}
.card {
  margin: 2rem 0;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.05),
    0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1);
}
.card .media:not(:last-child) {
  margin-bottom: 0.75rem;
}
.card.card--reverse-order {
  flex-direction: row-reverse;
}

.card-content {
  padding:  0.8rem;
}

.card-image {
  padding: 0;
}
.card.is-horizontal .card-image .image {
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.control {
  li {
    margin-left: -1rem;
  }
}
.tags {
  margin: 0.5rem 0;
}

.portfolio-links {
  display: block;
  width: 100%;
  margin: 0.5rem 0;

  .svg-icon {
    margin-right: 0.2rem;
  }

.github-link {
  display: inline-flex;
  align-self: center;
}
 

  a {
    color: #4a4a4a;
  }
}

</style>
