// TODO: подготовить форму авторизации
// TODO: сделать отправку запроса авторизации с апи
<template>
  <base-layout>
    <!-- Header -->
    <template v-slot:header>
      <header-element></header-element>
    </template>

    <!-- Content -->
    <template v-slot:content>
      <div class="content__block">
        <div class="wrapper">
          <div class="row">
            <form class="text-center">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="login"
                />
                <small
                  id="emailHelp"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="password"
                />
              </div>

              <button type="submit" class="btn btn-primary w-50">Login</button>
              <button type="submit" class="btn btn-primary w-50">Register</button>
            </form>
          </div>
        </div>
      </div>
    </template>

    <!-- Footer -->
    <template v-slot:footer></template>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout";
import HeaderElement from "@/components/header/HeaderElement";

export default {
  name: "LoginPage",
  components: {
    BaseLayout,
    HeaderElement
  }
};
</script>

<style lang="less" scoped>
</style>