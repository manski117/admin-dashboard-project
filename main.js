// function click(){
//     alert("the button triggers a function")
// }

// document.getElementById("btn1").onclick = click();


function press(clickedButton){
    alert(clickedButton.id);
    //can detect the id of a button to return its name
    //can also grab the id of a button and use it for conditional statements
    if (clickedButton.id == "btn1"){
        alert('true');
    } else{
        alert("something messed up");
    } 

    
};