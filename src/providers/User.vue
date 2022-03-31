<script setup>
import { provide, reactive, inject, watchEffect, watch } from 'vue';
import router from '../router';
import { useCookies } from 'vue3-cookies';

const call = inject('api');
const { cookies } = useCookies()
const token = cookies?.get('token')

const userSignin = async (email, password) => {
    let info = await call('/signin', 'POST', JSON.stringify({ email, password }), {
        "Content-Type": "application/json",
        'X-CSRF-TOKEN': ""
    })

    if (info.ok) {
        info = await info.json()
        user.data = info.data.user
        user.token = info.data.token
        cookies.set('token', info.data.token)
    }
}

const adminSignin = async (email, password) => {
    let info = await call('/signin/admin', 'POST', JSON.stringify({ email, password }), {
        "Content-Type": "application/json",
        'X-CSRF-TOKEN': ""
    })

    if (info.ok) {
        info = await info.json()
        user.data = info.data.user
        user.token = info.data.token
        cookies.set('token', info.data.token)
    }
}

const logout = async () => {
    let info = await call('/logout', "POST")
    if (info.ok) {
        user.data = undefined
        user.token = undefined
        cookies.remove('token')
    }
}

const user = reactive({ data: 'loading', token: undefined, userSignin, adminSignin, logout })

const unwatch = watchEffect(async () => {
    const info = await call('/user', 'get', {}, { 'Authorization': `Bearer ${token}` })
    user.data = info.ok ? info.data : undefined
})
unwatch()

console.log(user.data, 'out')
watch(user, () => {
    console.log(user.data, 'hello world')
    if(user.data) {
        router.push(`/dashboard/${user.data.is_admin === 1 ? 'admin' : 'user'}`)
    }
})


provide('user', user)
</script> 

 <template>
    <slot />
</template> 

