<template lang="">
 <un-completed v-if="ErrorUnCompletedDialogVisible"></un-completed>
     <LayoutAuthenticated v-else>
    <SectionMain>
     
        <div>
            <h2 class="h2">Unit 1 </h2>
<h1 class="h1">({{this.lessonToStudy.name}})</h1>


<div class="filters">




</div>

<div class="row">
  <div
    v-for="(mediaFile, index) in lessonToStudy.media_files"
    :key="index"

  >
    <div class="element-item web other">
      <div class="card">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="card-inner">
          <template v-if="mediaFile.type === 'image'">
            <img class="img-fluid rounded-circle" :src="'http://127.0.0.1:8000/storage/' + mediaFile.file_name">
          </template>
          <template v-else-if="mediaFile.type === 'video'">
            <h1 class="h1">Video File</h1>
            <!-- Display video player for video files -->
            <video width="320" height="240" class="img-fluid rounded-circle" controls>
              <source :src="'http://127.0.0.1:8000/storage/' + mediaFile.file_name" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </template>
          <template v-else-if="mediaFile.type === 'audio'">
            <!-- Display video player for video files -->
            <h1 class="h1">Audio File</h1>
            <audio controls >
              <source :src="'http://127.0.0.1:8000/storage/' + mediaFile.file_name"  type="audio/mpeg">
              Your browser does not support the video tag.
            </audio>
          </template>
        </div>
      </div>
    </div>
  </div>
</div>


  
  
  <!-- <a href="https://httpie.io/app" target="_blank">
  <div class="element-item web other">
    <div class="card">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="card-inner"><img class="img-fluid rounded-circle" :src="'http://127.0.0.1:8000/storage/' + this.lessonToStudy[0]?.media_files[0].file_name" ></div>
</div>
  </div></a> -->

 





<ul>

  <!-- <li id="element2"> She wakes up every day, super early, while we sleep in.</li> 
  
  <li id="element3"> She meets with our parents on parent teacher conference while we are at home, with no homework.</li> 
  
  <li id="element4"> She works into the night correcting more than twenty-one of the same papers, while we finish only one page. </li>
  
  <li id="element5"> She stands on the pavement outside with nothing to do, the whole time whe play and run around outside with a bunch to do.</li>
  
  <li id="element6"> She spends half of her vacation trying to study to get smarter, or to prepare all of the years homework for us, when we just play. </li>
  
  <li id="element7"> She thinks of fun things to give us to do in school during her vacation, unlike us who spend our whole vacation going somewhere or partying.</li>

  <li id="element8"> She works until the sun goes down and then packs up, staying inside the whole day, while we are doing special activities and playing around outside.</li>      -->

</ul> 

<img src =     "data:image/jpeg;base64,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">



  <h2 class="h2">Questions</h2>
<!-- <h1 class="h1">({{this.lessonToStudy[0]?.name}})</h1> -->
<div class="questions" style="margin: auto 0;">
  
    <div v-for="(question, index) in questions" :key="index">
      <p>{{ question.question }}</p>


   <!-- Radio buttons for each answer -->
   <div v-for="(answer, answerIndex) in question.answers" :key="answerIndex">
        <input
          type="radio"
          :id="`question-${index}-answer-${answerIndex}`"
          :name="`question-${index}`"
          :value="answer.answer"
          v-model="userAnswers[index]"
        />
        <label :for="`question-${index}-answer-${answerIndex}`">{{ answer.answer }}</label>
      </div>
    </div>
    <div class="handle-btn">
    <button style="margin-top: 50px;" @click="gradeQuiz" class="cta">
    <span class="span">CHECK</span>
    <span class="second">
      <svg width="50px" height="20px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path class="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
          <path class="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
          <path class="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
        </g>
      </svg>
    </span> 
</button>
    <button style="margin-top: 50px;" @click="sendCompletionStatus" class="cta">
    <span class="span">NEXT</span>
    <span class="second">
      <svg width="50px" height="20px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path class="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
          <path class="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
          <path class="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
        </g>
      </svg>
    </span> 
</button>
</div>
</div>
</div>


      


        <el-dialog v-model="dialogVisible" title="Your Score 🧡" width="40%">
  <h3 style="font-weight:bold;font-size:20px;">Your score: {{ score }} out of <span style="color:green">{{ questions.length }}</span></h3>
  <iframe src="https://giphy.com/embed/IedrY2VP5IO5ivDQAD" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nasa-nasareactions-IedrY2VP5IO5ivDQAD">via GIPHY</a></p>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">Close</el-button>
    </span>
  </template>
</el-dialog>



<el-dialog v-model="congratsDialogVisible" title="Congratulations" width="40%">
  <p style="font-weight:bold;font-size:20px;"> <span style="color:green">Congratulations!</span> You answered all questions correctly.</p>
  <iframe src="https://giphy.com/embed/11ISwbgCxEzMyY" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reaction-mrw-11ISwbgCxEzMyY">via GIPHY</a></p>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="congratsDialogVisible = false">Close</el-button>
    </span>
  </template>
</el-dialog>


<!-- <el-dialog v-model="ErrorUnCompletedDialogVisible"  width="30%" height="100%">
  <div id="container">



  <div id="error-box">
    <div class="dot"></div>
    <div class="dot two"></div>
    <div class="face2">
      <div class="eye"></div>
      <div class="eye right"></div>
      <div class="mouth sad"></div>
    </div>
    <div class="shadow move"></div>
    <div class="message"><h1 class="alert">Error!</h1><p>oh no, something went wrong.</p></div>
  </div>


</div>


</el-dialog> -->


        </SectionMain>
        </LayoutAuthenticated>
</template>
<script>
import SectionMain from '@/components/SectionMain.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import axios from 'axios'
import { useMyStore } from '@/stores/mystore.js';
import UnCompleted from './UnCompleted.vue';





export default {
    name:'FirstLesson',
    components:{
        SectionMain,
LayoutAuthenticated,
UnCompleted
    },
    data(){
        return{
            lessonToStudy:[],
            questions: [], // Initialize with an empty array
    userAnswers: [],
    dialogVisible:false,
    score: 0, // Add a new data property for the score
    congratsDialogVisible: false, // Add a new data property
    ErrorUnCompletedDialogVisible:false,
    messageUncompletedLesson:"",
        }
    },
    props: ['lessonId'],
    created() {
    // Fetch questions and answers when the component is created
    this.fetchQuestionsAndAnswers();
  },
    methods:{
      async fetchQuestionsAndAnswers() {
      try {
        // Make an API request to get questions and answers for the lesson
        const response = await axios.get(`http://127.0.0.1:8000/api/questions/lesson/${this.lessonId}`);
        this.questions = response.data.questions;
        console.log(this.questions); // Check the questions and answers
      } catch (error) {
        console.error('Error fetching questions and answers:', error);
      }
    },
        async fetchUnitsWithLessonsForStudent() {
      try {
        const myStore = useMyStore()
        const userId = myStore.user;
        const response = await axios.get(`http://127.0.0.1:8000/api/lessons/${this.lessonId}`);
        this.lessonToStudy = response.data;
        this.messageUncompletedLesson = response.data.error;
        console.log(this.lessonToStudy); // check


        if (this.messageUncompletedLesson.length > 0){
          this.ErrorUnCompletedDialogVisible = true;
        }

      } catch (error) {
        console.error('Error fetching units and lessons:', error);
      }
    },


    gradeQuiz() {
    // Initialize a variable to store the student's score
    let score = 0;

    // Loop through each question and its corresponding user answer
    for (let i = 0; i < this.questions.length; i++) {
      const question = this.questions[i];
      const userAnswer = this.userAnswers[i]; // User's selected answer

      // Find the correct answer for the question
      const correctAnswer = question.answers.find((answer) => answer.is_correct === 1).answer;

      // Check if the user's answer matches the correct answer
      if (userAnswer === correctAnswer) {
        // User answered correctly
        score++;
      }
    }

    // Update the score data property
    this.score = score;

    // Display the student's score in the dialog
    this.dialogVisible = true;

    // Check if the student answered all questions correctly
    if (score === this.questions.length) {
      // Show the congratulatory dialog
      this.congratsDialogVisible = true;
    }
  },
  async sendCompletionStatus() {
  try {
    const myStore = useMyStore();
    const userId = myStore.user;


    // Send the score to the server

    if(this.score === this.questions.length){
      const response = await axios.post(`http://127.0.0.1:8000/api/lessons/${this.lessonToStudy.id}/complete`, {
      score: this.score,
    });
    response.data.message === 'Lesson completed successfully'
    this.$router.back();
    }
 



  } catch (error) {
    console.error('Error sending completion status:', error);
  }
},

    },
    mounted(){
        this.fetchUnitsWithLessonsForStudent();
    },
    beforeMount(){
        this.fetchUnitsWithLessonsForStudent();
    },


}
</script>
<style src="./styleFirstLesson.css" scoped>
    
</style>