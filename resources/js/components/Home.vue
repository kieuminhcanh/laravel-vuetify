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
  </v-container>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Home",
  data: () => ({
    users: {},
    message: ""
  }),
  async serverPrefetch() {
    try {
      const result = await this.getUsers();
      this.users = result.data.users;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    getUsers() {
      return this.$apollo
        .query({
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
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    if (!this.users.data) {
      this.getUsers()
        .then(result => {
          this.users = result.data.users;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
