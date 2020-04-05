<template>
  <b-nav>
    <b-nav-item>
      <router-link to="/">
        <span>Главная</span>
      </router-link>
    </b-nav-item>
    <b-nav-item class="mr-auto">
      <router-link to="/catalog">
        <span>Каталог</span>
      </router-link>
    </b-nav-item>
    <b-nav-item>
      <a @click="goToPersonal">
        <span>Личный кабинет</span>
      </a>
    </b-nav-item>
  </b-nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeaderElement",
  computed: {
    ...mapState({
      user: state => state.store_auth.user
    })
  },

  methods: {
    goToPersonal() {
      this.user.length != null
        ? this.$router.push("user")
        : this.$router.push("login");
    }
  }
};
</script>

<style lang="less" scoped>
</style>