<template>
  <v-container>
    <v-card>
      <v-card-title>{{post.title}}</v-card-title>
      <v-card-subtitle>Ngày: {{post.created_at}}</v-card-subtitle>
      <v-img :src="post.thumbnail" :aspect-ratio="16/9"></v-img>
      <v-card-text>{{post.content}}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "PostsDetail",
  data: () => ({
    post: {}
  }),
  async serverPrefetch() {
    try {
      const result = await this.getPost();
      this.post = result.data.post;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    getPost() {
      return this.$apollo
        .query({
          query: gql`
            query Post($slug: String!) {
              post(slug: $slug) {
                id
                slug
                title
                thumbnail
                content
                created_at
              }
            }
          `,
          variables: {
            slug: this.$route.params.slug
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    if (!this.post.data) {
      this.getPost()
        .then(result => {
          this.post = result.data.post;
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