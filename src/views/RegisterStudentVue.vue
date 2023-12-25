<template lang="">
  <div style="margin: 0 auto; margin-top:30px; background-color:#9664BC" class="container">
    <div class="title">Registration For Student</div>
    <div class="content">
      <form enctype="multipart/form-data" @submit.prevent="submitForm">
        <div class="user-details">
          <div class="input-box">
            
            <span class="details">Full Name</span>
            <input
            v-model="nameStudent"
             type="text" placeholder="Enter your name" required>
          </div>

          <div class="input-box">
            <span class="details">Email</span>
            <input
            v-model="emailStudent"
             type="text" placeholder="Enter your email" required>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input 
            v-model="passwordStudent"
            type="password" placeholder="Enter your password" required>
          </div>


          <div class="input-box">
            <span class="details">Phone Number</span>
            <input 
            v-model="phoneNumber"
            type="text" placeholder="Enter your number" required>
          </div>


          <div class="input-box">
            <span class="details">Address</span>
            <input 
            v-model="addressStudent"
            type="text" placeholder="Enter your number" required>
          </div>


          <div class="input-box">
            <span class="details">Class</span>
            <input 
            v-model="classStudent"
            type="text" placeholder="Enter your number" required>
          </div>


          <div class="input-box">
            <span class="details">Note</span>
            <input 
            v-model="noteStudent"
            type="text" placeholder="Enter your number" required>
          </div>


          <div class="input-box">
            <span class="details">Image Student</span>
            <input type="file" ref="fileInput" @change="handleFileChange" />
    <img v-if="selectedFile" :src="imagePreview" alt="Selected Image" class="image-preview" />
          </div>


          <div class="input-box">
            <span class="details">Pick A School</span>
            <el-select v-model="selectedSchool" class="m-2" placeholder="Select" size="large">
        <el-option
          v-for="school in schools"
          :key="school.id"
          :label="school.name"
          :value="school.id"
        />
      </el-select>
          </div>

        </div>

        <div class="button">
          <input type="submit">
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import axios from 'axios';
import { useRouter } from 'vue-router'
import { ref,computed, onMounted } from 'vue'
const schools = ref([]); // To store the list of schools
const selectedFile = ref(null);
const nameStudent = ref('');
  const emailStudent = ref('');
  const passwordStudent = ref('');
  const selectedSchool = ref('');
  const addressStudent = ref('');
  const classStudent = ref('');
  const noteStudent = ref('');
  const phoneNumber = ref('');

  const router = useRouter()

  const fetchSchools = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/all-schools');
      schools.value = response.data.schools;
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };
  
const imagePreview = ref(null);

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
  const inputElement = event.target as HTMLInputElement;

  if (inputElement.files && inputElement.files.length > 0) {
    selectedFile.value = inputElement.files[0];
    displayImagePreview();
  }
};

const submitForm = async () => {
  const formData = new FormData();
  formData.append('name', nameStudent.value);
  formData.append('email', emailStudent.value);
  formData.append('password', passwordStudent.value);
  formData.append('school_id', selectedSchool.value);
  formData.append('address', addressStudent.value);
  formData.append('class', classStudent.value);
  formData.append('note', noteStudent.value);
  formData.append('phone', phoneNumber.value);

  // Check if a file is selected
  if (selectedFile.value) {
    formData.append('image', selectedFile.value);
  }

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/admin/register-student', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Required for file uploads
      },
    });

     selectedFile.value = null
     nameStudent.value = ''
     emailStudent.value = ''
     passwordStudent.value = ''
     selectedSchool.value = ''
     addressStudent.value = ''
     classStudent.value = ''
     noteStudent.value = ''
     phoneNumber.value = ''


     router.push('login/student')
    // await getAllStudent();
    // Handle the response (e.g., show a success message)
    console.log('Student registration successful:', response.data);
  } catch (error) {
    // Handle any errors (e.g., show an error message)
    console.error('Error registering student:', error);
  }
};


onMounted(()=>{
  fetchSchools();
 
})
</script>
<style scoped>
    
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins',sans-serif;
}
body{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
.container{
  max-width: 700px;
  width: 100%;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}
.container .title{
  font-size: 25px;
  font-weight: 500;
  position: relative;
}
.container .title::before{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
.content form .user-details{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}
form .user-details .input-box{
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}
form .input-box span.details{
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}
.user-details .input-box input{
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}
.user-details .input-box input:focus,
.user-details .input-box input:valid{
  border-color: #9b59b6;
}
 form .gender-details .gender-title{
  font-size: 20px;
  font-weight: 500;
 }
 form .category{
   display: flex;
   width: 80%;
   margin: 14px 0 ;
   justify-content: space-between;
 }
 form .category label{
   display: flex;
   align-items: center;
   cursor: pointer;
 }
 form .category label .dot{
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #d9d9d9;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}
 #dot-1:checked ~ .category label .one,
 #dot-2:checked ~ .category label .two,
 #dot-3:checked ~ .category label .three{
   background: #9b59b6;
   border-color: #d9d9d9;
 }
 form input[type="radio"]{
   display: none;
 }
 form .button{
   height: 45px;
   margin: 35px 0
 }
 form .button input{
   height: 100%;
   width: 100%;
   border-radius: 5px;
   border: none;
   color: #fff;
   font-size: 18px;
   font-weight: 500;
   letter-spacing: 1px;
   cursor: pointer;
   transition: all 0.3s ease;
   background: linear-gradient(135deg, #71b7e6, #9b59b6);
 }
 form .button input:hover{
  /* transform: scale(0.99); */
  background: linear-gradient(-135deg, #71b7e6, #9b59b6);
  }
 @media(max-width: 584px){
 .container{
  max-width: 100%;
}
form .user-details .input-box{
    margin-bottom: 15px;
    width: 100%;
  }
  form .category{
    width: 100%;
  }
  .content form .user-details{
    max-height: 300px;
    overflow-y: scroll;
  }
  .user-details::-webkit-scrollbar{
    width: 5px;
  }
  }
  @media(max-width: 459px){
  .container .content .category{
    flex-direction: column;
  }
}
</style>