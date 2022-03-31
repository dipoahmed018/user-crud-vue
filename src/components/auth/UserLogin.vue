<script setup>
import { inject, reactive, watch } from 'vue';
import EmailVue from '../parts/form/Email.vue';
import PasswordVue from '../parts/form/Password.vue';
import SubmitVue from '../parts/form/Submit.vue';
import CbuttonVue from "../parts/Cbutton.vue";
import Cbutton from "../parts/Cbutton.vue";
import Loading from "../parts/Loading.vue";

const login_info = reactive({ email: "", password: "" })
const user = inject('user')

const updateLoginInfo = (e) => {
    login_info[e.target.name] = e.target.value
}

const login = (e) => {
    e.preventDefault();
    user.userSignin(login_info.email, login_info.password)
}

watch(user, () => {
    console.log('hello world')
})
</script>

<template>
    <div v-if="user.data == 'loading'" class="loading">
        <Loading />
    </div>

    <div v-if="user.data !== 'loading'" class="container mx-auto p-8 flex">
        <div class="max-w-md w-full mx-auto">
            <h1 class="text-4xl text-center mb-12 font-thin">Log in</h1>

            <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div class="p-8">
                    <form method="POST" class action="#" @submit="login">
                        <EmailVue :change="updateLoginInfo" value />
                        <PasswordVue :change="updateLoginInfo" value />
                        <SubmitVue text="Login" />
                    </form>
                </div>

                <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                    <Cbutton text="Login as an Admin" />
                    <!-- <a href="#" class="font-medium text-indigo-500">Create account</a>

                    <a href="#" class="text-gray-600">Forgot password?</a>-->
                </div>
            </div>
        </div>
    </div>
</template>