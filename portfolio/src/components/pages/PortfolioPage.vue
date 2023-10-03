<template>
  <div class="portfolio-container">
    <div v-for="(post, index) in posts" :key="index" class="post-module" @mouseover="toggleDescription(index)" @mouseout="toggleDescription(index)">
      <!-- Thumbnail -->
      <div class="thumbnail">
        <img :src="post.thumbnail" alt="img">
      </div>

      <!-- Post Content -->
      <div class="post-content">
        <div class="category">{{ post.category }}</div>
        <h1 class="title">{{ post.title }}</h1>
        <h2 class="date">{{ post.start_date }} ~ {{ post.end_date }} </h2>
        <div class="description">{{ post.description }}</div>
        <div class="skills"> <div class="skill" v-for="(skill, skillIdx) in post.skill" :key = "'skill_'+ skillIdx">{{ skill }}</div> </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs, mapStores } from 'pinia';
import { usePortfoiloStore } from '@/stores/portfolio';
export default {
  name: 'PortfolioPage',
  setup() {
    const portfolio = usePortfoiloStore();
    return storeToRefs(portfolio);
  },
  computed: {
    ...mapStores(usePortfoiloStore)
  },
  data() {
    return {
      posts: [],
      isDescriptionVisible: []
    };
  },
  mounted() {
    this.posts = this.portfolioStore.portfolio;
    this.isDescriptionVisible = Array.from({ length: this.posts.length }, () => false);
  },
  methods: {
    toggleDescription(index) {
      this.isDescriptionVisible[index] = !this.isDescriptionVisible[index];
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/mixin';
.portfolio-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: auto;
}

$white: #fff;
$black: #000;
$gray: #888;

$container_width: 800px;

.post-module {
  position: relative;
  z-index: 1;
  display: block;
  background: $white;
  min-width: 270px;
  width: 430px;
  height: 470px;
  margin-inline: auto;
  margin-bottom: 20px;
  @include box-shadow;
  @include transitions;

  &:hover {    
    .thumbnail {
      img {
        transform: scale(1.1);
        opacity: .6;
      }
    }
    
    .post-content {
      .description {
        @include transitions;
        height: auto !important;
        max-height: 90%;
      }
    }
  }

  .thumbnail {
    background: $black;
    height: 400px;
    overflow: hidden;

    img {
      display: block;
      width: 120%;
      @include transitions;
    }
  }

  .post-content {
    position: absolute;
    bottom: 0;
    background: $white;
    width: 100%;
    padding-block: 30px;
    @include transitions($timing: cubic-bezier(.37, .75, .61, 1.05));

    .category {
      position: absolute;
      top: -34px;
      left: 0;
      background: $sub-color;
      padding: 10px 15px;
      color: $white;
      font-size: 14px;
      font-weight: 600;
    }

    .title {
      @include title(20pt);
    }

    .date {
      margin: 0;
      padding: 0 0 10px;
      color: $sub-color;
      font-size: 14pt;
      font-weight: 400;
    }

    .description {
      height: 0;
      max-height: 0;
      overflow: hidden;
      color: $gray;
      font-size: 13pt;
      line-height: 1.8em;
    }

    .skills {
      display: flex;
      color: #888;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 10px;
      justify-content: center;
      .skill {
        border: 2px solid;
        margin: 4px;
        padding: 4px 10px;
        font-size: 13pt;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .post-module {
    width: 100%;
    height: 400px;
  }
}
</style>
