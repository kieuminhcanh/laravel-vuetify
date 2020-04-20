<template>
  <v-container>
    <v-layout>
      <v-row justify="start" align="stretch">
        <v-col sm="2" md="3" lg="4" v-for="(item, index) in posts.data" :key="index">
          <v-card :to="{name: 'PostsDetail', params:{slug: item.slug}}">
            <v-img :src="item.thumbnail" :aspect-ratio="16/9"></v-img>
            <v-card-title>{{item.title}}</v-card-title>
            <v-card-text>{{item.description}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Posts",
  data: () => ({
    posts: {}
  }),
  async serverPrefetch() {
    try {
      const result = await this.getPosts();
      this.posts = result.data.posts;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    getPosts() {
      return this.$apollo
        .query({
          query: gql`
            query Posts($page: Int, $first: Int) {
              posts(page: $page, first: $first) {
                data {
                  id
                  title
                  slug
                  thumbnail
                  description
                  created_at
                }
              }
            }
          `,
          variables: {
            page: 1,
            first: 12
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    if (!this.posts.data) {
      this.getPosts()
        .then(result => {
          this.posts = result.data.posts;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>