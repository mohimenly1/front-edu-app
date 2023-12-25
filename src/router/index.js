import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/HomeView.vue'
import LoginView from '@/views/Dashboard/Login/LoginView.vue'
import AddUnit from '@/views/Dashboard/UIAdmin/AddUnit.vue';
import AddLesson from '@/views/Dashboard/UIAdmin/AddLesson.vue';
import AddStudent from '@/views/Dashboard/UIAdmin/AddStudent.vue';
import AddSchools from '@/views/Dashboard/UIAdmin/AddShcool.vue';
import StartStudyVue from '@/views/Dashboard/UIAdmin/StartStudy.vue';
import LoginStudentVue from '@/views/Dashboard/Login/LoginStudent.vue';
import LessonUnit from '@/views/Dashboard/ComponentStudent/LessonUnit.vue';
import FirstLesson from '@/views/Dashboard/UiLessons/FirstLesson.vue';
import AddQuestionVue from '@/views/Dashboard/UIAdmin/AddQuestion.vue';
import HomePage from '@/views/HomePage.vue';
import RegisterStudentVue from '@/views/RegisterStudentVue.vue';

import { useMyStore } from '@/stores/mystore.js';



const isAdmin = (to, from, next) => {
    const myStore = useMyStore();
    console.log('User role:', myStore.role); // Log the user's role
    if (myStore.role === 'admin') {
        next(); // Allow access to the route
    } else {
        // Redirect or show an error message for unauthorized access
        next('/login'); // Example: Redirect to the login page
    }
};

const isStudent = (to, from, next) => {
    const myStore = useMyStore();
    if (myStore.role === 'student') {
        next(); // Allow access to the route
    } else {
        // Redirect or show an error message for unauthorized access
        next('/login'); // Example: Redirect to the login page
    }
};




const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            meta: {
                reload: true,
                title: 'Dashboard',
                requiresAuth: true, // Add this meta field to indicate that the route requires authentication
            },
            path: '/',
            name: 'dashboard',
            component: Home,
            beforeEnter: (to, from, next) => {

                const myStore = useMyStore();
                // Check if the user is authenticated (e.g., has a token)
                if (myStore.isAuthenticated) {
                    next(); // User is authenticated, proceed to the route

                } else {
                    // User is not authenticated, redirect to the login page
                    next('/home-page');
                    console.log("not authenticated")
                }

            },
        },
        {
            meta: {
                title: 'Login',

            },
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        {
            meta: {
                title: 'Login Student',

            },
            path: '/login/student',
            name: 'login-student',
            component: LoginStudentVue,
        },
        {
            meta: {
                title: 'Education System',

            },
            path: '/home-page',
            name: 'home-page',
            component: HomePage, // Replace 'HomePage' with your actual component name
        },
        {
            path:'/register-student',
            name: 'register-student',
            component: RegisterStudentVue,
        },
        {
            meta: {
                title: 'Units',
                requiresAuth: true,
            },
            path: '/units',
            name: 'units',
            component: AddUnit,
            beforeEnter: (to, from, next) => {

                const myStore = useMyStore();
                // Check if the user is authenticated (e.g., has a token)
                if (myStore.isAuthenticated) {
                    next(); // User is authenticated, proceed to the route

                } else {
                    // User is not authenticated, redirect to the login page
                    next('/login');
                    console.log("not authenticated")
                }

            },
        },
        {
            meta: {
                title: 'Lessons',
                requiresAuth: true,
            },
            path: '/lessons',
            name: 'lessons',
            component: AddLesson,
            beforeEnter: (to, from, next) => {

                const myStore = useMyStore();
                // Check if the user is authenticated (e.g., has a token)
                if (myStore.isAuthenticated) {
                    next(); // User is authenticated, proceed to the route

                } else {
                    // User is not authenticated, redirect to the login page
                    next('/login');
                    console.log("not authenticated")
                }

            },
        },
        {
            meta: {
                title: 'Students',
                requiresAuth: true,
            },
            path: '/students',
            name: 'students',
            component: AddStudent,
            beforeEnter: (to, from, next) => {

                const myStore = useMyStore();
                // Check if the user is authenticated (e.g., has a token)
                if (myStore.isAuthenticated) {
                    next(); // User is authenticated, proceed to the route

                } else {
                    // User is not authenticated, redirect to the login page
                    next('/login');
                    console.log("not authenticated")
                }

            },
        },
        {
            meta: {
                title: 'Schools',
                requiresAuth: true,
            },
            path: '/schools',
            name: 'schools',
            component: AddSchools,
            beforeEnter: (to, from, next) => {

                const myStore = useMyStore();
                // Check if the user is authenticated (e.g., has a token)
                if (myStore.isAuthenticated) {
                    next(); // User is authenticated, proceed to the route

                } else {
                    // User is not authenticated, redirect to the login page
                    next('/login');
                    console.log("not authenticated")
                }

            },
        },
        {
            meta: {
                title: 'Start Study',
                requiresAuth: true,
            },
            path: '/add-study-program',
            name: 'study-program',
            component: StartStudyVue,
            beforeEnter: (to, from, next) => {

                const myStore = useMyStore();
                // Check if the user is authenticated (e.g., has a token)
                if (myStore.isAuthenticated) {
                    next(); // User is authenticated, proceed to the route

                } else {
                    // User is not authenticated, redirect to the login page
                    next('/login');
                    console.log("not authenticated")
                }

            },
        },
        {
            meta: {
              title: 'Start Study For Unit',
              requiresAuth: true,
            },
            path: '/study-unit/:units+/:lessons*',
            name: 'study-unit',
            props: true,
            component: LessonUnit,
            beforeEnter: (to, from, next) => {

                const myStore = useMyStore();
                // Check if the user is authenticated (e.g., has a token)
                if (myStore.isAuthenticated) {
                    next(); // User is authenticated, proceed to the route

                } else {
                    // User is not authenticated, redirect to the login page
                    next('/login');
                    console.log("not authenticated")
                }

            },
        },
        {
            meta: {
                title: 'Start Study For First Lesson',
                requiresAuth: true,
            },
            path: '/study-unit/first-lesson/:lessonId',
            name: 'first-lesson',
            props: true,
            component: FirstLesson,
            beforeEnter: (to, from, next) => {

                const myStore = useMyStore();
                // Check if the user is authenticated (e.g., has a token)
                if (myStore.isAuthenticated) {
                    next(); // User is authenticated, proceed to the route

                } else {
                    // User is not authenticated, redirect to the login page
                    next('/login');
                    console.log("not authenticated")
                }

            },
        },
        {
            meta: {
                title: 'Add Question',
                requiresAuth: true,
            },
            path: '/add-question',
            name: 'add-question',
            props: true,
            component: AddQuestionVue,
            beforeEnter: (to, from, next) => {

                const myStore = useMyStore();
                // Check if the user is authenticated (e.g., has a token)
                if (myStore.isAuthenticated) {
                    next(); // User is authenticated, proceed to the route

                } else {
                    // User is not authenticated, redirect to the login page
                    next('/login');
                    console.log("not authenticated")
                }

            },
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    },
});

export default router;