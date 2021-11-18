

const name = document.getElementById("name");


const button = document.getElementById("button");

button.addEventListener("click", function(){
    name.value = name.value.toUpperCase()
});

