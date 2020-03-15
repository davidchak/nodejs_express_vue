<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
html, body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(238, 238, 238);
  width: 100%;
  height: 100%;

  --font-base-size: 16;
  --font-size-11: calc(11/var(--font-base-size)*1rem);
  --font-size-12: calc(12/var(--font-base-size)*1rem);
  --font-size-13: calc(13/var(--font-base-size)*1rem);
  --font-size-14: calc(14/var(--font-base-size)*1rem);
  --font-size-15: calc(15/var(--font-base-size)*1rem);
  --font-size-16: calc(16/var(--font-base-size)*1rem);
  --font-size-17: calc(17/var(--font-base-size)*1rem);
  --font-size-18: calc(18/var(--font-base-size)*1rem);
  --font-size-20: calc(20/var(--font-base-size)*1rem);
  --font-size-22: calc(22/var(--font-base-size)*1rem);
  --font-size-24: calc(24/var(--font-base-size)*1rem);
  --font-size-26: calc(26/var(--font-base-size)*1rem);
  --font-size-28: calc(28/var(--font-base-size)*1rem);
  --font-size-30: calc(30/var(--font-base-size)*1rem);
  --font-size-37: calc(37/var(--font-base-size)*1rem);
  --font-size-40: calc(40/var(--font-base-size)*1rem);
  --font-size-42: calc(42/var(--font-base-size)*1rem);
  --font-primary: "-apple-system",BlinkMacSystemFont,Arial,sans-serif;
  --font-secondary: "Fira Sans",sans-serif;
  --line-height: 1.6;
  --input-font-size: var(--font-size-14);
  --padding-x: 20px;
  --padding-y: 20px;
  --page-width: 780px;
  --page-width--wide: 1180px;
  --page-background: #f4f4f4;
  --link-color: #558cc0;
  --link-color--visited: #8864ad;
  --link-hover-color: #2164a3;
  --outline-color: #558cb7;
  --outline-size: 2px;
  --z-index-popup: 1000;
  --z-index-dropdown: 3000;
  --z-index-overlay: 5000;
  --z-index-toast: 10000;
  --screen-phone: 600px;
  --screen-mobile: 760px;
  --screen-desktop: 1024px;
  --nav-link--color: #838b93;
  --nav-link--selected-color: #40464b;
  // dchak
  --content-block-height: 200px;
  --margin-y: 20px;
}

// Content wrapper
.wrapper{
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
  padding-top: var(--padding-y);
  padding-bottom: var(--padding-y);
}

.nav-item{
  height: 64px;
  a{
    line-height: 48px;
    color: var(--nav-link--color);
    &:hover{
      text-decoration: none;
      color: var(--nav-link--selected-color);
    }
  }
}

.page{
  background-color: var(--page-background);
  color: #2c3e50;
  .page__header{
    background-color: rgb(255, 255, 255);
    height: 64px;
    border-bottom: 1px solid var(--header-borderColor,#d5dddf);
  }
  .page__content{
    margin: 0;
    background-color: inherit;
    .content__block{
      width: 100%;
      min-height: var(--content-block-height);
      background-color: rgb(255, 255, 255);
      margin-bottom: var(--margin-y/2);
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,.1);
      &:first-child{
        margin-top: var(--margin-y);
      }
    }
  }
}

</style>
