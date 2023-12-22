<template lang="">
  <LayoutGuest>

<div>

  <section>
  <div class="login-box">

      <form @submit.prevent="login">
        <div v-if="loading" class="loading">
              <fingerprint-spinner
  :animation-duration="1500"
  :size="64"
  color="#ff1d5e"
/>
            </div>
          <h2>Student Area</h2>

          <div class="input-box">
              <span class="icon">
                  <ion-icon name="mail"></ion-icon>
              </span>
              <input v-model="email" type="email" required>
              <label>Email</label>
          </div>

          <div class="input-box">
              <span class="icon">
                  <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input v-model="password" type="password" required>
              <label>Password</label>
          </div>

          <div class="input-box">
              <span class="icon">
                  <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input v-model="phoneNumber" type="text" required>
              <label>Phone Parent</label>
          </div>
          <div class="input-box">
            <el-select v-model="selectedSchool" class="m-2" placeholder="Select" size="large">
        <el-option
          v-for="school in schools"
          :key="school.id"
          :label="school.name"
          :value="school.id"
        />
      </el-select>
          </div>



          <button type="submit">Login</button>
          <!-- <div class="register-link">
              <router-link class="go-back" to="/login">GO BACK TO ADMIN</router-link> 
            </div> -->



      </form>
  </div>
  </section>
 
</div>

</LayoutGuest>
</template>
<script>
import { FlowerSpinner,FingerprintSpinner } from 'epic-spinners'
  import LayoutGuest from '@/layouts/LayoutGuest.vue'
  import SectionFullScreen from '@/components/SectionFullScreen.vue'
  import { useMyStore } from '@/stores/mystore.js';
  
import axios from 'axios'
  
  

  
  export default {
      components:{
          LayoutGuest,
          FlowerSpinner,
          FingerprintSpinner
      },
      data() {
      return {
        email: '',
        password: '',
        phoneNumber:'',
        errorMessage: '',
        selectedSchool:'',
        schools:[],
      }
    },
    computed: {
    loading() {
      const myStore = useMyStore();
      return myStore.loading; // Use myStore.loading to get the loading state
    },
  },
    methods: {
  
      async login() {
        const myStore = useMyStore()
        this.errorMessage = myStore.role;
        const { email, password,phoneNumber,selectedSchool } = this
  
        try {
          const loginSuccessful = await myStore.login(email, password,phoneNumber,selectedSchool)
  
          if (loginSuccessful) {
            // Redirect to the dashboard or perform other actions
            // For example, you can use Vue Router to navigate to the dashboard
            // this.$router.push('/dashboard');
            

          
        this.$router.push('/').then(() => { return window.location.reload()});

          } else {
            // Handle login failure, e.g., show an error message
        //    alert('Login failed. Please check your credentials.')
          }
        } catch (error) {
          console.error('Login error:', error)
        }
      },

      async fetchSchools (){
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/all-schools');
      this.schools = response.data.schools;
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  },
  
      
    },
  mounted(){
    this.fetchSchools();
  }

  }
  
  
  
  </script>
<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");


.loading{
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
 /* top:400px; */
  z-index: 1;
}
.go-back{
  color:#F99417;
  font-weight: bold;
}
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Poppins", sans-serif;
}

section {
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
background: url("https://wallpapercave.com/wp/wp11917150.jpg") no-repeat;
background-size: cover;
background-position: center;
animation: animateBg 5s linear infinite;
}

@keyframes animateBg {
100% {
  filter: hue-rotate(360deg);
}
}

.login-box {
position: relative;
width: 600px;
height: 450px;
background: transparent;
border: 2px solid rgba(119, 92, 92, 0.5);
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(15px);
}

h2 {
font-size: 2.5rem;
color: #fff;
text-align: center;
}

.input-box {
position: relative;
width: 310px;
margin: 30px 0;
border-bottom: 2px solid #fff;
}

.input-box label {
position: absolute;
top: 50%;
left: 5px;
transform: translateY(-50%);
font-size: 1rem;
color: #fff;
pointer-events: none;
transition: 0.5s;
}

.input-box input:focus ~ label,
.input-box input:valid ~ label {
top: -5px;
}

.input-box input {
width: 100%;
height: 50px;
background: transparent;
border: none;
outline: none;
font-size: 1rem;
color: #fff;
padding: 0 35px 0 5px;
}

.input-box .icon {
position: absolute;
right: 8px;
color: #fff;
font-size: 1.2rem;
line-height: 57px;
}

.remember-forgot {
margin: -15px 0 15px;
font-size: 0.9em;
color: #fff;
display: flex;
justify-content: space-between;
}

.remember-forgot label input {
margin-right: 3px;
}

.remember-forgot a {
color: #fff;
text-decoration: none;
}

.remember-forgot a:hover {
text-decoration: underline;
}

button {
width: 100%;
height: 40px;
background: #fff;
border: none;
outline: none;
border-radius: 40px;
cursor: pointer;
font-size: 1rem;
color: #000;
font-weight: 500;
}

.register-link {
font-size: 0.9rem;
color: #fff;
text-align: center;
margin: 25px 0 10px;
}

.register-link p a {
color: #fff;
text-decoration: none;
font-weight: 600;
}

.register-link p a:hover {
text-decoration: underline;
}

@media (max-width: 360px) {
.login-box {
  width: 100%;
  height: 100vh;
  border: none;
  border-radius: 0;
}

.input-box {
  width: 290px;
}
}


</style>

