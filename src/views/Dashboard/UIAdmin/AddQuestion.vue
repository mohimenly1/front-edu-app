<template lang="">
    <LayoutAuthenticated>
      <SectionMain>
          <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Add Question</span>
          <div class="button-container">
  
  
              <button @click="dialogVisibleFormData = true" class="add-unit ml-5">
                  <ph-folder-notch :size="32" color="#FDF0F0" weight="fill" />
              </button>
      </div>
        </div>
      </template>
  
  
  
  <!-- Dialog To Display The Record Data -->
  
  <el-dialog
      v-model="dialogVisibleFormData"
      title="Add Question"
      width="60%"
      :before-close="handleClose"
      class="el-dialog-main"
    >
      <div class="main-form-fields">
          <div
    class="block w-100 rounded-lg  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
    <form @submit.prevent="submitTheQuestion">
  <div class="grid grid-cols-2 gap-4">
    <!-- Unit selection -->
    <div class="relative mb-6" data-te-input-wrapper-init>
      <label>Pick A Unit</label>
      <el-select v-model="selectedUnit" class="m-2" placeholder="Select" size="large" @change="fetchLessonsByUnit()">
        <el-option
          v-for="unit in units"
          :key="unit.id"
          :label="unit.name"
          :value="unit.id"
        />
      </el-select>
    </div>

    <!-- Lesson selection -->
    <div class="relative mb-6" data-te-input-wrapper-init>
      <label>Pick A Lesson</label>
      <el-select v-model="selectedLesson" class="m-2" placeholder="Select" size="large">
        <el-option
          v-for="lesson in unitLessons"
          :key="lesson.id"
          :label="lesson.name"
          :value="lesson.id"
        />
      </el-select>
    </div>

    <!-- Question input -->
    <div class="relative mb-6" data-te-input-wrapper-init>
      <input
        type="text"
        v-model="question"
        class="inputs-forms peer text-right block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity:100 data:[te-input-state-active]:placeholder:opacity:100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="lessonContentInput"
        placeholder="Content of the Lesson"
      />
      <label
        for="lessonContentInput"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data:[te-input-state-active]:-translate-y:[0.9rem] peer-data:[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
        >The Question
      </label>
    </div>

    <!-- Answer input -->
<!-- Answer input -->
<div class="relative mb-6" data-te-input-wrapper-init>
  <input v-model="newAnswer"  placeholder="Enter an answer" />
      <button @click.prevent="addAnswer">Add Answer</button>
</div>

<div class="relative mb-6" data-te-input-wrapper-init>

  <div v-for="(answer, index) in answers" :key="index">
      <input type="radio" v-model="selectedAnswer" :value="answer" />
      <label>{{ answer }}</label>
    </div>

</div>
  </div>
  

      <!--Submit button-->
      <button  class="button" >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
    <span>Launch</span>
  </button>
    </form>
  
  </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <button>
  
          </button>
        </span>
      </template>
    </el-dialog>
  
    <el-table :data="itemQuestionTable" style="width: 100%">
    <el-table-column prop="question" label="Question" width="290" />
    <el-table-column label="Answers" width="280">
      <template #default="{ row }">
        {{ row.answers.map(answer => answer.answer).join(', ') }}
        <h1 style="font-weight: bold; color: green; font-size: 20px;">
{{row.answers.find(answer => answer.is_correct === 1).answer }}</h1>
      </template>
    </el-table-column>

    <el-table-column label="Operations" width="280">
      <template #default="{ row }">
        <div class="handle-btn-operation">
        <button @click="showQuestionEdit(row)" class="delete-unit ml-5">
        <ph-pencil :size="32" color="#FFFFDD" weight="fill" />
      </button>

        </div>
      </template>
    </el-table-column>
  </el-table>
  
  
  
  
    
  
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[3, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalStudent"
      ></el-pagination>
  
  
  
  <!-- Confirm Delete -->




    <!-- Edit Dialog -->

    <el-dialog
  v-model="dialogShowQuestionEdit"
  title="Edit Question"
  width="60%"
  :before-close="handleClose"
  class="el-dialog-main"
>
  <div class="main-form-fields">
    <div class="block w-100 rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <form @submit.prevent="updateQuestionAndAnswers" >
    <div class="grid grid-cols-2 gap-4">
      <!-- Pick A Lesson -->
      <div class="relative mb-6" data-te-input-wrapper-init>
        <label>Pick A Lesson</label>
        <el-select v-model="selectedQuestionEdit.lesson_id" class="m-2" placeholder="Select" size="large">
          <el-option v-for="lesson in lessons" :key="lesson.id" :label="lesson.name" :value="lesson.id" />
        </el-select>
      </div>

      <!-- Question -->
      <div class="relative mb-6" data-te-input-wrapper-init>
        <input
          v-model="selectedQuestionEdit.question"
          type="text"
          class="inputs-forms peer text-right block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity:100 data:[te-input-state-active]:placeholder:opacity:100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="question"
          placeholder="Question"
        />
        <label
          for="lessonContentInput"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data:[te-input-state-active]:-translate-y:[0.9rem] peer-data:[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
          >Question
        </label>
      </div>

      <!-- Display All Answers -->
<!-- Display All Answers -->
<div class="relative mb-6" data-te-input-wrapper-init>
  <label>All Answers</label>
  <div v-for="(answer, index) in selectedQuestionEdit.answers" :key="index">
    <input type="radio" v-model="correctAnswer" :value="answer.id" />
    <label>{{ answer.answer }}</label>
  </div>
</div>

      <!-- Display the Current Correct Answer -->
      <div>
        <label>The Current Correct ✅ Answer</label>
        <h1 style="font-weight: bold; color: green; font-size: 20px;"> {{ selectedQuestionEdit.answers.find(answer => answer.is_correct === 1).answer }}</h1>
      </div>

    </div>





    <!--Submit button-->
    <button class="button" type="submit">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
  <span>Launch</span>
</button>

      </form>
    </div>
  </div>
  <template #footer>
    <span class="dialog-footer">
      <button @click="dialogShowQuestionEdit = false">Cancel</button>
    </span>
  </template>
</el-dialog>



  <!-- End dialog Edit -->
  
  <el-dialog
      v-model="dialogConfirmDelete"
      title="Delete Unit"
      width="40%"
      :before-close="handleClose"
      class="el-dialog-main-delete"
    >
  
    <h2>Are You Sure You Want To Delete This Student ?</h2>
      <template #footer>
        <span class="dialog-footer">
          
          <div class="button-borders">
    <button @click="deleteStudent" class="primary-button"> Delete
    </button>
  
  
    <button @click="dialogConfirmDelete = false" class="primary-button"> Cancel
    </button>
  </div>
        </span>
      </template>
  
  </el-dialog>
  
    </el-card>
      </SectionMain>
    </LayoutAuthenticated>
  </template>
  <script setup lang="ts">
   import { PhTrashSimple } from "@phosphor-icons/vue";
  import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
  import { PhFolderNotch,PhImage,PhPencil } from "@phosphor-icons/vue";
  import { Edit, Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
  import { ref,computed, onMounted } from 'vue'
  import SectionMain from '@/components/SectionMain.vue'
  import { ElCard,ElDialog,ElTable,ElPagination } from 'element-plus'
  import type { UploadFile } from 'element-plus'
  import { useMyStore } from '@/stores/mystore';
  import axios from 'axios';

  
  const { user } = useMyStore();
  

const dialogVisibleFormData = ref(false);
const itemQuestionTable = ref([]);


const selectedQuestionEdit = ref(null);
const dialogShowQuestionEdit = ref(false);
  
    const units = ref([]); 
    const lessons = ref([]); 

const unitLessons = ref([]);
    const selectedUnit = ref('');
    const selectedLesson = ref('');
    const question = ref('');
const newAnswer = ref('');
const answers = ref([]);
const selectedAnswer = ref('');

const addAnswer = () => {
  if (newAnswer.value) {
    answers.value.push(newAnswer.value);
    newAnswer.value = '';
  }
};

const saveQuestion = () => {
  if (question.value && selectedAnswer.value) {
    const questionData = {
      question: question.value,
      answers: answers.value,
      correctAnswer: selectedAnswer.value,
    };
    // You can send 'questionData' to your server for further processing.
    console.log(questionData);
  }
};

    const fetchLessonsByUnit = async () => {
  if (selectedUnit.value) {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/get-lessons-by-unit?unit_id=${selectedUnit.value}`);
      unitLessons.value = response.data.lessons;
    } catch (error) {
      console.error('Error fetching lessons:', error);
    }
  }
};
  
  


    const fetchAllUnit = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-all-unit');
        units.value = response.data.units;
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    };


    const fetchAllLesson = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-all-lessons');
        lessons.value = response.data.lessons;
      } catch (error) {
        console.error('Error fetching lessons:', error);
      }
    };
    
    const fetchAllQuestions = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-question-answers');
        itemQuestionTable.value = response.data.questions;
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    

  



    const submitTheQuestion = async () => {
    if ( selectedUnit && selectedLesson) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/add-Question', {
            question: question.value,
          lesson_id: selectedLesson.value,
          answers:answers.value,
          correct_answer: answers.value.indexOf(selectedAnswer.value), // Send the correct answer index
        });

        // Handle the response from the API, e.g., show a success message to the user
        console.log('Data submitted successfully', response.data);
        dialogVisibleFormData.value = false ;
        question.value = ''
        selectedUnit.value = ''
        selectedLesson.value = ''
        selectedAnswer.value = ''
      } catch (error) {
        console.error('Error submitting data:', error);
        // Handle the error, e.g., show an error message to the user
      }
    } else {
      // Handle the case when not all required selections are made (student, unit, lesson)
      console.error('Please select a student, unit, and lesson before submitting.');
    }
  };







  const showQuestionEdit = async (dataQuestion) => {
    selectedQuestionEdit.value = dataQuestion;
    
  console.log(selectedQuestionEdit.value);
  dialogShowQuestionEdit.value = true;
};
  
const correctAnswer = ref(selectedQuestionEdit.value?.answers.find(answer => answer.is_correct === 1).id);

const updateQuestionAndAnswers = async () => {
  if (selectedQuestionEdit.value) { // Check if selectedQuestionEdit.value is not null
    try {
      // Define the request payload with updated data, including correct_answer
      const updatedData = {
        lesson_id: selectedQuestionEdit.value.lesson_id,
        question: selectedQuestionEdit.value.question,
        answers: selectedQuestionEdit.value.answers,
        correct_answer: correctAnswer.value, // Include the selected correct answer
      };

      // Make an HTTP PUT request to update the question and answers
      const response = await axios.post(`http://127.0.0.1:8000/api/edit-question/${selectedQuestionEdit.value.id}`, updatedData);

      // Handle the response from the API, e.g., show a success message to the user
      console.log('Question and answers updated successfully', response.data);

      // Close the dialog or perform any other necessary actions
      dialogShowQuestionEdit.value = false;
    } catch (error) {
      console.error('Error updating question and answers:', error);
      // Handle the error, e.g., show an error message to the user
    }
  } else {
    // Handle the case when no question is selected for editing
    console.error('Please select a question for editing.');
  }
};



  
  onMounted(()=>{
    fetchAllUnit();
    fetchAllQuestions();
    fetchAllLesson();
  })
  
  </script>
  <style scoped>

  .handle-btn-operation{
  display: flex;
  justify-content:center;
}
  
  h2{
    font-weight: 600;
  }
  
  
  .proportional-image {
    max-width: 100px; /* Set a maximum width */
    max-height: 100px; /* Set a maximum height */
  }
  .main-dialog{
      margin-bottom: 12px;
  }
  .button-container {
      display: flex;
      justify-content: flex-end;
      position: relative;
      bottom: 30px;
  }
  
  
  .add-unit {
      border-radius: 50%;
      background-color: #113946;
      padding: 5px;
  }
  .delete-unit {
      border-radius: 50%;
      background-color: #141E46;
      padding: 8px;
  }
  
  .el-card {
     
  }
  
  
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  
  
  
  
  .main-form-fields{
  
  }
  
  .inputs-forms{
      background-color: #E8F6EF !important;
      color:black;
  }
  
  :deep(.el-dialog-main){
  
      color:#1B9C85;
  }
  :deep(.el-dialog-main-delete){
      background-color: #FFEEF4 !important;
      color:#1B9C85;
  }
  :deep(.el-dialog__title){
  
    
  }
  
  
  :deep(.cell) {
    text-align: center;
  }
  
  .main-dialog {
    text-align: center;
    padding: 20px;
  }
  
  /* Style the image preview */
  .image-preview {
    max-width: 100%; /* Ensure the image doesn't exceed the container's width */
    max-height: 300px; /* Set a maximum height for the image */
    margin-top: 10px; /* Add some top margin for spacing */
    border: 1px solid #ddd; /* Add a border for a frame */
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
  }
  
  
  /* Button */
  
  .button {
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
  
    padding: 0.8em 1.3em 0.8em 0.9em;
    color: white;
    background: #ad5389;
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    border: none;
    letter-spacing: 0.05em;
    border-radius: 16px;
  }
  
  .button svg {
    margin-right: 3px;
    transform: rotate(30deg);
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }
  
  .button span {
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }
  
  .button:hover svg {
    transform: translateX(5px) rotate(90deg);
  }
  
  .button:hover span {
    transform: translateX(7px);
  }
  
  
  
  .primary-button {
   font-family: 'Ropa Sans', sans-serif;
      /* font-family: 'Valorant', sans-serif; */
   color: white;
   cursor: pointer;
   font-size: 13px;
   font-weight: bold;
   letter-spacing: 0.05rem;
   border: 1px solid #0E1822;
   padding: 0.8rem 2.1rem;
   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 531.28 200'%3E%3Cdefs%3E%3Cstyle%3E .shape %7B fill: %23FF4655 /* fill: %230E1822; */ %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpolygon class='shape' points='415.81 200 0 200 115.47 0 531.28 0 415.81 200' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
   background-color: #0E1822;
   background-size: 200%;
   background-position: 200%;
   background-repeat: no-repeat;
   transition: 0.3s ease-in-out;
   transition-property: background-position, border, color;
   position: relative;
   z-index: 1;
  }
  
  .primary-button:hover {
   border: 1px solid #FF4655;
   color: white;
   background-position: 40%;
  }
  
  .primary-button:before {
   content: "";
   position: absolute;
   background-color: #0E1822;
   width: 0.2rem;
   height: 0.2rem;
   top: -1px;
   left: -1px;
   transition: background-color 0.15s ease-in-out;
  }
  
  .primary-button:hover:before {
   background-color: white;
  }
  
  .primary-button:hover:after {
   background-color: white;
  }
  
  .primary-button:after {
   content: "";
   position: absolute;
   background-color: #FF4655;
   width: 0.3rem;
   height: 0.3rem;
   bottom: -1px;
   right: -1px;
   transition: background-color 0.15s ease-in-out;
  }
  
  .button-borders {
   position: relative;
   width: fit-content;
   height: fit-content;
  }
  
  .button-borders:before {
   content: "";
   position: absolute;
   width: calc(100% + 0.5em);
   height: 50%;
   left: -0.3em;
   top: -0.3em;
   border: 1px solid #0E1822;
   border-bottom: 0px;
      /* opacity: 0.3; */
  }
  
  .button-borders:after {
   content: "";
   position: absolute;
   width: calc(100% + 0.5em);
   height: 50%;
   left: -0.3em;
   bottom: -0.3em;
   border: 1px solid #0E1822;
   border-top: 0px;
      /* opacity: 0.3; */
   z-index: 0;
  }
  
  .shape {
   fill: #0E1822;
  }
  
  </style>