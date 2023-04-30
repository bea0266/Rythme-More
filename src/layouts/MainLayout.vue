<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-btn label="RYTHME MORE" @click="router.push('/')"/>
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
           header
        >
          모든 메뉴
        </q-item-label>
        <q-item v-for="item in menus" :key="item.id" clickable v-ripple >
          <q-item-section>
            <router-link :to="item.url">{{ item.title }}</router-link>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const menus = ref([
  {
    id: 1,
    title: '자유게시판',
    url: '/board'
  },
  {
    id: 2,
    title: '뉴스',
    url: '/news'
  },
  {
    id: 3,
    title: '공략',
    url: '/guide'
  },
]);

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
