<template>
    <header class="header">
      <div class="header__left">
        <img class="logo" src="@/assets/img/Logo.svg" alt="logo" /> Interno
      </div>
      <div class="header__right">
        <router-link  to="/" class="header__refer">Home</router-link>
        <a href="#" class="header__refer">Project</a>
        <a href="#" class="header__refer">Blog</a>
      </div>
    </header>
</template>

<script>

    export default {
        data() {
            return {
                
            };
        },
    }
</script>

<style scoped lang="scss">

</style>
