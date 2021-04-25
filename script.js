const quizData = [
    {
        question: 'You are at an intersection and see a pedestrian crossing the road into which you are turning. You must:',
        a:'Give the way to pedestrian',
        b:'Sound your horn to warn the pedestrian to get out of the way',
        c:'Swerve around the pedestrian to avoid hitting them',
        answer:'a'
    },
    {
        question:'Riders may make themselves more noticeable to car drivers by:',
        a:'Riding to the side of cars all the time',
        b:'Riding closely behind the cars',
        c:'Continuously blow the horn',
        answer: 'a'
    },
    {
        question:'How old must you be to obtain a learner rider licence?',
        a:16,
        b:14,
        c:18,
        answer:'a'
    }
];


const answerEle = document.querySelectorAll('.answer'); // select all radio buttons
const quiz = document.getElementById('quiz');
const quest = document.getElementById('quest');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const submit_btn = document.getElementById('submit');

var current_question =0;
var score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();

    quest.innerHTML = quizData[current_question]['question'];
    optionA.innerHTML= quizData[current_question]['a'];
    optionB.innerHTML= quizData[current_question]['b'];
    optionC.innerHTML= quizData[current_question]['c'];
}

function getSelected(){
    let answer = undefined;
    answerEle.forEach((ans)=>{
        if(ans.checked){
            answer = ans.id;
        }
    });
    return answer;
}

function deselectAnswer(){
    answerEle.forEach(function(ans){
        ans.checked = false;
    });
}


submit_btn.addEventListener('click',function(){
   const answer = getSelected();
   console.log(answer);
   if(answer){
       if(answer===quizData[current_question].answer){
           score++;
       }
       current_question++;
       if(current_question<quizData.length){
           loadQuiz();
       }
       else{
           quiz.innerHTML = `<h2> Your score is ${score}/${quizData.length}</h2>
           <button onclick="location.reload()" class="btn">Reload</button>`;
       }
   }
    
});