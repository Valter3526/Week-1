const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age")
const statusSpan = document.querySelector("#status")
const btnUpdateProfile = document.querySelector("#updateBtn");

const isSpider = confirm("Are you a spider?");

if(isSpider === true){
    console.log("Welcome to Estonia!");
}
else{
    profileImage.src = "images/image1.jpg";
    firstNameSpan.innerHTML = "Batman";
    ageSpan.innerHTML = "45";
    statusSpan.innerHTML = "Bat";
}

btnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/image3.webp";
    firstNameSpan.innerHTML = "Thanos";
    ageSpan.innerHTML = "500";
    statusSpan.innerHTML = "Alien";
});