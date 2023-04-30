<template>
    <!--
        - 메뉴명: 홈 화면 
        - 요구사항  
        1. 최근 접속한 메뉴가 표시되어야 한다, 
        2. 최근 작성한 글, 작성 댓글을 표시한다.
        3. 알림을 표시한다.(덧글, 이벤트, 공지 등)
        4. 게임별 유저 추이 그래프를 표시한다.
        5. 오늘 추천 곡을 표시한다.
        6. 오늘 가장 많이 본 뉴스 top 5를 선정하여 표시한다. 

        게임 정보는 어떻게 가져올까
        곡 정보는 어떻게 끌어올까 
        - 수동 처리를 할 수 밖에 없다.
        데이터 분석은 어떻게 처리할까
        
    -->

    <q-page>
        <q-card v-for="item in gamesInfo[0].songs" :key="item.id">
            {{  item.name }} / {{ item.bpm }} / single: {{ printDiff(item.difficults[0].level) }} / double: {{ printDiff(item.difficults[1].level) }}
        </q-card>
    </q-page>
</template>
<script setup lang="ts">
import { useHomeStore } from 'stores/home'
import { ref, computed } from 'vue';

const homeStore = useHomeStore();
const gamesInfo = computed(() =>  homeStore.games);

const printDiff = (items) => {
   return items.join(',');
}

console.log(gamesInfo.value)
</script>