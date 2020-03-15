<template>
    <b-nav>
        <b-nav-item>
            <router-link to="/">
                <span>Главная</span>    
            </router-link>
        </b-nav-item>
        <b-nav-item class="mr-auto">
            <router-link to="/">
                <span>Заказы</span>    
            </router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link to="/user">
                <span>Личный кабинет</span>
            </router-link>
        </b-nav-item>
    </b-nav>
</template>

<script>
export default {
    name: "HeaderElement"
}
</script>

<style lang="less" scoped>

</style>