import { defineStore } from "pinia";
import { ref,computed } from "vue"

export const DarkLight=defineStore("dark",()=>{
    
    const IsDark=ref(localStorage.getItem('IsDark')??'');
    
    const getmode=computed(()=>IsDark.value);

    function setMode(v){
        IsDark.value=v;
        localStorage.setItem('IsDark',v);
    };

    function suppMode(){
        localStorage.removeItem('IsDark');
    }

    return{IsDark,getmode,setMode,suppMode}
    
})