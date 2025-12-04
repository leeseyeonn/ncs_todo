const checkBox = document.querySelectorAll('.check img')
console.log(checkBox)


checkBox.forEach(btn => {
    btn.addEventListener('click', () => {

        if (btn.src.includes('checkbox_off')) {
            btn.src = "./images/checkbox_on.svg";  
        } else {
            btn.src = "./images/checkbox_off.svg";  
        }

    });
});


const editBtn = document.querySelector('.edit')
const addBox = document.querySelector('.add_box')

console.log (editBtn,addBox)

editBtn.addEventListener('click',()=>{
    addBox.classList.toggle('active')
})