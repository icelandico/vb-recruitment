import { defineStore } from 'pinia';
import { fetchData } from '@/services/api';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

export const useApiStore = defineStore('api', {
  state: () => ({
    users: null,
    posts: null,
  }),
  getters: {
    getUsers: (state) => state.users,
    getPosts: (state) => state.posts,
  },
  actions: {
    async fetchUsers() {
      try {
        const response = await fetchData('https://jsonplaceholder.typicode.com/users');
      } catch (error) {
        console.error('Failed to fetch API data:', error);
      }
    },
    async fetchPosts() {
      try {
        const response = await fetchData('https://jsonplaceholder.typicode.com/posts');
      } catch (error) {
        console.error('Failed to fetch API data:', error);
      }
    },
  },
});
