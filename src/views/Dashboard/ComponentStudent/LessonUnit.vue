<template lang="">
<NoUnit v-show="messageNoUnit"></NoUnit>
     <LayoutAuthenticated v-show="!messageNoUnit">
                <!-- banner section start -->
    <div class="banner_section layout_padding">
      <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-6">
                  <h1 class="your_text">High<br> study educations</h1>
                  <p class="there_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
             
                </div>
                <div class="col-md-6">
                  <img src="../../../img-1.png" class="imgage_1">
                </div>
              </div>
            </div>
       
   
          </div>
        </div>
      </div>
    </div>
    <!-- banner section end -->
   



        <div>
    <div class="test-lessons">
   
      <div class="lessons-container">
        <div class="row g-4 py-5 mt-9">
  <div v-for="(lesson, index) in lessonToStudy" :key="lesson.id" class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div class="classes-item">
    <div class="bg-light rounded-circle w-75 mx-auto p-3">
      <img class="" :src="'http://127.0.0.1:8000/storage/' + lesson.media_files[0]?.file_name" :alt="lesson.name">
    </div>
    <div style="text-align:center" class="bg-light rounded p-4 pt-5 mt-n5">
      <button @click="printLesson(lesson)" style="text-align:center">
        <p style="font-family: 'Lobster Two', cursive; font-weight: 700;" class="d-block text-center h3 mt-3 mb-4" href="">{{ lesson.name }}</p>
      </button>
    </div>
  </div>
</div>



        </div>
      </div>
    </div>
  </div>



  </LayoutAuthenticated>
</template>
<script>
import NoUnit from '../../UIPlaying/NoUnit.vue'
import SectionMain from '@/components/SectionMain.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import axios from 'axios'
import { useMyStore } from '@/stores/mystore.js';
import { useRouter } from 'vue-router';




export default {


    data() {
        return {
            units: [],
            lessons: [],
            lessonToStudy:[],
            messageNoUnit:"",
        }
    },
    components: {
        SectionMain,
        LayoutAuthenticated,
        NoUnit,
    },
    methods: {
        getUnits() {
            this.units = this.$route.params.units
            this.lessons = this.$route.params.lessons
        },
        async fetchUnitsWithLessonsForStudent(userId) {
            try {
                const myStore = useMyStore()
                const userId = myStore.user;
                const response = await axios.get(`http://127.0.0.1:8000/api/get-units-and-lessons-for-student/${userId.id}/${this.units}`);
                
                this.lessonToStudy = response.data.lessons;
                this.messageNoUnit = response.data.message;
               
               
                 console.log(this.lessonToStudy) // check
            } catch (error) {
                console.error('Error fetching units and lessons:', error);
            }
        },
      //  printLesson(lesson) {
      // Print the name of the lesson associated with the clicked button
     // const lessonId = lesson.id;
     // this.$router.push({ name: 'first-lesson', params: { lessonId } });
      // const lesson = this.lessonToStudy[index];
      // console.log(`Lesson ${index + 1}: ${lesson.name}`);

      // if (index === 0) {
      //   // Navigate to the "first-lesson" route for the first lesson (index 0)
      //   const lesson = this.lessonToStudy[index];
      //   const lessonId = lesson.id;
       
      // } else {
      //   // Show an alert for other lessons
      //   alert(`You Should Complete The First Lesson, To Go ${index + 1}: ${lesson.name}`);
      // }
   // },

   printLesson(lesson) {
  // Print the name of the lesson associated with the clicked button
  const lessonId = lesson.id;
   this.$router.push({ name: 'first-lesson', params: { lessonId } });
}
    },
    mounted() {
        this.getUnits();
        this.fetchUnitsWithLessonsForStudent();
    }
}
// onMounted(() => {
//     console.log(this.units)
// });

</script>
<style src="./styleLessonUnit.css" scoped>

</style>