const select = document.querySelector("#theme-select");
const toggle = document.querySelector(".toggle");


select.addEventListener("change", ()=>{
    if(select.value === "dark"){
        toggle.classList.add('dark');
        toggle.classList.remove("light");
    }
     else if(select.value === "light"){
        toggle.classList.add('light');
        toggle.classList.remove("dark");
    }
})