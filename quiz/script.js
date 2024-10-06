// Array of all questions
let questions = [
    {
        numb: 1,
        question: "What do you think the atmosphere of a gas giant like Kepler-33 d might be like? How does it differ from Earth’s atmosphere? ",
        answer: "Thick and composed mainly of hydrogen and helium",
        options: [
            "Thin and mostly nitrogen",
            "Thick and composed mainly of hydrogen and helium",
            "Rich in oxygen and water vapor",
            "Similar to Earth’s atmosphere"
        ]
    },
    {
        numb: 2,
        question: "Since Kepler-33 d has a shorter orbital period (29.6 days), how do you think its seasons and climate might differ from those on Earth?",
        answer: "It experiences no seasons at all",
        options: [
            "It has more extreme seasons due to rapid orbiting",
            "Its seasons are longer than Earth’s",
            "Its climate is identical to Earth's",
            "It experiences no seasons at all"
        ]
    },
    {
        numb: 3,
        question: "Considering that Kepler-33 d is a gas giant and not considered habitable, what characteristics would a planet need to have in order to support life?",
        answer: "A solid surface and liquid water",
        options: [
            "A thick atmosphere and high gravity",
            "High temperatures and strong radiation",
            "A solid surface and liquid water",
            "No atmosphere at all"
        ]
    },
    {
        numb: 4,
        question: "What is the primary characteristic of TRES-5b’s atmosphere?",
        answer: " It is mostly composed of Hydrogen and Helium",
        options: [
            "Its solid surface",
            "It is extremely hot and has clouds of vaporized metals.",
            "It is mostly composed of Hydrogen and Helium",
            "It has a breathable atmosphere."
        ]
    },
    {
        numb: 5,
        question: "What are some advantages and challenges of living in a solar system with multiple planets, like the Kepler-33 system? How might this affect the potential for life? ",
        answer: " More resources but increased competition",
        options: [
            "No advantages or challenges",
            "More resources but increased competition",
            "Only one habitable planet can exist",
            "Planets would block each other’s sunlight"
        ]
    },
    {
        numb: 6,
        question: "What type of planet is Kelt-3b?",
        answer: "Gas Giant",
        options: [
            "Terrestial",
            "Super Earth",
            "Gas Giant",
            "Ice Giant"
        ]
    },
    {
        numb: 7,
        question: "Kelt-3b orbits which type of star?",
        answer: "K-type Star",
        options: [
            "K-type Star",
            "Blue Super Giant",
            "G-type Star",
            "Red Dwarf"
        ]
    },
    {
        numb: 8,
        question: "How far is Kelt-3b from Earth? ",
        answer: "54 Lightyears",
        options: [
            "20 Lightyears",
            "54 Lightyears",
            "100 Lightyears",
            "200 Lightyears"
        ]
    },
    {
        numb: 9,
        question: "Which method was primarily used to discover Kelt-3b?",
        answer: "Transit Method",
        options: [
            "Direct Imaging",
            "Transit Method",
            "Radial Velocity",
            "Gravitational Microlensing"
        ]
    },
    {
        numb: 10,
        question: "What distinguishes Kepler-20c from typical terrestrial planets?",
        answer: "Its larger size and mass",
        options: [
            "Its solid surface",
            "Its proximity to Earth",
            "Its larger size and mass",
            "Its atmosphere composition"
        ]
    },
    {
        numb: 11,
        question: "What impact does the distance of Kepler-20c from Earth have on our ability to study it?",
        answer: "It limits the detail of observations we can make.",
        options: [
            "It makes it easier to send missions.",
            "It limits the detail of observations we can make.",
            "It has no effect on our studies.",
            "It increases the likelihood of finding life."
        ]
    },
    {
        numb: 12,
        question: "What type of planet is Kepler-89d classified as?",
        answer: "Super Earth",
            options: [
                "Terrestial",
                "Super Earth",
                "Gas Giant",
                "Ice Giant"
            ]
    },
    {
        numb: 13,
        question: "What is a unique feature of the Kepler-89 system? ",
        answer: "It has multiple planets in a compact orbit.",
        options: [
            "It has no other planets.", 
            "It includes a planet with rings.", 
            "It has multiple planets in a compact orbit.", 
            "It is the farthest system discovered." 
        ]
    },
    {
        numb: 14,
        question: "What is notable about the atmosphere of WASP-1b?",
        answer: " It is extremely hot and has clouds of vaporized metals.",
        options: [
            "Its solid surface",
            "It is extremely hot and has clouds of vaporized metals.",
            " It is mostly composed of nitrogen",
            "It has a breathable atmosphere."
        ]
    },
];

// Function to shuffle and select 6 random questions
function selectRandomQuestions() {
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random()); // shuffle questions
    return shuffledQuestions.slice(0, 6); // select first 6 shuffled questions
}

// Use the selected 6 random questions for the quiz
let selectedQuestions = selectRandomQuestions();

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

// Selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// Start Quiz button clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); // Show info box
}

// Exit Quiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Hide info box
}

// Continue Quiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Hide info box
    quiz_box.classList.add("activeQuiz"); // Show quiz box
    showQuetions(0); // Calling showQuestions function
    queCounter(1); // Passing 1 parameter to queCounter
    startTimer(15); // Calling startTimer function
    startTimerLine(0); // Calling startTimerLine function
}

// Restart Quiz button clicked
const restart_quiz = result_box.querySelector(".buttons .restart");
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); // Show quiz box
    result_box.classList.remove("activeResult"); // Hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    selectedQuestions = selectRandomQuestions(); // Select new random questions
    showQuetions(que_count); // Calling showQuestions function
    queCounter(que_numb); // Passing que_numb value to queCounter
    clearInterval(counter); // Clear counter
    clearInterval(counterLine); // Clear counterLine
    startTimer(timeValue); // Calling startTimer function
    startTimerLine(widthValue); // Calling startTimerLine function
    timeText.textContent = "Time Left"; // Change the text of timeText to Time Left
    next_btn.classList.remove("show"); // Hide the next button
}

// Quit Quiz button clicked
const quit_quiz = result_box.querySelector(".buttons .quit");
quit_quiz.onclick = () => {
    window.location.reload(); // Reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Next Question button clicked
next_btn.onclick = () => {
    if(que_count < selectedQuestions.length - 1){ // If question count is less than total question length
        que_count++; // Increment the que_count value
        que_numb++; // Increment the que_numb value
        showQuetions(que_count); // Calling showQuestions function
        queCounter(que_numb); // Passing que_numb value to queCounter
        clearInterval(counter); // Clear counter
        clearInterval(counterLine); // Clear counterLine
        startTimer(timeValue); // Calling startTimer function
        startTimerLine(widthValue); // Calling startTimerLine function
        timeText.textContent = "Time Left"; // Change the timeText to Time Left
        next_btn.classList.remove("show"); // Hide the next button
    } else {
        clearInterval(counter); // Clear counter
        clearInterval(counterLine); // Clear counterLine
        showResult(); // Calling showResult function
    }
}

// Show questions and options from array
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");

    // Create a new span and div tag for question and options and passing the value using array index
    let que_tag = '<span>' + selectedQuestions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + selectedQuestions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + selectedQuestions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + selectedQuestions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + selectedQuestions[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag; // Adding new span tag inside que_tag
    option_list.innerHTML = option_tag; // Adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // Set onclick attribute to all available options
    for(i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// User selects an option
function optionSelected(answer){
    clearInterval(counter); // Clear counter
    clearInterval(counterLine); // Clear counterLine
    let userAns = answer.textContent; // Get user selected option
    let correctAns = selectedQuestions[que_count].answer; // Get correct answer from array
    const allOptions = option_list.children.length; // Get all option items

    if(userAns == correctAns){ // If user selected option is equal to array's correct answer
        userScore += 1; // Increment score
        answer.classList.add("correct"); // Add green color to correct selected option
    } else {
        answer.classList.add("incorrect"); // Add red color to incorrect selected option
    }
    for(i = 0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); // Once user selects an option, disable all options
    }
    next_btn.classList.add("show"); // Show the next button
}

// Show result function
function showResult() {
    info_box.classList.remove("activeInfo"); // Hide info box
    quiz_box.classList.remove("activeQuiz"); // Hide quiz box
    result_box.classList.add("activeResult"); // Show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) { // If user scored more than 3
        let scoreTag = '<span>and congrats! 🎉, You got <p>' + userScore + '</p> out of <p>' + selectedQuestions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else if (userScore > 1) { // If user scored more than 1
        let scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + selectedQuestions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else { // If user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>' + userScore + '</p> out of <p>' + selectedQuestions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

// Start timer function
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; // Change the value of timeCount with time value
        time--; // Decrement the time value
        if (time < 9) { // If timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; // Add a 0 before the time value
        }
        if (time < 0) { // If timer is less than 0
            clearInterval(counter); // Clear counter
            timeText.textContent = "Time Off"; // Change the time text to Time Off
            const allOptions = option_list.children.length; // Get all option items
            let correctAns = selectedQuestions[que_count].answer; // Get correct answer from array
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); // Once user selects an option, disable all options
            }
            next_btn.classList.add("show"); // Show the next button
        }
    }
}

// Start timer line function
function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1; // Increment time value
        time_line.style.width = time + "px"; // Increase time_line width
        if (time > 549) { // If time value is greater than 549
            clearInterval(counterLine); // Clear counterLine
        }
    }
}

// Question counter function
function queCounter(index){
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + selectedQuestions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; // Adding new span tag inside bottom_ques_counter
}
