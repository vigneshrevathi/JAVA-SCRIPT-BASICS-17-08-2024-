function addlist(){
    var value = document.getElementById("input").value;
    if(value === ''){
        document.getElementById("error").innerHTML = "please enter the value"
    } else{
        document.getElementById("items-wrapper").innerHTML += "<h1>"+ value + "</h1>"
        document.getElementById("input").value = ''
        document.getElementById("error").innerHTML = ''

    }   
}

function addnumber(){
    var value = document.getElementById("inputnumber").value;
    if(value === '3'){
        document.getElementById("item-wrapper").innerHTML += "<h1>" + value + "</h1>"
        document.getElementById("inputnumber").value = ''
    }
    else{
        document.getElementById("otherwise").innerHTML = "PLEASE PROVIDE THE CORRECT NUMBER"
        
    }
}

function checknumber(){
    var value = document.getElementById("getinput").value;
    if(parseInt(value) <= 18){
        document.getElementById("container").innerHTML = "YOU ARE NOT ELIGIBLE FOR VOTE"
    }else{
         document.getElementById("container").innerHTML = "YOU ARE  ELIGIBLE FOR VOTE"
    }
}

function comparenumber(){
    var value1 = document.getElementById("input1").value;
    var value2 = document.getElementById("input2").value;
    if(value1 ===  value2){
        document.getElementById("container1").innerHTML = "BOTH ARE SAME NUMBERS"
    }
    else{
        document.getElementById("container2").innerHTML = "BOTH ARE NOT SAME NUMBERS PLEASE ENTER THE SAME NUMBERS"
    }

}