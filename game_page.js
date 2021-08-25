player_1_name = localStorage.getItem("math_1");
player_2_name = localStorage.getItem("math_2");
player_1_score = 0;
player_2_score = 0;
document.getElementById("math_player_1").innerHTML = player_1_name+":";
document.getElementById("math_player_2").innerHTML = player_2_name+":";
document.getElementById("math_score_1").innerHTML = player_1_score;
document.getElementById("math_score_2").innerHTML = player_2_score;
document.getElementById("math_question").innerHTML = "Question turn-"+player_1_name;
document.getElementById("math_answer").innerHTML = "Answer turn-"+player_2_name;
function send(){
    number_1 = document.getElementById("math_input_1").value;
    number_2 = document.getElementById("math_input_2").value;
    real_answer = parseInt(number_1) * parseInt(number_2);
    question_answer = "<h4>Q. "+number_1+" X "+number_2 +"</h4>";
    correct_input = "<br>Answer : <input type='text' id='check_box'>";
    check_button = "<br><br><button onclick='check()' class='btn btn-success'>Check</button>";
    row = question_answer + correct_input + check_button;
    document.getElementById("output").innerHTML += row;
    document.getElementById("math_input_1").value = "";
    document.getElementById("math_input_2").value = "";
}
question_turn = "player_1";
answer_turn = "player_2";
function check(){
    get_word = document.getElementById("check_box").value;
    if(get_word == real_answer){
        if(answer_turn == "player_1"){
            player_1_score = player_1_score+1;
            document.getElementById("math_score_1").innerHTML = player_1_score;
        }
        else{
            player_2_score = player_2_score+1;
            document.getElementById("math_score_2").innerHTML = player_2_score;
        }
    }
    if(question_turn == "player_1"){
        question_turn = "player_2";
        document.getElementById("math_question").innerHTML = "Question Turn:"+player_2_name;
    }
    else{
       question_turn = "player_1";
       document.getElementById("math_question").innerHTML = "Question Turn:"+player_1_name; 
    }
    if(answer_turn == "player_1"){
        answer_turn = "player_2";
        document.getElementById("math_answer").innerHTML = "Answer Turn:"+player_2_name;
    }
    else{
        answer_turn = "player_1";
        document.getElementById("math_answer").innerHTML = "Answer Turn:"+player_1_name;
    }
    document.getElementById("output").innerHTML = "";
}