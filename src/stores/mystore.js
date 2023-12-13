import { defineStore } from 'pinia';
import axios from 'axios';
import router from '@/router';

export const useMyStore = defineStore({
    id: 'myStore',
    state: () => ({
        token: localStorage.getItem('token') || null,
        isAuthenticated: localStorage.getItem('token') !== null,
        user: JSON.parse(localStorage.getItem('user')) || null,
        role: localStorage.getItem('role') || null, // Add the 'role' field
        loading: false, // Add loading state
    }),

    actions: {
        async login(email, password, phoneNumber, school_id) {
            try {
                this.loading = true;
                const response = await axios.post(
                    'http://127.0.0.1:8000/api/admin/login-student', {
                        email: email,
                        password: password,
                        phone: phoneNumber,
                        school_id: school_id,
                    }
                );
                const { token, user, role } = response.data;
                this.token = token;
                this.isAuthenticated = true;
                this.user = user; // Save user information
                this.role = role;
                localStorage.setItem('role', JSON.stringify(role)); // Store 'role' in localStorage
                localStorage.setItem('token', JSON.stringify(token));
                localStorage.setItem('user', JSON.stringify(user)); // Save user information in localStorage
                this.loading = false;
                return true; // Login successful


            } catch (error) {
                console.error('Login failed:', error);
                return false; // Login failed
            }
        },
        logout() {
            this.token = null;
            this.isAuthenticated = false;
            this.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user'); // Remove user information from localStorage
            setTimeout(function() {
                router.push('/login');
            }, 2000);
        },
    },
});