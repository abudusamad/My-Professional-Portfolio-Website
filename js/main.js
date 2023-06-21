const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSection = document.querySelector(".main-content");

function pageTransition() {
	//Avtive button cllick
	for (let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener("click", function (e) {
			let currentBtn = document.querySelectorAll('.active-btn');
			currentBtn[0].className = currentBtn[0].className.replace(
				' active-btn','');
            this.classList += ' active-btn';
		});
	}

    //SEction Active
    allSection.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if(id){
            //remove other class from the list
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active'); 

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');  
            })
        }
        const element = document.getElementById(id)
        element.classList.add('active');
    })

    //theme buttons
   const themeBtn = document.querySelector('.theme-btn');
   themeBtn.addEventListener('click',()=>{
    let element =document.body;
    element.classList.toggle('light-theme');
   })
}

pageTransition();