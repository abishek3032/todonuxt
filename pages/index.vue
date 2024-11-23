<script setup>
import { useStore } from '~/store/store';
    const store = useStore()
    const handleDelete = (val) => {
        store.delMessage(val)
    }
</script>
<template>
        <div class="px-[5%] pt-3">
            <div v-if="store.getMessage.length <= 0">
                <p class="text-6xl">add sm</p>
            </div>
            <TransitionGroup name="list" v-else>
                <ul v-for="(s,index) in store.getMessage" :key="index">
                    <li class="p-3 mb-3 shadow rounded bg-white flex justify-between items-center">
                        <p class="text-xl">{{s}}</p>
                        
                        <button @click="handleDelete(index)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </TransitionGroup>
        </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
.list-enter-active,.list-leave-active{
    transition: opacity 0.5s ease;
}
.list-enter-from, .list-leave-to{
    opacity: 0;
}
</style>