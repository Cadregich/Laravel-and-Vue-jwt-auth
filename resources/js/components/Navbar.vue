<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">Example</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" v-if="!$store.getters.Auth">
                            <router-link :to="{ name: 'login' }" class="nav-link active" aria-current="page">
                                Login
                            </router-link>
                        </li>
                        <li class="nav-item" v-if="!$store.getters.Auth">
                            <router-link :to="{ name: 'registration' }" class="nav-link active" aria-current="page">
                                Registration
                            </router-link>
                        </li>
                        <li class="nav-item" v-if="$store.getters.Auth">
                            <router-link :to="{ name: 'user-data' }" class="nav-link active" aria-current="page">
                                User data
                            </router-link>
                        </li>
                        <li class="nav-item" v-if="$store.getters.Auth">
                            <router-link :to="{ name: 'logout' }" class="nav-link active" aria-current="page">
                                Logout
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style scoped>

</style>
