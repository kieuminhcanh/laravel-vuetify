<template>
  <v-container>
    <v-row>
      <v-col>
        <v-list>
          <v-list-item v-for="(user, index) in users.data " :key="index">
            <v-list-item-content>{{user.name}}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    {{users}}
  </v-container>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Home",
  apollo: {
    // Simple query that will update the 'hello' vue property
    users: {
      prefetch: true,
      query: gql`
        query {
          users {
            data {
              id
              name
            }
          }
        }
      `
    }
  },
  data: () => ({
    users: {},
    aaa: {},
    message: "",
    posts: [],
    usersObject: {}
  }),
  // Server-side only
  // This will be called by the server renderer automatically
  async serverPrefetch() {
    // this.posts = await this.getPosts();
    // try {
    //   const result = await this.getUsersFromDatabase();
    //   this.users = result.data.users;
    // } catch (error) {
    //   console.log(error);
    // }
    // this.posts = await fetch(
    //   "https://jsonplaceholder.typicode.com/posts"
    // ).then(res => res.json());
  },
  methods: {
    getUsers() {
      return this.$store.dispatch("getUsers");
    },
    async getPosts() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            {
              name: "An Nguyen"
            },
            { name: "thanh tran" }
          ]);
        }, 2000);
      });
    },
    async getUsersFromDatabase() {
      // return this.$apollo
      //   .query({
      //     query: gql`
      //       query {
      //         users {
      //           data {
      //             id
      //             name
      //           }
      //         }
      //       }
      //     `
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    }
  },
  async mounted() {
    try {
      if (!this.users.data) {
        // const result = await this.getUsersFromDatabase();
        // this.users = result.data.users;
      }
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
