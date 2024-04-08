<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app id="inspire">
        <v-app-bar class="px-3" density="compact" flat color="teal-darken-4">
            <v-spacer></v-spacer>
            <v-tabs centered>
                <v-tab v-for="link in links" :key="link" :text="link.name" :to="link.to"></v-tab>
            </v-tabs>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-main class="bg-grey-lighten-3">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="8" class="mx-auto">
                        <router-view />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
const links = [
    { name: 'Início', to: '/' },
    { name: 'Editar', to: '/list' },
]
</script>
