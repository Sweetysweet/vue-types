<template>
  <div class="hello">
  </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex'
import { SEND_USER } from '@/store/action-types'
import { SET_USER } from '@/store/mutation-types'
import { GET_USER } from '@/store/getters-types'

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },

  computed: {
    ...mapGetters({
      USERS: GET_USER
    })
  },

  methods: {
    ...mapMutations({
      updateUserField: SET_USER
    }),
    ...mapActions({
      senduser: SEND_USER
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
