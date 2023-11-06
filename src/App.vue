<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  const posts = [
    {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas tota nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
    },
    {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
    },
]
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="posts__container single-column">
        <h1 class="header">Posts</h1>
        <div class="posts__list">
          <div class="post__wrapper" v-for="post in posts">
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
