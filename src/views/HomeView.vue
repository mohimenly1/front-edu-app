<template>
  <LayoutAuthenticated>
    <SectionMain>


      <div v-if="userRole == !studentValue || userRole == adminValue" class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBoxWidget
          trend="12%"
          trend-type="up"
          color="text-emerald-500"
          :icon="mdiAccountMultiple"
          :number="512"
          label="Clients"
        />
        <CardBoxWidget
          trend="12%"
          trend-type="down"
          color="text-blue-500"
          :icon="mdiCartOutline"
          :number="7770"
          prefix="$"
          label="Sales"
        />
        <CardBoxWidget
          trend="Overflow"
          trend-type="alert"
          color="text-red-500"
          :icon="mdiChartTimelineVariant"
          :number="256"
          suffix="%"
          label="Performance"
        />
      </div>



      <div v-if="userRole == studentValue">

        <div  class="pen" v-if="helloSpaceMan">
  <div class="pen-info">
   
    <!-- <div class="pen-description">Css Only </div> -->
  </div>
  <div class="pen-content">
    
    <div class="container">
      <!-- Clouds.-->
      <div class="cloud cloud-1">
        <div class="part part-1"></div>
        <div class="part part-2"></div>
        <div class="part part-3"></div>
      </div>
      <div class="cloud cloud-2">
        <div class="part part-1"></div>
        <div class="part part-2"></div>
        <div class="part part-3"></div>
        <div class="part part-4"></div>
        <div class="part part-5"></div>
        <div class="part part-6"></div>
      </div>
      <div class="space">
        <div class="moon">
          <div class="crater crater-1"></div>
          <div class="crater crater-2"></div>
          <div class="crater crater-3"></div>
        </div>
        <div class="star star-1"></div>
        <div class="star star-2"></div>
        <div class="star star-3"></div>
        <div class="star star-4"></div>
        <div class="star star-5"></div>
        <div class="star star-6"></div>
        <div class="star star-7"></div>
      </div>
      <div class="astronaut-frame">
        <div class="astronaut">
          <div class="backpack"></div>
          <div class="body">
            <div class="shadow"></div>
            <div class="strap left"></div>
            <div class="strap right"></div>
            <div class="chest"></div>
          </div>
          <div class="ear left">
            <div class="antenna"></div>
          </div>
          <div class="ear right"></div>
          <div class="head">
            <div class="face">
              <div class="eye left"></div>
              <div class="eye right"></div>
              <div class="mouth"></div>
              <div class="cheek left"></div>
              <div class="cheek right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-right:172px;" class="pen-title"><h2>Hello {{ userId.name }}</h2></div>
   
  </div>
</div>
<!-- Codepen overlay-->

<!-- Right Right -->
<!-- <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet" type="text/css"/>
<a class="navigation left" href="https://codepen.io/thesuitcase/pen/eJxwNZ" target="_blank">
<img class="arrow" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/57971/overlay.arrow-left.svg"/>
</a>
<a class="navigation right" href="https://codepen.io/thesuitcase/pen/LGzyQB" target="_blank">
<img class="arrow" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/57971/overlay.arrow-right.svg"/>
</a><a class="twitter" href="https://twitter.com/TheSuitcaseIO" target="_blank">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/57971/overlay.twitter.svg"/>
</a>
<a class="icon" href="http://thesuitcase.io" target="_blank">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/57971/overlay.thesuitcase.svg"/>
</a> -->

    <!-- Student Area start here -->

    <div v-if="displayStudentArea">

      <div id="hero-slides">
  
    <div id="logo"></div>
    <div id="menu">
      <div id="hamburger">
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
      </div>
    </div>
 
  <div id="slides-cont">
    <div class="button" id="next"></div>
    <div class="button" id="prev"></div>
    <div id="slides">
      <div v-for="unit in allUnits" :key="unit.id" class="slide" :style="'background-image: url(http://127.0.0.1:8000/storage/' + unit.image + ') '">
      <div class="number">{{ unit.id }}</div>
      <div class="body">
        <div class="headline">{{ unit.name }}</div>
        <a :href="unit.link" target="_blank">
          <!-- Clicking to read the unit -->
          <button @click="redirectToUnit(unit.id)" class="continue-application">
    <div>
        <div class="pencil"></div>
        <div class="folder">
            <div class="top">
                <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
            </div>
            <div class="paper"></div>
        </div>
    </div>
    Start Study
</button>
        </a>
      </div>
    </div>
    <div class="slide" >
        <div class="body">
        </div>
      </div>
    </div>
    <div id="next-catch"></div>
    <div id="prev-catch"></div>
  </div>
  <div id="footer"><a href="https://dribbble.com/shots/3888265-Motion-Study" target="_blank">
      <div id="dribbble"></div></a></div>
</div>
    </div>
      </div>

      <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div class="flex flex-col justify-between">
          <CardBoxTransaction
            v-for="(transaction, index) in transactionBarItems"
            :key="index"
            :amount="transaction.amount"
            :date="transaction.date"
            :business="transaction.business"
            :type="transaction.type"
            :name="transaction.name"
            :account="transaction.account"
          />
        </div>
        <div class="flex flex-col justify-between">
          <CardBoxClient
            v-for="client in clientBarItems"
            :key="client.id"
            :name="client.name"
            :login="client.login"
            :date="client.created"
            :progress="client.progress"
          />
        </div>
      </div>

      <SectionBannerStarOnGitHub class="mt-6 mb-6" />

      <SectionTitleLineWithButton :icon="mdiChartPie" title="Trends overview">
        <BaseButton :icon="mdiReload" color="whiteDark" @click="fillChartData" />
      </SectionTitleLineWithButton>

      <CardBox class="mb-6">
        <div v-if="chartData">
          <line-chart :data="chartData" class="h-96" />
        </div>
      </CardBox>

      <SectionTitleLineWithButton :icon="mdiAccountMultiple" title="Clients" />

      <NotificationBar color="info" :icon="mdiMonitorCellphone">
        <b>Responsive table.</b> Collapses on mobile
      </NotificationBar>

      <CardBox has-table>
        <TableSampleClients />
      </CardBox> -->
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script setup>

import { computed, ref, onMounted,watch,defineProps   } from 'vue'
import { useRouter } from 'vue-router';
import { useMainStore } from '@/stores/main'
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config.js'
import LineChart from '@/components/Charts/LineChart.vue'
import SectionMain from '@/components/SectionMain.vue'
import CardBoxWidget from '@/components/CardBoxWidget.vue'
import CardBox from '@/components/CardBox.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import BaseButton from '@/components/BaseButton.vue'
import CardBoxTransaction from '@/components/CardBoxTransaction.vue'
import CardBoxClient from '@/components/CardBoxClient.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import SectionBannerStarOnGitHub from '@/components/SectionBannerStarOnGitHub.vue'
import { useMyStore } from '@/stores/mystore.js';


  import axios from 'axios';

  const router = useRouter();

const units = ref([]);
  const lessons = ref([]);

  const allUnits = ref([]);




  const getAllTheUnits = async (userId) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/get-all-unit`);


    allUnits.value = response.data.units;



  console.log(allUnits.value) // check
  } catch (error) {
    console.error('Error fetching units and lessons:', error);
  }
}
  const fetchUnitsWithLessonsForStudent = async (userId) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/get-units-and-lessons-for-student/${userId}`);
    units.value = response.data.units;
    lessons.value = response.data.lessons;
    const firstLesson = lessons.value[0];
  // console.log(firstLesson.name) // check
  } catch (error) {
    console.error('Error fetching units and lessons:', error);
  }
}

// const sharedData = () => {
//   const firstUnit = units.value[0]?.name; // Get the name of the first unit, if it exists
//   const firstLesson = lessons.value[0]?.name; // Get the first lesson object

//   router.push({ name: 'study-unit', params: { units: firstUnit, lessons:firstLesson } });
// }


const redirectToUnit = (unitId)  => {
    router.push({ name: 'study-unit', params: { units: unitId, lessons: '' } });
    }


const myStore = useMyStore();
const userRole =  myStore.role;
const userId = myStore.user;
const studentValue = '"student"';
const adminValue = '"admin"';

const helloSpaceMan = ref(true);
const displayStudentArea = ref(false);



const displaySpaceMan = () =>{
  setTimeout(function(){
    helloSpaceMan.value = false;
    displayStudentArea.value = true;

  
  },5000)



}




const animateSlies = () => {
    setTimeout(function() {
    if (displayStudentArea.value == true) {
        let hero = document.getElementById('hero-slides');
        let menu = document.getElementById('menu');
        let slides = document.getElementById('slides');
        let dribbble = document.getElementById('dribbble');
        let next = ['next', 'next-catch'].map(n => document.getElementById(n));
        let prev = ['prev', 'prev-catch'].map(n => document.getElementById(n));
        let slideChildren = slides.children;
        let slideCount = slides.children.length;
        let currentlyDemoing = false;
        let currentPage = 0;
        let slidesPerPage = () => window.innerWidth > 1700 ? 4 : window.innerWidth > 1200 ? 3 : 2;
        let maxPageCount = () => slideCount / slidesPerPage() - 1;

        function goToPage(pageNumber = 0) {
            currentPage = Math.min(maxPageCount(), Math.max(0, pageNumber));
          
            hero.style.setProperty('--page', currentPage);
        }

        function sleep(time) {
            return new Promise(res => setTimeout(res, time));
        }

        function hoverSlide(index) {
            index in slideChildren &&
                slideChildren[index].classList.add('hover');
        }

        function unhoverSlide(index) {
            index in slideChildren &&
                slideChildren[index].classList.remove('hover');
        }

        async function demo() {
            if (currentlyDemoing) {
                return;
            }
            currentlyDemoing = true;
            if (currentPage !== 0) {
                goToPage(0);
                await sleep(800);
            }
            let slides = slidesPerPage();
            let pageSeq_ = { 2: [1, 2, 1], 3: [1, 2, 1 / 3], 4: [1, 1, 0] };
            let pageSeq = pageSeq_[slides] || pageSeq_[4];
            let slideSeq_ = { 2: [2, 4, 3], 3: [3, 6, 2], 4: [3, 6, 2] };
            let slideSeq = slideSeq_[slides] || slideSeq_[2];
            await sleep(300);
            goToPage(pageSeq[0]);
            await sleep(500);
            hoverSlide(slideSeq[0]);
            await sleep(1200);
            goToPage(pageSeq[1]);
            dribbble.classList.add('hover');
            unhoverSlide(slideSeq[0]);
            await sleep(500);
            hoverSlide(slideSeq[1]);
            await sleep(1200);
            goToPage(pageSeq[2]);
            unhoverSlide(slideSeq[1]);
            await sleep(300);
            hoverSlide(slideSeq[2]);
            await sleep(1600);
            goToPage(0);
            unhoverSlide(slideSeq[2]);
            dribbble.classList.remove('hover');
            currentlyDemoing = false;
        }

        next.forEach(n => n.addEventListener('click', () => !currentlyDemoing && goToPage(currentPage + 1)));
        prev.forEach(n => n.addEventListener('click', () => !currentlyDemoing && goToPage(currentPage - 1)));
        menu.addEventListener('click', demo);

        sleep(100).then(demo);

    }

    // window.addEventListener('resize', () => {
    // console.log(document.body.style.getPropertyValue('--slide-per-page'));
    // });

    /* requestAnimationFrame */
}, 5000)
  }
const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}


const makeAnimation = () =>{
  // let hero = document.querySelector('#hero-slides');

  if (displayStudentArea.value == true){
alert("hero")
};

}


onMounted(() => {
  getAllTheUnits();
  fillChartData();
  fetchUnitsWithLessonsForStudent(userId.id);
  displaySpaceMan();
  animateSlies();
  

})

const mainStore = useMainStore()

const clientBarItems = computed(() => mainStore.clients.slice(0, 4))

const transactionBarItems = computed(() => mainStore.history)





</script>
<style src="./cssFiles/styleHome.css" scoped>

</style>