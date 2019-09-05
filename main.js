$(document).ready(function(){

    var val1 = "";
    var val2 = "";
    var actionVal = "";
    var takenItems = [];
    var string = "";

    
    $("body").on({
        keypress: function(event){
            var key = event.keyCode;
            var character = String.fromCharCode(key);
            if((key >=48 && key <= 57) || (key >= 96 && key <= 105)){
                $(".screen").append(character);
            }
            if(character){
                string = string.slice(0, string.length - 1);
                //  Start of operators
                if (event.which == 43) {
                string += "+";
                actionClick(string);
                }else if (event.which == 45) {
                string += "-";
                actionClick(string);
                }else if (event.which == 42) {
                string += "*";
                actionClick(string);
                } else if (event.which == 47) {
                string += "/";
                actionClick(string);
                }else if(event.which == 13){
                    takenItems.push($(".screen").text());
                    equalsClick();
                    // console.log(takenItems)
                }
            }
        },
        keyup: function(event){
            string = string.slice(0, string.length - 1);
            if(event.keyCode == 8) {
            clear = "C";
            clearMyInput(clear);
            }
        }
    })

    //button clicks
    $(".button").on("click", function(){
        var buttonPressed = $(this).val();
            $(".screen").append(buttonPressed);
    })

    //action clicks
    $(".actions").on("click", function(){
        // console.log(takenItems)
        actionClick($(this).attr('data_value'))
        
    })

    //equals click
    $(".equals").on("click",function(){
        takenItems.push($(".screen").text());
        // console.log(takenItems)
        equalsClick();
    })

    //clear click
    $(".clear").on("click",function(){ 
        var clear = $(".clear").val();
        clearMyInput(clear);
        // console.log(takenItems)
    })

    function checkValues(myArr){
        for(let i = 0; i < myArr.length; i++){
            // if(typeof myArr[i] === "number" && !Number.isNaN(myArr[i])){
            //     console.log(myArr[i])
            // }
            console.log(typeof myArr[i]);
        }
    }

    function equalsClick(){
        var arrItems = [];
        val1 = takenItems[0];
        arrItems.push(val1);
        actionVal = takenItems[takenItems.length-2];
        arrItems.push(actionVal);
        val2 = takenItems[takenItems.length-1];
        arrItems.push(val2);
        console.log(arrItems);
        checkValues(arrItems)
        var answer = actions(val1,actionVal,val2);
        $(".screen").html(answer);
    }

    function actionClick(action){
        if($(".screen").html() != ""){
            takenItems = [];
            takenItems.push($(".screen").html());
            $(".screen").text("");
            // console.log(takenItems);
            } 
        var clickedVal = $(".actions").html(); 
        if(clickedVal = action){
            takenItems.push(action);
            // console.log(takenItems)
        }   
        
    }

    function clearMyInput(a){
        if(a === "C"){
            $(".screen").html("");
            takenItems = [];
        }
    }
    function actions(num1,action,num2){
        var a = parseInt(num1);
        var b = parseInt(num2);
           if(action =="+"){
               return a+b;
            }
            else if(action =="-"){
                return a-b;
            }
            else if(action =="*"){
                return a*b;
            }
            else if(action =="/"){
                return a/b;
            }
    } 
    


})
