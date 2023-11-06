<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import { RouterLink, RouterView } from 'vue-router';
  import ErrorMessage from './components/ErrorMessage.vue';
  import { fetchData } from '@/services/api';
  import type { User, Post } from './types/api';

  export default defineComponent({
      setup() {
        const users = ref<User[]>([]);
        const posts = ref<Post[]>([]);
        const isLoading = ref(false);
        const error = ref(false);
        
        const getData = async () => {
          isLoading.value = true;
          error.value = false;
          const promises = [
            fetchData('https://jsonplaceholder.typicode.com/users'),
            fetchData('https://jsonplaceholder.typicode.com/posts'),
          ];
          const response = await Promise.all(promises).catch(err => {
            error.value = true;
            isLoading.value = false;
          });
          users.value = response[0];
          posts.value = response[1];
        }

        onMounted(() => {
          getData();
        });

      return {
          isLoading,
          users,
          posts,
          error,
        }
    }
  });
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="posts__container single-column">
        <h1 class="header">Posts</h1>
        <ErrorMessage msg="Data fetching Error" />
        <div class="posts__list">
          <div class="post__wrapper" v-for="post in posts" v-bind:key="post.id">
            <h3 class="post-title">{{ post.title }}</h3>
            <span class="post-">by</span><span class="post-author">{{ post.id }}</span>
            <p class="post-content">{{ post.body }}</p>
          </div>
        </div>
      </div>
      <div class="sidebar__container single-column"></div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
