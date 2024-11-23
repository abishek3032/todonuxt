<script setup>
    import { useStore } from '~/store/store';
    const router = useRouter()
    const store = useStore()
    const msg = ref('')
    const handleSubmit = () => {
        if(msg.value.length > 1){
            store.addMessage(msg)
            router.push('/')
        }
    }
    useSeoMeta({
        title:'Input for TODO',
        description:'All your todos here!',
        keywords:'nuxt, todoapp',
        publisher:'Abishek'
    })
</script>
<template>
    <dir class="px-[5%]">
        <form @submit.prevent="handleSubmit">
            <input type="text" class="border-b-2 border-black w-full outline-none text-2xl" v-model="msg"/>
            <button class="mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
        </form>
    </dir>
</template>