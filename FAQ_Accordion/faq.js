// Select Dom [faq] item
const faqs = document.querySelectorAll(".faq-item");

// Check loop for item are automatically closed.
faqs.forEach((faq)=> {
    faq.addEventListener("toggle", ()=>{
        if(faq.open){
            faqs.forEach((item)=>{
                if(item !== faq){
                    item.removeAttribute("open");
                }
            });
        }
    });
});