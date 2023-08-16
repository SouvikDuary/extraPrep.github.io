var quizDB = [
    {
        question: "The basic neuronal signaling unit is-",
        a: "the equilibrium potential",
        b: "the action potential",
        c: "the resting potential",
        d: "the supernormal period",
        ans: "ans2"
    },
    {
        question: "The somatic nervous system innervates the-",
        a: "blood vessels of the skin",
        b: "blood vessels of the brain",
        c: "muscles of the heart",
        d: "muscles of the body wall",
        ans: "ans4"
    },
    {
        question: "A sign of an upper-motor-neuron lesion in the spinal cord is-",
        a: "severe muscle atrophy",
        b: "hyperactive deep tendon reflexes",
        c: "flaccid paralysis",
        d: "absence of pathologic reflexes",
        ans: "ans2"
    },
    {
        question: "The spinal subarachnoid space normall",
        a: "lies between the pachymeninx and the arachnoid",
        b: "lies between the pia and the arachnoid",
        c: "ends at the cauda equina",
        d: "communicates with the peritoneal space",
        ans: "ans2"
    },
    {
        question: "The dorsal nucleus (of Clarke) in the spinal cord",
        a: "receives contralateral input from dorsal root ganglia",
        b: "terminates at the L2 segment",
        c: "terminates in the ipsilateral cerebellum",
        d: "receives fibers from the external cuneate nucleus",
        ans: "ans3"
    },
    {
        question: "Second-order neurons in the dorsal column system",
        a: "convey information about pain and temperature",
        b: "cross within the lemniscal decussation",
        c: "cross within the pyramidal decussation",
        d: "convey well-localized sensations of fine touch, vibration.",
        ans: "ans4"
    },
    {
        question: "Signs of upper-motor-neuron lesions include",
        a: "Babinski's sign",
        b: "hypoactive deep tendon reflexes and hyporeflexia",
        c: "spastic paralysis",
        d: "severe muscle atrophy",
        ans: "ans2"
    },
    {
        question: "The spinal nerve roots",
        a: "exit below the corresponding vertebral bodies in the cervical spine",
        b: "exit above the corresponding vertebral bodies in the cervical spine",
        c: "exit above the corresponding vertebral bodies in the lower spine",
        d: "exit below the corresponding vertebral bodies in the lower spine",
        ans: "ans3"
    },
    {
        question: "The dorsal column system of one side of the spinal cord",
        a: "is essential for normal two-point discrimination on that side",
        b: "arises from both dorsal root ganglion cells and dorsal horn neurons",
        c: "synapses on neurons of the ipsilateral gracile andcuneate nuclei",
        d: "consists primarily of large, myelinated, rapidly conducting axons",
        ans: "ans3"
    },
    {
        question: "If the oculomotor nerve (III) is sectioned, each of the following may result except for",
        a: "partial ptosis",
        b: "abduction of the eyeball",
        c: "dilation of the pupil",
        d: "impairment of lacrimal secretion",
        ans: "ans4"
    },
];

var question = document.querySelector('.question');
var option1 = document.querySelector('#option1');
var option2 = document.querySelector('#option2');
var option3 = document.querySelector('#option3');
var option4 = document.querySelector('#option4');
var submit = document.querySelector('#submit');

var answers = document.querySelectorAll('.answer');

var showScore = document.querySelector('#showScore');

var questionCount = 0;
var score = 0;

function loadQuestion(){

    var questionList = quizDB[questionCount];

   question.innerHTML = questionList.question;

   option1.innerHTML = questionList.a;
   option2.innerHTML = questionList.b;
   option3.innerHTML = questionList.c;
   option4.innerHTML = questionList.d;

}
loadQuestion();

function getCheckAnswer (){
    var answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
}

function deSelectAll() {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

function removeItem() {
    document.getElementById('submit').innerHTML = "";
    document.getElementById('submit').style.display = "none";
}

function gobackHome() {
        window.location.replace('../Home.html','parent');
}

submit.addEventListener('click', function() {
    var checkedAnswer  = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans) {
        score++;
    }
    questionCount++;

    deSelectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    } else{
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()"> Try Again </button>
        <button class="btn" onclick="gobackHome()"> Go Back </button>
        `;
        showScore.classList.remove('scoreArea');
        removeItem()
    }
});