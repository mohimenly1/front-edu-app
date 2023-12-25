<template lang="">
  <LayoutAuthenticated>
    <SectionMain>
        <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Lesson InterFace</span>
        <div class="button-container">


            <button @click="dialogVisibleFormData = true" class="add-unit ml-5">
                <ph-book-open :size="32" color="#FDF0F0" weight="fill" />
            </button>
    </div>
      </div>
    </template>



<!-- Dialog To Display The Record Data -->

<el-dialog
    v-model="dialogVisibleFormData"
    title="Lesson Fields Data"
    width="60%"
    :before-close="handleClose"
    class="el-dialog-main"
  >
    <div class="main-form-fields">
        <div
  class="block w-100 rounded-lg  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
  <form @submit.prevent="submitForm" enctype="multipart/form-data">
    <div class="grid grid-cols-2 gap-4">

      <!-- Pick A Unit -->

      <div class="relative mb-6" data-te-input-wrapper-init>
      <label>Pick A Unit</label>
      <el-select v-model="selectedUnit" class="m-2" placeholder="Select" size="large">
        <el-option
          v-for="unit in units"
          :key="unit.id"
          :label="unit.name"
          :value="unit.id"
        />
      </el-select>
    </div>

      <!--Title-->
      <div class="relative mb-6" data-te-input-wrapper-init>
        <input
          v-model="titleLesson"
          type="text"
          class="inputs-forms peer text-right block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput124"
          aria-describedby="emailHelp124"
          placeholder="Title of the Lesson" />
        <label
          for="exampleInput124"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
          >Title of the Lesson
        </label>
      </div>


      <div class="relative mb-6" data-te-input-wrapper-init>
        <input
          v-model="contentLesson"
          type="text"
          class="inputs-forms peer text-right block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput124"
          aria-describedby="emailHelp124"
          placeholder="Content of the Lesson" />
        <label
          for="exampleInput124"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
          >Content of the Lesson
        </label>
      </div>
  


    <div class="relative mb-6" data-te-input-wrapper-init>
        <input
          v-model="noteLesson"
          type="text"
          class="inputs-forms peer text-right block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput124"
          aria-describedby="emailHelp124"
          placeholder="Note of the Lesson" />
        <label
          for="exampleInput124"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
          >Note of the Lesson
        </label>
      </div>


    <div class="relative mb-6" data-te-input-wrapper-init>
      <el-select v-model="selectedLockedLessons" class="m-2" placeholder="Lock This Lesson ?" size="large">
    <el-option
      v-for="item in lockLessons"
      :key="item.id"
      :label="item.name"
      :value="item.id"
    />
  </el-select>

      </div>


    </div>




    

    

    <div class="main-dialog-image">
      <label class="custum-file-upload" for="file">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
</div>
<div class="text">
   <span>Click to upload image</span>
   </div>
   <input multiple type="file" ref="fileInput" @change="handleFileChange" id="file">
</label>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="(file, index) in selectedFiles" :key="index">
        <img :src="file.preview" alt="Selected Image" class="rounded-lg shadow-lg" />
      </div>
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
        <button>

        </button>
      </span>
    </template>
  </el-dialog>






  <!-- Edit Dialog -->

  <el-dialog
  v-model="dialogShowDetailsLessonEdit"
  title="Edit Lesson"
  width="60%"
  :before-close="handleClose"
  class="el-dialog-main"
>
  <div class="main-form-fields">
    <div class="block w-100 rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <form @submit.prevent="submitEditForm" enctype="multipart/form-data">
        <div class="grid grid-cols-2 gap-4">
          <!-- Pick A Unit -->
          <div class="relative mb-6" data-te-input-wrapper-init>
            <label>Pick A Unit</label>
            <el-select v-model="selectedLessonEdit.unit_id" class="m-2" placeholder="Select" size="large">
              <el-option
                v-for="unit in units"
                :key="unit.id"
                :label="unit.name"
                :value="unit.id"
              />
            </el-select>
          </div>

          <!-- Title -->
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              v-model="selectedLessonEdit.name"
              type="text"
              class="inputs-forms peer text-right block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="lessonTitleInput"
              placeholder="Title of the Lesson"
            />
            <label
              for="lessonTitleInput"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
              >Title of the Lesson
            </label>
          </div>

          <!-- Content -->
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              v-model="selectedLessonEdit.content"
              type="text"
              class="inputs-forms peer text-right block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity:100 data:[te-input-state-active]:placeholder:opacity:100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="lessonContentInput"
              placeholder="Content of the Lesson"
            />
            <label
              for="lessonContentInput"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data:[te-input-state-active]:-translate-y:[0.9rem] peer-data:[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
              >Content of the Lesson
            </label>
          </div>

          <!-- Note -->
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              v-model="selectedLessonEdit.note"
              type="text"
              class="inputs-forms peer text-right block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py:[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity:100 data:[te-input-state-active]:placeholder:opacity:100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="lessonNoteInput"
              placeholder="Note of the Lesson"
            />
            <label
              for="lessonNoteInput"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w:[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data:[te-input-state-active]:-translate-y:[0.9rem] peer-data:[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
              >Note of the Lesson
            </label>
          </div>
        </div>


        <div class="relative mb-6" data-te-input-wrapper-init>
      <el-select v-model="selectedLessonEdit.is_unlocked" class="m-2" placeholder="Lock This Lesson ?" size="large">
    <el-option
      v-for="item in lockLessons"
      :key="item.id"
      :label="item.name"
      :value="item.id"
    />
  </el-select>

      </div>

        <div class="main-dialog-image">
      <label class="custum-file-upload" for="file">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
</div>
<div class="text">
   <span>Click to upload image</span>
   </div>
   <input multiple type="file" ref="fileInput" @change="handleFileChange" id="file">
</label>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="(file, index) in selectedFiles" :key="index">
        <img :src="file.preview" alt="Selected Image" class="rounded-lg shadow-lg" />
      </div>
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
      <button @click="dialogShowDetailsLessonEdit = false">Cancel</button>
    </span>
  </template>
</el-dialog>



  <!-- End dialog Edit -->

  <el-table :data="itemLessonTable" style="width: 100%">
      <el-table-column prop="name" label="Tite Of Lesson" width="120" />
      <el-table-column label="Unit Info" width="580">
    <template #default="{ row }">
      <div>
        <p><strong>Name:</strong> {{ row.unit.name }}</p>
        <p><strong>Description:</strong> {{ row.unit.description }}</p>
        <!-- Display other unit fields as needed -->
      </div>
    </template>
  </el-table-column>


      <el-table-column :cell-class-name="centeredCell" fixed="right" label="Operations" width="280">
  <template #default="{ row }">


<div class="handle-btn-operation">
  <button @click="showLessonEdit(row)" class="delete-unit ml-5">
        <ph-pencil :size="32" color="#FFFFDD" weight="fill" />
      </button>
  <button @click="showLessonDetails(row)" class="delete-unit ml-5">
        <ph-eye :size="32" color="#FFFFDD" weight="fill" />
      </button>

    <button @click="confirmDeleteUnit(row.id)" class="delete-unit ml-5">
      <ph-trash-simple :size="32" color="#FFFFDD" weight="fill" />
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
      :total="totalessons"
    ></el-pagination>



<!-- Confirm Delete -->

<el-dialog
    v-model="dialogConfirmDelete"
    title="Delete Unit"
    width="40%"
    :before-close="handleClose"
    class="el-dialog-main-delete"
  >

  <h2>Are You Sure You Want To Delete This Unit ?</h2>
    <template #footer>
      <span class="dialog-footer">
        
        <div class="button-borders">
  <button @click="confirmDeleteLesson" class="primary-button"> Delete
  </button>


  <button @click="dialogConfirmDelete = false" class="primary-button"> Cancel
  </button>
</div>
      </span>
    </template>

</el-dialog>






<!-- Show more detail about lesson -->

<el-dialog
  v-model="dialogShowDetailsLesson"
  title="More Details On This Lesson"
  width="70%"
  :before-close="handleClose"
  class="el-dialog-main-delete"
>

<main>
  <div class="container">
    <div class="gallery">
      <!-- Gallery items for each lesson -->
      <div class="gallery-item" tabindex="0" v-for="file in selectedLesson.media_files" :key="file.id">
        <img :src="'http://127.0.0.1:8000/storage/' + file.file_name" class="gallery-image" alt="">
        <video width="500" height="500" controls>
   <source :src="'http://127.0.0.1:8000/storage/' + file.file_name" type="video/mp4">
      Your browser does not support the video tag.
</video>
        <div class="gallery-item-info">
          <ul>
            <li class="gallery-item-likes">
              <span class="visually-hidden">Title Of Lesson :</span>
              <i class="fas fa-heart" aria-hidden="true"></i> {{ selectedLesson.name }}
            </li>
            <li class="gallery-item-comments">
              <span class="visually-hidden">Content :</span>
              <i class="fas fa-comment" aria-hidden="true"></i> {{ selectedLesson.content }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End of gallery -->
    <div class="loader"></div>
  </div>
  <!-- End of container -->
</main>


  <template #footer>
    <span class="dialog-footer">
      <div class="button-borders">
        <button @click="dialogShowDetailsLesson = false" class="primary-button">Cancel</button>
      </div>
    </span>
  </template>
</el-dialog>




  </el-card>
    </SectionMain>
  </LayoutAuthenticated>
</template>
<script setup lang="ts">
 import { PhTrashSimple,PhEye,PhPencil } from "@phosphor-icons/vue";
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import { PhBookOpen,PhImage } from "@phosphor-icons/vue";
import { Edit, Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import { ref,computed, onMounted } from 'vue'
import SectionMain from '@/components/SectionMain.vue'
import { ElCard,ElDialog,ElTable,ElPagination } from 'element-plus'
import type { UploadFile } from 'element-plus'
import { useMyStore } from '@/stores/mystore';
import axios from 'axios';

const uploadedFiles = ref([])


const { user } = useMyStore();
const selectedFiles = ref([]);



const selectedUnit = ref(''); // This variable will store the selected unit ID
const units = ref([]);

const fetchAllUnits = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/get-all-unit');
    units.value = response.data.units;
  } catch (error) {
    console.error('Error fetching units:', error);
  }
};



const lockLessons = ref([
{'name':"Locked",'id':0},
{'name':"Don't Lock",'id':1},
])

const selectedLockedLessons = ref('');

let lessonIdToDelete = null;

const dialogVisible = ref(false)
const dialogVisibleForImage = ref(false)
const dialogVisibleFormData = ref(false)
const dialogShowDetailsLesson = ref(false)
const dialogShowDetailsLessonEdit = ref(false)
const dialogConfirmDelete = ref(false)

const selectedLesson = ref(null);
const selectedLessonEdit = ref(null);

const confirmDeleteUnit = (id) => {
  lessonIdToDelete = id;
  dialogConfirmDelete.value = true;
};


const titleLesson = ref("");
const contentLesson = ref("");
const noteLesson = ref("");
const selectedFile = ref(null);


const editNote = ref("");


const imagePreview = ref(null);


const itemLessonTable = ref([]);
const currentPage = ref(1);
const pageSize = ref(3);
const totalessons = ref(0);




const submitEditForm = async () => {
  try {
    const lessonId = selectedLessonEdit.value.id; // Get the lesson ID
    const formData = new FormData();


    // Add the updated form data
    formData.append('unit_id', selectedLessonEdit.value.unit_id);
    formData.append('name', selectedLessonEdit.value.name);
    formData.append('content', selectedLessonEdit.value.content);
    formData.append('note', selectedLessonEdit.value.note);
    formData.append('is_unlocked', selectedLessonEdit.value.is_unlocked);

    // Add any media files if needed
    // Iterate through selectedFiles and append each file to formData
    for (let i = 0; i < selectedFiles.value.length; i++) {
  const file = selectedFiles.value[i].file;
  formData.append('media_files[]', file);

  // Set the explicit MIME type if available
  if (file.type) {
    formData.set('media_files[' + i + '][type]', file.type);
  }
}

    // Make the Axios PUT request
    const response = await axios.post(`http://127.0.0.1:8000/api/edit-lesson-with-media/${lessonId}`, formData);

    console.log('Lesson updated:', response.data);
    dialogShowDetailsLessonEdit.value = false; // Close the edit dialog
    // Optionally, refresh the lesson data using getAllLesson()
  } catch (error) {
    console.error('Error updating lesson:', error);
    // Handle any errors here
  }
};



const getAllLesson = async () => {
  try {
    const response = await fetchLesson(currentPage.value, pageSize.value);
    itemLessonTable.value = response.data.lessons.data; // Assuming that lessons are in the "data" field
    totalessons.value = response.data.lessons.total;
  } catch (error) {
    console.error('Error fetching lessons:', error);
  }
};


const handleSizeChange = (newSize) => {
  pageSize.value = newSize;
  currentPage.value = 1;
  getAllLesson();
};

const handleCurrentChange = (newPage) => {
  currentPage.value = newPage;
  getAllLesson();
};

const fetchLesson = async (page, perPage) => {
  return axios.get(`http://127.0.0.1:8000/api/get-lessons?page=${page}&per_page=${perPage}`);
};





const displayImagePreview = () => {
  if (selectedFile.value) {
    const reader = new FileReader();

    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };

    reader.readAsDataURL(selectedFile.value);
  }
};



const handleFileChange = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    // Create a FileReader to read the image preview
    const reader = new FileReader();
    
    // Explicitly set the MIME type for each file
    const fileType = file.type ? file.type : 'unknown'; // Set a default if type is undefined

    reader.onload = (e) => {
      // Push each selected file along with its preview and type to the selectedFiles array
      selectedFiles.value.push({ file, preview: e.target.result, type: fileType });
    };
    reader.readAsDataURL(file);
  }
};

const handleFileChangeEdit = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    // Create a FileReader to read the image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      // Push each selected file along with its preview to the selectedFiles array
      selectedFiles.value.push({ file, preview: e.target.result });
    };
    reader.readAsDataURL(file);
  }
};





const submitForm = async () => {
  const formData = new FormData();

  // Append the selected files to the FormData object
  for (let i = 0; i < selectedFiles.value.length; i++) {
    formData.append('media_files[]', selectedFiles.value[i].file);
  }

  // Append other form data
  formData.append('unit_id', selectedUnit.value);
  formData.append('user_id', user.id);
  formData.append('name', titleLesson.value);
  formData.append('content', contentLesson.value);
  formData.append('note', noteLesson.value);
  formData.append('is_unlocked', selectedLockedLessons.value);

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/add-lesson-with-media', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file uploads
      },
    });

    console.log(response.data.message);

    // Reset the form fields
    selectedUnit.value = '';
    titleLesson.value = '';
    contentLesson.value = '';
    noteLesson.value = '';
    selectedFiles.value = [];
    dialogVisibleFormData.value = false;
  } catch (error) {
    console.error('Error creating lesson:', error);
  }
};










const centeredCell = ({ row, column, rowIndex, columnIndex }) => {
  // Use a CSS class to center the text within the cell
  return 'center-text';
};


const deleteLesson = async (lessonId) => {
  try {
    // Send a DELETE request to the API endpoint with the lesson ID
    await axios.delete(`http://127.0.0.1:8000/api/delete-lessons/${lessonId}`);

    // If the deletion is successful, you may want to update the lesson table
    // by fetching the lessons again or removing the deleted lesson from the table
    dialogConfirmDelete.value = false
    getAllLesson();

    // You can also show a success message to the user
    // You can use a UI library like Element UI's Message component for this
    // Example: this.$message.success('Lesson deleted successfully');
  } catch (error) {
    console.error('Error deleting lesson:', error);

    // Handle the error, and you can also show an error message to the user
    // Example: this.$message.error('Failed to delete lesson');
  }
};



const confirmDeleteLesson = async () => {
  // Close the dialog
  dialogConfirmDelete.value = false;

  if (lessonIdToDelete) {
    try {
      // Send a DELETE request to the API endpoint with the lesson ID
      await axios.delete(`http://127.0.0.1:8000/api/delete-lessons/${lessonIdToDelete}`);

      // If the deletion is successful, you may want to update the lesson table
      // by fetching the lessons again or removing the deleted lesson from the table
      getAllLesson();

      // You can also show a success message to the user
      // You can use a UI library like Element UI's Message component for this
      // Example: this.$message.success('Lesson deleted successfully');
    } catch (error) {
      console.error('Error deleting lesson:', error);

      // Handle the error, and you can also show an error message to the user
      // Example: this.$message.error('Failed to delete lesson');
    }
  }
};




const showLessonDetails = async (lesson) => {
  selectedLesson.value = lesson;
 
  dialogShowDetailsLesson.value = true;
};
const showLessonEdit = async (lesson) => {
  selectedLessonEdit.value = lesson;
  console.log(selectedLessonEdit.value);
  dialogShowDetailsLessonEdit.value = true;
};


onMounted(()=>{
  getAllLesson();
  fetchAllUnits();
});
</script>
<style scoped>

/* Add this CSS to your existing styles */
.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem -1rem;
  padding-bottom: 3rem;
}

.gallery-item {
  position: relative;
  flex: 1 0 22rem;
  margin: 1rem;
  color: #fff;
  cursor: pointer;
}

.gallery-item:hover .gallery-item-info,
.gallery-item:focus .gallery-item-info {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.gallery-item-info {
  display: none;
}

.gallery-item-info li {
  display: inline-block;
  font-size: 1.7rem;
  font-weight: 600;
}

.gallery-item-likes {
  margin-right: 2.2rem;
}

.gallery-item-type {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2.5rem;
  text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
}

.fa-clone,
.fa-comment {
  transform: rotateY(180deg);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.handle-btn-operation{
  display: flex;
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
.main-dialog-image{
  text-align: center;
  padding: 20px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-around;
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

}
:deep(.el-dialog-main-delete){

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



.custum-file-upload {
  height: 200px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cacaca;
  background-color: rgba(255, 255, 255, 1);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 48px 35px -48px rgba(0,0,0,0.1);
}

.custum-file-upload .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .icon svg {
  height: 80px;
  fill: rgba(75, 85, 99, 1);
}

.custum-file-upload .text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .text span {
  font-weight: 400;
  color: rgba(75, 85, 99, 1);
}

.custum-file-upload input {
  display: none;
}
</style>