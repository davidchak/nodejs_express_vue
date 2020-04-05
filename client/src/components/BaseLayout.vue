<template>
  <div class="page">
    <!-- Header -->
    <header class="page__header">
      <slot name="header"></slot>
    </header>

    <!-- Content -->
    <div class="container h-100">
      <div class="page__content row">
        <slot name="content"></slot>
      </div>
    </div>

    <!-- Footer -->
    <div class="container">
      <div class="page__footer row">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseLayout"
};
</script>

<style lang="less" scoped>
</style>