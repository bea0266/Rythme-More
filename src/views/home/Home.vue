<template>
    <!--
        - 메뉴명: 홈 화면 
        - 요구사항  
        1. 최근 접속한 메뉴가 표시되어야 한다,  - 타 메뉴를 구상해야 함
        2. 최근 작성한 글, 작성 댓글을 표시한다. - 게시판을 구현해야 함
        3. 알림을 표시한다.(덧글, 이벤트, 공지 등) - 게시판 작성 기능 구현해야 함 
        4. 게임별 유저 추이 그래프를 표시한다. - 기준이 없음 
        5. 오늘 추천 곡을 표시한다. - 곡 리스트가 필요함 
        6. 오늘 가장 많이 본 뉴스 top 5를 선정하여 표시한다. - 어떤 뉴스를 끌고 오려고?
      
        TODO: 
        1. sample data json 으로 처리
        2. 크롤링 기술 공부 및 연습 - 곡 리스트가 정리된 자료가 없다... 직접 만들어야 할 듯
        3. DB에 시리즈별로 수록곡 저장하기
        4. 테이블 정의 필요      
        
        방향성:
        1. quasar 숙련도 향상
        2. vue 숙련도 향상 
        3. typescript에 대한 숙련도 향상 
        4. sql 숙련도 향상
        5. 시스템 구조 분석 및 설계 능력 향상
        6. 프론트엔드 개발에 대한 이해 
    -->

    <q-page>
        <q-card class="q-pa-md text-h6" :bordered="false" >
            <div class="row">
               <div class="col">수록곡 랭킹</div>
               <div class="col"></div>
               <div class="col text-right">
                    <q-btn v-if="isAsc" label="오름차순 보기" @click="changeSortType"></q-btn>
                    <q-btn v-else label="내림차순 보기" @click="changeSortType"></q-btn>
               </div>
            </div>
        </q-card>
        <q-card v-for="item in songs" :key="item.id">

            <q-card-section horizontal>
                <q-img style="width: 250px; height: 150px;" :src=item.img />
                <q-card-section>
                    <div>rank: {{  item.rank }} </div>

                    <div>Song name: {{  item.name }} </div>

                    <div>BPM: {{  item.bpm }} </div>

                    <div>Difficult Single : {{ printDiff(item.difficults[0].level) }} </div>

                    <div>Difficult Double: {{ printDiff(item.difficults[1].level) }}</div>
                    
                </q-card-section>
           </q-card-section> 
 
        </q-card>
    </q-page>
</template>
<script setup lang="ts">
import { useHomeStore } from 'stores/home'
import { ref, computed, onBeforeMount } from 'vue';
import song1 from 'assets/img/song1.jpg';
import song2 from 'assets/img/song2.jpg';
import song3 from 'assets/img/song3.jpg';

const images = ref([song1, song2, song3])

const isAsc = ref(true)

const homeStore = useHomeStore();

const songs = computed(() =>  homeStore.games[0].songs);


const printDiff = (items) => {
   return items.join(',');
}

const changeSortType = () => {
   isAsc.value = !isAsc.value
   
   if (isAsc.value) {
      songs.value = songs.value.sort((a, b) => {
        return b.rank - a.rank;
      })
   } else {
      songs.value = songs.value.sort((a, b) => {
        return a.rank - b.rank;
      })
   }
}

console.log(songs.value)

onBeforeMount(() => {
    songs.value.forEach((song, index) => {
        song.img = images.value[index]
    })
})
</script>