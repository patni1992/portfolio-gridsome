<template>
  <div>
    <div class="card columns">
      <div class="card-image column is-8">
        <figure class="image is-4by3">
          <g-image :src="frontImg" />
        </figure>
      </div>
      <div class="card-content column is-4">
        <div class="media">
          <div class="media-content">
            <h2 class="title is-4">{{ title }}</h2>
          </div>
        </div>

        <div class="content">
          <p>
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
  mounted() {
    console.log(this.features);
  },
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
      requtype: Array,
    },
    tags: {
      requtype: Array,
    },
    frontImg: {
        requtype: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
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
.tags {
    margin: 1rem 0;
}
</style>
