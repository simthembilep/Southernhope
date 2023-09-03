const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mysrc = myImage.getAttribute("src");
    if (mysrc === "images/GrandFather.JPG"){
        myImage.setAttribute("src", "images/Father.jpg");
    
 }else{
        myImage.setAttribute("src", "images/son.jpg");
    }

};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername(){
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Amagconi are cool,${myName}`;

}
if (!localStorage.getItem("name")) {
    setUsername();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Amagconi are cool, ${storedName}`;
    
}