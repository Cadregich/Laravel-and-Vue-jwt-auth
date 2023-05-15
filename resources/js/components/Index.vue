<template>
    <div>
        <navbar/>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./Navbar.vue";
    export default {
        name: 'Index',
        components: {
            Navbar,
        },
        async created() {
            if (await this.$store.dispatch('getCookie', 'ait')) {
                this.$store.dispatch('login');
            }
        }
    }
</script>
