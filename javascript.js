 var maindiv = document.getElementById("main")

 function print(data){
    var board_size = data
    var label_element = document.createElement("label")
    label_element.classList.add("label-grid")
    for(let i=0; i<data; i++){
        if(i%2 == 0){
            for(let j=0; j<data; j++){
                if(j%2 == 0){
                    label_element.innerHTML +="*"
                }else{
                    label_element.innerHTML +="#"
                }
            }
        }else{

            for(let j=0; j<data; j++){
                if(j%2 == 0){
                    label_element.innerHTML +="#"
                }else{
                    label_element.innerHTML +="*"
                }
            }
        }
        newLine(label_element)
    }
    maindiv.append(label_element)

    var header = document.createElement("h1")
    header.innerHTML += `Chess Board (${board_size} X ${board_size})`
    maindiv.append(header)
 }
 function newLine(label_element){
    var newline = document.createElement("br")
    label_element.append(newline)
 }

 print(6);