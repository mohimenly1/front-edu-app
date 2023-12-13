<template lang="">
    <LayoutAuthenticated>
      <SectionMain>
          <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>School InterFace</span>
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
      title="School Fields Data"
      width="60%"
      :before-close="handleClose"
      class="el-dialog-main"
    >
      <div class="main-form-fields">
          <div
    class="block w-100 rounded-lg  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
    <form @submit.prevent="submitForm">
      <div class="grid grid-cols-2 gap-4">
        <!-- name -->
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            v-model="name"
            type="text"
            class="inputs-forms peer text-right block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none   [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput123"
            aria-describedby="emailHelp123"
            placeholder="name" />
          <label
            for="emailHelp123"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
            >name
          </label>
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
  
    <el-table :data="itemSchoolTable" style="width: 100%">
      <el-table-column prop="name" label="Name" width="180" />

      <el-table-column :cell-class-name="centeredCell" fixed="right" label="Operations" width="110">
        <template #default="{ row }">
          <button @click="confirmDeleteSchool(row.id)" class="delete-unit ml-5">
    <ph-trash-simple :size="32" color="#FFFFDD" weight="fill" />
  </button>
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
      :total="totalSchools"
    ></el-pagination>
  
  
  
  <!-- Confirm Delete -->
  
  <el-dialog
      v-model="dialogConfirmDelete"
      title="Delete School"
      width="40%"
      :before-close="handleClose"
      class="el-dialog-main-delete"
    >
  
    <h2>Are You Sure You Want To Delete This School ?</h2>
      <template #footer>
        <span class="dialog-footer">
          
          <div class="button-borders">
    <button @click="deleteSchool()" class="primary-button"> Delete
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
  import { PhFolderNotch,PhImage } from "@phosphor-icons/vue";
  import { Edit, Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
  import { ref,computed, onMounted } from 'vue'
  import SectionMain from '@/components/SectionMain.vue'
  import { ElCard,ElDialog,ElTable,ElPagination } from 'element-plus'
  import type { UploadFile } from 'element-plus'
  import { useMyStore } from '@/stores/mystore';
  import axios from 'axios';
  
  const uploadedFiles = ref([])
  
  
  const { user } = useMyStore();
  
  
  let schoolIdToDelete = null;

  const dialogVisibleFormData = ref(false)
  const dialogConfirmDelete = ref(false)
  
  
  
  const confirmDeleteSchool = (id) => {
    schoolIdToDelete = id;
    dialogConfirmDelete.value = true;
  };
  
  const name = ref("");




  const submitForm = async () => {
  try {
    // Prepare the request data
    const requestData = {
      name: name.value,
    };

    // Make a POST request to your API endpoint
    const response = await axios.post('http://127.0.0.1:8000/api/add-schools', requestData);

    // Handle the response as needed
    console.log('School created:', response.data);

    // Reset the form fields
    name.value = '';
    dialogVisibleFormData.value = false;
    await fetchData();
    // You can also show a success message to the user
    // For example: showSuccessMessage('School created successfully');
  } catch (error) {
    // Handle any errors
    console.error('Error creating school:', error);

    // You can also show an error message to the user
    // For example: showErrorMessage('Failed to create school');
  }
};

  
  const imagePreview = ref(null);
  
  
  const itemSchoolTable = ref([]);
const totalSchools = ref(0);
const currentPage = ref(1);
const pageSize = ref(10);
  

  
  const handleSizeChange = (val) => {
  pageSize.value = val;
  currentPage.value = 1; // Reset to the first page when changing the page size
  fetchData();
};

  const handleCurrentChange = (val) => {
  currentPage.value = val;
  fetchData();
};
  

  
  


  const fetchData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/get-schools', {
      params: {
        page: currentPage.value, // Send the current page
        per_page: pageSize.value, // Send the page size
      },
    });

    itemSchoolTable.value = response.data.schools.data; // Update the table data
    totalSchools.value = response.data.schools.total; // Update the total number of records
  } catch (error) {
    console.error('Error fetching schools:', error);
  }
};

  
  
const deleteSchool = async () => {
    if (schoolIdToDelete === null) {
      // No school to delete
      return;
    }

    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/delete-schools/${schoolIdToDelete}`);
      if (response.status === 200) {
        // Delete the school from the local table
        itemSchoolTable.value = itemSchoolTable.value.filter((school) => school.id !== schoolIdToDelete);
      }
      // Close the dialog
      dialogConfirmDelete.value = false;
      // Reset the schoolIdToDelete
      schoolIdToDelete = null;
    } catch (error) {
      console.error('Error deleting school:', error);
    }
  };





  



  
  
  onMounted(() => {
  fetchData();
});
  </script>
  <style scoped>
  
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