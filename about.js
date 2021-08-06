console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
document.getElementById("ducky").addEventListener("mouseover", ()=>{
	alert("YOU'RE SPECTDUCKULAR!!!");
})