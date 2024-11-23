import { defineStore } from "pinia";
export const useStore = defineStore('store',{
    state:()=>({
        message:[] as string[]
    }),
    getters:{
        getMessage:(state)=>state.message
    },
    actions:{
        addMessage(value:any){
            this.message = [...this.message,value]
        },
        delMessage(val:any){
            this.message.splice(val,1)
        }
    },
    persist:true
})