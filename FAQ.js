const ans = document.querySelectorAll('.toggle');


ans.forEach((select)=>{
     select.addEventListener('click',()=>{
       select.parentNode.classList.toggle('active');
     })
});