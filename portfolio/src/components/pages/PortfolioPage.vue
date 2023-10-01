<template>
  <div class="post-grid">
    <div v-for="(post, index) in posts" :key="index" class="post-module" @mouseover="toggleDescription(index)" @mouseout="toggleDescription(index)">
      <h2>{{ post.title }}</h2>
      <div class="post-content">
        <p class="description" :class="{ 'active': isDescriptionVisible[index] }">{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'Post 1', description: 'Description for Post 1' },
        { id: 2, title: 'Post 2', description: 'Description for Post 2' },
        { id: 3, title: 'Post 3', description: 'Description for Post 3' },
        { id: 4, title: 'Post 1', description: 'Description for Post 1' },
        { id: 5, title: 'Post 2', description: 'Description for Post 2' },
        { id: 6, title: 'Post 3', description: 'Description for Post 3' },
        // Add more posts as needed
      ],
      isDescriptionVisible: []
    };
  },
  mounted() {
  this.isDescriptionVisible = Array.from({ length: this.posts.length }, () => false);
},
  methods: {
    toggleDescription(index) {
      this.isDescriptionVisible[index] = !this.isDescriptionVisible[index];
    },
  },
};
</script>

<style scoped>
/* Add your styles here */

.post-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.post-module {
  border: 1px solid #ddd;
  padding: 20px;
  background-color: #fff;
}

/* .post-content {
} */

.description {
  display: none;
}

.description.active {
  display: block;
  /* add your animation styles here if needed */
}

/* Media Query for Responsive Design */
@media (max-width: 768px) {
  .post-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>
