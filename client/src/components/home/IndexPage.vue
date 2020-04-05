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
          <span>Index page</span>
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
  name: "IndexPage",
  components: {
    BaseLayout,
    HeaderElement
  }
};
</script>

<style lang="less" scoped>
</style>