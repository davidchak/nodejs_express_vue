<template>
  <div class="page">
    <header class="page__header">
      <header-element></header-element>
    </header>
      

    <!-- Content -->
    <div class="container">
      <div class="page__content row">
        <div class="content__block">
          <div class="wrapper">
            <span>Content 1</span>
          </div>
        </div>
      </div>

      <div class="page__content row">
        <div class="content__block">
          <div class="wrapper">
            <span>Content 2</span>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import HeaderElement from "@/components/header/HeaderElement";
export default {
  name: "IndexPage",
  components: {
      HeaderElement
  }
}
</script>

<style lang="less" scoped>

</style>