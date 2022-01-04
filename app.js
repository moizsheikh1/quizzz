var displayQuestion=document.getElementById("displayquestion")
var answerparent =document.getElementById("answerparent")
var totalquestionnumber=document.getElementById("totalquestionnumber")
var currentquestionnumber=document.getElementById("currentquestionnumber")
var questiondisplay=document.getElementById("questiondisplay")
var resultdisplay=document.getElementById("resultdisplay")

 var indexvalue=0
 var markeee =0
var questions=[
{
    question:"HTML STAND FOR ___________   ",
    options:["HYPERTEXT MARKUP LANGUAGE" ,"HTML","HTML","HTML"] ,
    correctAns: "HYPERTEXT MARKUP LANGUAGE",

},


{
    question:"CSS STAND FOR ___________   ",
    options:["Cascading Style Sheets" ," Style SheetsCascading","Sheets Cascading Style ","Cascading Sheets Style "] ,
    correctAns: "Cascading Style Sheets",
    
},


{
    question:"JS STAND FOR ___________   ",
    options:["JAVA SCRIPT" ,"HTML","HTML","HTML"] ,
    correctAns: "JAVA SCRIPT",
    
},

{
    question:"RAM STAND FOR ___________   ",
    options:["RANDOM ACCESS MEMORY" ,"HTML","HTML","HTML"] ,
    correctAns: "RANDOM ACCESS MEMORY",
    
},

{
    question:"ROM STAND FOR ___________   ",
    options:["READ ONLY MEMORY" ,"HTML","HTML","HTML"] ,
    correctAns: "READ ONLY MEMORY",


},
{
    question:"CPU STAND FOR ___________   ",
    options:["CENTRAL MEMORY UNIT" ,"HTML","HTML","HTML"] ,
    correctAns: "CENTRAL MEMORY UNIT",

},

];

function playquestion(){
    displayQuestion.innerHTML=questions[indexvalue].question;
    for(var i=0 ;i<questions[indexvalue].options.length;i++){
     
        answerparent.innerHTML+=   `  <div class="col-md-6">
        <button onclick="checkquestion('${questions[indexvalue].options[i]}','${questions[indexvalue].correctAns}')" type="button" o class="my-5 btn bts btn-outline-dark">${questions[indexvalue].options[i]}</button>
    </div>` 
    }
    totalquestionnumber.innerHTML=questions.length;
    currentquestionnumber.innerHTML=indexvalue+1
}
playquestion();
function nextquestion(){
    answerparent.innerHTML=""
    if (indexvalue+1==questions.length){
resultdisplay.style.display='block'
questiondisplay.style.display='none'
        alert("QUESTION END")
    }else{
        indexvalue++;
        playquestion();
        
    }
  
}
function checkquestion(optionvalue,correctvalue){
if (optionvalue==correctvalue){
    markeee++;
console.log(markeee)
}   
nextquestion()
}
