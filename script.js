const questionsPool = [
    {
        question: "What is the minimum age requirement to obtain a New Jersey driver's license?",
        options: ["16", "17", "18", "21"],
        answer: "17"
    },
    {
        question: "What is the speed limit in a school zone, unless otherwise posted?",
        options: ["15 mph", "20 mph", "25 mph", "30 mph"],
        answer: "25 mph"
    },
    {
        question: "How far should you park from a stop sign?",
        options: ["10 feet", "25 feet", "50 feet", "100 feet"],
        answer: "50 feet"
    },
    {
        question: "What does a yellow light mean?",
        options: ["Stop", "Go", "stop before entering the intersection unless too close to stop safely", "Speed up to clear the intersection"],
        answer: "stop before entering the intersection unless too close to stop safely"
    },
    {
        question: "At what Blood Alcohol Concentration (BAC) level is it illegal for individuals over 21 to drive in New Jersey?",
        options: ["0.08%", "0.10%", "0.05%", "0.02%"],
        answer: "0.08%"
    },
    {
        question: "When are you allowed to use a cell phone while driving in New Jersey?",
        options: ["Always", "Never", "Only when using hands-free devices", "Only in emergencies"],
        answer: "Only in emergencies"
    },
    {
        question: "What is the hand signal for making a right turn?",
        options: ["Left hand and arm upward", "Left hand straight out", "Left hand out and down", "Right hand out and up"],
        answer: "Left hand and arm upward"
    },
    {
        question: "How many feet away from a fire hydrant must you park?",
        options: ["5 feet", "10 feet", "15 feet", "20 feet"],
        answer: "10 feet"
    },
    {
        question: "What should you do if your vehicle starts to skid?",
        options: [
            "Steer into the direction of the skid",
            "Brake immediately",
            "Steer in the opposite direction of the skid",
            "Accelerate"
        ],
        answer: "Steer into the direction of the skid"
    },
    {
        question: "When should you use your headlights?",
        options: [
            "Only at night",
            "When visibility is 500 feet or less",
            "When driving in the city",
            "When following another vehicle"
        ],
        answer: "When visibility is 500 feet or less"
    },
    {
        question: "What is the penalty for driving on a suspended license in New Jersey?",
        options: [
            "Fine of $100",
            "Fine of $200",
            "Fine of $500, up to 6 months additional suspension, and potential jail time",
            "No penalty"
        ],
        answer: "Fine of $500, up to 6 months additional suspension, and potential jail time"
    },
    {
        question: "When parking downhill on a street with a curb, your vehicle's wheels should be:",
        options: [
            "Turned away from the curb",
            "Parallel to the curb",
            "Turned toward the curb",
            "Pointed straight ahead"
        ],
        answer: "Turned toward the curb"
    },
    {
        question: "What is the legal speed limit on a non-posted rural roadway?",
        options: ["35 mph", "45 mph", "50 mph", "25 mph"],
        answer: "50 mph"
    },
    {
        question: "What is the implied consent law?",
        options: [
            "Drivers must consent to breath tests when requested by law enforcement",
            "Drivers can refuse any test if they choose",
            "Drivers must have car insurance",
            "Drivers are allowed to park anywhere in an emergency"
        ],
        answer: "Drivers must consent to breath tests when requested by law enforcement"
    },
    {
        question: "When approaching a railroad crossing with flashing lights, you must:",
        options: [
            "Speed up and cross quickly",
            "Stop at least 15 feet from the crossing",
            "Continue driving if no train is visible",
            "Turn on your hazard lights"
        ],
        answer: "Stop at least 15 feet from the crossing"
    },
    {
        question: "How far away must you stop from a school bus with flashing red lights?",
        options: ["10 feet", "20 feet", "25 feet", "50 feet"],
        answer: "25 feet"
    },
    {
        question: "When driving in reverse, you should:",
        options: [
            "Turn the wheel in the opposite direction you want the rear of the car to go",
            "Turn the wheel in the direction you want the rear of the car to go",
            "Always use only the rearview mirror",
            "Only look out the side windows"
        ],
        answer: "Turn the wheel in the direction you want the rear of the car to go"
    },
    {
        question: "You should always yield to:",
        options: [
            "Pedestrians in a crosswalk",
            "Vehicles in a traffic circle",
            "Vehicles on your right at an uncontrolled intersection",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "To avoid highway hypnosis when driving, it is good practice to:",
        options: [
            "Take a break every hour",
            "Keep your radio off",
            "Avoid looking at any one thing for more than a few seconds",
            "Drink coffee regularly"
        ],
        answer: "Avoid looking at any one thing for more than a few seconds"
    },
    {
        question: "If your brakes suddenly give out, you should:",
        options: [
            "Drive onto the shoulder to reduce speed",
            "Shift to a lower gear and pump the brakes",
            "Accelerate and drive to the nearest service station",
            "Sound your horn and drive through red lights"
        ],
        answer: "Shift to a lower gear and pump the brakes"
    },
    {
        question: "What is the shape of a stop sign?",
        options: ["Circle", "Triangle", "Octagon", "Square"],
        answer: "Octagon"
    },
    {
        question: "To make a safe right turn, you should:",
        options: [
            "Swing into the left lane before turning",
            "Slow down and keep as close to the right as possible",
            "Speed up to clear the intersection quickly",
            "Turn from the left lane"
        ],
        answer: "Slow down and keep as close to the right as possible"
    },
    {
        question: "If you miss your exit on an expressway, you should:",
        options: [
            "Stop and reverse to your exit",
            "Turn around on the shoulder",
            "Continue to the next exit",
            "Make a U-turn"
        ],
        answer: "Continue to the next exit"
    },
    {
        question: "In city driving, it is a good practice to:",
        options: [
            "Always drive faster than other vehicles",
            "Look 12 seconds ahead",
            "Look at your speedometer constantly",
            "Honk your horn frequently"
        ],
        answer: "Look 12 seconds ahead"
    },
    {
        question: "When two or more roads join and there are no signs or signals, it is a good practice to:",
        options: [
            "Yield to traffic on the right",
            "Accelerate to pass first",
            "Slow down and be prepared to stop",
            "Stop and wait for traffic to clear"
        ],
        answer: "Slow down and be prepared to stop"
    },
    {
        question: "How much is the fine for violating any of the restrictions of the GDL permit or probationary license?",
        options: ["$50", "$100", "$200", "$500"],
        answer: "$100"
    },
    {
        question: "If a driver has a BAC of 0.05%, their risk of causing an accident is:",
        options: [
            "Double",
            "Triple",
            "Quadruple",
            "Six times as great"
        ],
        answer: "Double"
    },
    {
        question: "When driving around a curve, your vehicle may:",
        options: [
            "Speed up",
            "Slow down",
            "Keep going straight",
            "Shift into another gear automatically"
        ],
        answer: "Keep going straight"
    },
    {
        question: "Which of the following actions could lead to distracted driving?",
        options: [
            "Adjusting the radio",
            "Eating while driving",
            "Using a cell phone",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "If you come to a multi-way stop at the same time as another driver, you must:",
        options: [
            "Yield to the driver on your left",
            "Yield to the driver on your right",
            "Move ahead of the other driver",
            "Honk your horn"
        ],
        answer: "Yield to the driver on your right"
    },
    {
        question: "You can reduce your chances of being in an accident by knowing and using the standard accident prevention formula, which includes:",
        options: [
            "Be alert, be prepared, act in time",
            "Ignore other drivers",
            "Speed up to avoid collisions",
            "Always yield the right of way"
        ],
        answer: "Be alert, be prepared, act in time"
    },
    {
        question: "What color is used to alert motorists that they must share the road with pedestrians and bicyclists?",
        options: ["Red", "Yellow-green", "Blue", "Orange"],
        answer: "Yellow-green"
    },
    {
        question: "The New Jersey speed limit in a business or residential district, unless otherwise posted, is:",
        options: ["25 mph", "35 mph", "45 mph", "55 mph"],
        answer: "25 mph"
    },
    {
        question: "How far must you park from a crosswalk at an intersection?",
        options: ["10 feet", "25 feet", "50 feet", "100 feet"],
        answer: "25 feet"
    },
    {
        question: "If your car goes into a skid, you should:",
        options: [
            "Take your foot off the gas pedal",
            "Brake immediately",
            "Accelerate",
            "Turn off the engine"
        ],
        answer: "Take your foot off the gas pedal"
    },
    {
        question: "When passing a large truck or bus, it is important to remember:",
        options: [
            "The name of the truck or bus company",
            "The color of the truck or bus",
            "There are several no-zones (blind spots) where the driver cannot see you",
            "The truck or bus will stop immediately if you honk your horn"
        ],
        answer: "There are several no-zones (blind spots) where the driver cannot see you"
    },
    {
        question: "A motorist should increase the following distance behind a large vehicle so its driver:",
        options: [
            "Can see the motorist's vehicle in the rearview mirror",
            "Can stop more quickly",
            "Can take more time to speed up",
            "Can change lanes easily"
        ],
        answer: "Can see the motorist's vehicle in the rearview mirror"
    },
    {
        question: "If a vehicle is passing you, you should:",
        options: [
            "Speed up",
            "Slow down to make it easier for the other motorist to complete the pass",
            "Move into the left lane",
            "Honk your horn"
        ],
        answer: "Slow down to make it easier for the other motorist to complete the pass"
    },
    {
        question: "When sharing the road with large trucks or buses, you should:",
        options: [
            "Drive closely behind them to increase fuel efficiency",
            "Leave space when stopping behind them",
            "Drive in the no-zones",
            "Always pass on the right"
        ],
        answer: "Leave space when stopping behind them"
    },
    {
        question: "Before entering an intersection and nearing a yellow or amber traffic signal, you should:",
        options: [
            "Speed up to cross the intersection before the light changes",
            "Stop unless you are too close to stop safely",
            "Slow down and be prepared to stop",
            "Turn on your headlights"
        ],
        answer: "Stop unless you are too close to stop safely"
    },
    {
        question: "When driving at night, you should be able to stop:",
        options: [
            "Within 10 feet of your vehicle",
            "Within the distance you can see ahead",
            "As far ahead as the road permits",
            "At least twice as fast as daytime"
        ],
        answer: "Within the distance you can see ahead"
    },
    {
        question: "If a motorist’s vehicle becomes disabled, they must:",
        options: [
            "Pull off as far as possible onto the shoulder or median",
            "Stop in the lane",
            "Turn on hazard lights and walk to the nearest exit",
            "Leave the vehicle and wait"
        ],
        answer: "Pull off as far as possible onto the shoulder or median"
    },
    {
        question: "New Jersey law requires that a child must be seated in a child restraint system if:",
        options: [
            "The child is under 8 years old and less than 57 inches tall",
            "The child is over 8 years old",
            "The child is less than 100 pounds",
            "The child is under 12 years old"
        ],
        answer: "The child is under 8 years old and less than 57 inches tall"
    },
    {
        question: "What should a motorist do if they approach an intersection and the traffic lights are not working?",
        options: [
            "Stop as if it is a four-way stop sign",
            "Speed up to clear the intersection quickly",
            "Ignore the lights and continue driving",
            "Honk the horn to alert other drivers"
        ],
        answer: "Stop as if it is a four-way stop sign"
    },
    {
        question: "What is the purpose of the deceleration lane?",
        options: [
            "To speed up when entering a highway",
            "To allow drivers to slow down when exiting a highway",
            "To park cars temporarily",
            "To allow buses to pick up passengers"
        ],
        answer: "To allow drivers to slow down when exiting a highway"
    },
    {
        question: "Which headlights are used in foggy weather conditions?",
        options: [
            "High beams",
            "Blue lights",
            "Parking lights",
            "low beam and fog lights if the vehicle has them"
        ],
        answer: "low beam and fog lights if the vehicle has them"
    },
    {
        question: "What is the New Jersey law regarding seat belts?",
        options: [
            "Only front-seat passengers need to wear seat belts",
            "Only the driver needs to wear a seat belt",
            "All passengers, regardless of seat, must wear seat belts",
            "Only passengers under 18 need to wear seat belts"
        ],
        answer: "All passengers, regardless of seat, must wear seat belts"
    },
    {
        question: "Which of the following could cause dangerous levels of carbon monoxide to accumulate inside a vehicle?",
        options: [
            "An exhaust leak",
            "Driving with the windows closed tightly",
            "Running the engine in an enclosed space",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "What does a single solid white line across the road at an intersection mean?",
        options: [
            "Stop behind the line for a traffic sign or light",
            "Cross the line if the way is clear",
            "Pedestrian crossing",
            "Speed up and proceed through the intersection"
        ],
        answer: "Stop behind the line for a traffic sign or light"
    },
    {
        question: "When a school bus has stopped directly in front of a school to pick up or let off children, you may pass from either direction at a speed of no more than:",
        options: ["10 mph", "15 mph", "20 mph", "25 mph"],
        answer: "10 mph"
    },
    {
        question: "What is the penalty for refusing to take a breath test in New Jersey?",
        options: [
            "No penalty",
            "A fine of $500",
            "A violation surcharge of $1,000 per year for three years",
            "Immediate jail time"
        ],
        answer: "A violation surcharge of $1,000 per year for three years"
    },
    {
        question: "If your driver's license is lost or stolen, you should immediately notify:",
        options: [
            "Your insurance company",
            "The New Jersey MVC",
            "Your local police",
            "The DMV of another state"
        ],
        answer: "Your local police"
    },
    {
        question: "If a driver of a large truck or bus cannot see you in their rearview mirrors, you are:",
        options: [
            "Driving too fast",
            "In the truck's blind spot or no-zone",
            "Driving too slow",
            "Following the truck too closely"
        ],
        answer: "In the truck's blind spot or no-zone"
    },
    {
        question: "What must you do when a pedestrian is crossing at an unmarked crosswalk?",
        options: [
            "Honk your horn to warn them",
            "Speed up to pass them",
            "Stop and let the pedestrian cross",
            "Slow down but do not stop"
        ],
        answer: "Stop and let the pedestrian cross"
    },
    {
        question: "When is it legal to pass on the right?",
        options: [
            "When the vehicle in front is making a left turn and there is room to pass",
            "In a school zone",
            "At an intersection with no signs",
            "When driving on a single-lane road"
        ],
        answer: "When the vehicle in front is making a left turn and there is room to pass"
    },
    {
        question: "Under New Jersey law, inline skaters, skateboarders, and bicyclists have the same rights and responsibilities as:",
        options: [
            "Pedestrians",
            "Motorists",
            "Truck drivers",
            "None of the above"
        ],
        answer: "Motorists"
    },
    {
        question: "What is the correct hand signal for a left turn?",
        options: [
            "Left hand and arm straight out",
            "Left hand and arm upward",
            "Left hand and arm downward",
            "Right hand and arm straight out"
        ],
        answer: "Left hand and arm straight out"
    },
    {
        question: "If you have a flat tire or blowout, you should:",
        options: [
            "Apply your brakes hard immediately",
            "Keep a tight grip on the steering wheel and keep the vehicle straight",
            "Speed up to get off the road quickly",
            "Swerve to the side of the road"
        ],
        answer: "Keep a tight grip on the steering wheel and keep the vehicle straight"
    },
    {
        question: "The best way to talk to other drivers on the road is to:",
        options: [
            "Yell out the window",
            "Honk your horn",
            "Use your lights and hand signals",
            "Wave your hand"
        ],
        answer: "Use your lights and hand signals"
    },
    {
        question: "During what time period are drivers required to use headlights?",
        options: [
            "Only at night",
            "Between one-half hour after sunset and one-half hour before sunrise",
            "During the day",
            "Only during foggy weather"
        ],
        answer: "Between one-half hour after sunset and one-half hour before sunrise"
    },
    {
        question: "When approaching a flashing yellow light, you should:",
        options: [
            "Stop",
            "Slow down and proceed with caution",
            "Accelerate through the intersection",
            "Honk your horn"
        ],
        answer: "Slow down and proceed with caution"
    },
    {
        question: "What should you do if an emergency vehicle with flashing lights is approaching from behind?",
        options: [
            "Speed up to get out of the way",
            "Pull over to the right and stop",
            "Continue driving at the same speed",
            "Turn on your hazard lights"
        ],
        answer: "Pull over to the right and stop"
    },
    {
        question: "A diamond-shaped sign is a:",
        options: [
            "Speed limit sign",
            "Warning sign",
            "Railroad sign",
            "Stop sign"
        ],
        answer: "Warning sign"
    },
    {
        question: "If your license plates are lost or stolen, you should:",
        options: [
            "Ignore the issue",
            "Report it to the police immediately",
            "Get new plates from a car dealership",
            "Drive without plates"
        ],
        answer: "Report it to the police immediately"
    },
    {
        question: "Which direction should your wheels face when parking uphill with a curb?",
        options: [
            "Away from the curb",
            "Towards the curb",
            "Straight ahead",
            "Any direction is fine"
        ],
        answer: "Away from the curb"
    },
    {
        question: "The best way to reduce your chances of having an alcohol-related accident is to:",
        options: [
            "Not drive at all after drinking",
            "Eat before driving",
            "Drive slowly",
            "Drink coffee before driving"
        ],
        answer: "Not drive at all after drinking"
    }
];


// Randomly select 50 questions from the pool
const questions = questionsPool.sort(() => Math.random() - 0.5).slice(0, 50);

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let skippedQuestions = []; // Array to store skipped question indices
let isRevisitingSkipped = false; // Flag to indicate revisiting skipped questions
let testStatus = ''; // Tracks if the test is passed or failed

// DOM Elements
const questionsContainer = document.getElementById('questions-container');
const resultContainer = document.getElementById('result-container');
const statusContainer = document.getElementById('status-container'); // New status container
const submitBtn = document.getElementById('submit-btn');
const skipBtn = document.getElementById('skip-btn');

// Progress Bar Elements
const correctBar = document.getElementById('correct-bar');
const incorrectBar = document.getElementById('incorrect-bar');
const skippedBar = document.getElementById('skipped-bar');

// Function to display the current question
function displayQuestion(index) {
    questionsContainer.innerHTML = ''; // Clear the previous question

    const questionObj = questions[index];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionTitle = document.createElement('h3');
    questionTitle.innerText = `${index + 1}. ${questionObj.question}`;
    questionDiv.appendChild(questionTitle);

    const optionsDiv = document.createElement('div');
    questionObj.options.forEach(option => {
        const optionLabel = document.createElement('label');
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `question${index}`;
        optionInput.value = option;
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        optionsDiv.appendChild(optionLabel);
        optionsDiv.appendChild(document.createElement('br'));
    });

    questionDiv.appendChild(optionsDiv);
    questionsContainer.appendChild(questionDiv);
}

// Function to update the progress bar and check for pass/fail condition
function updateProgress() {
    const totalQuestions = questions.length;
    const answeredQuestions = correctAnswers + incorrectAnswers; // Exclude skipped questions

    // Calculate percentage widths for progress segments
    const correctWidth = (correctAnswers / totalQuestions) * 100;
    const incorrectWidth = (incorrectAnswers / totalQuestions) * 100;
    const skippedWidth = (skippedQuestions.length / totalQuestions) * 100;

    // Update progress bar elements
    correctBar.style.width = `${correctWidth}%`;
    correctBar.innerText = `Correct: ${correctAnswers}`;

    incorrectBar.style.width = `${incorrectWidth}%`;
    incorrectBar.innerText = `Incorrect: ${incorrectAnswers}`;

    skippedBar.style.width = `${skippedWidth}%`;
    skippedBar.innerText = `Skipped: ${skippedQuestions.length}`;

    // Check for pass/fail conditions
    if (answeredQuestions > 0) {
        let score = (correctAnswers / totalQuestions) * 100;
        let failRate = (incorrectAnswers / totalQuestions) * 100;

        if (score >= 80 && testStatus !== 'passed') {
            testStatus = 'passed';
            statusContainer.innerText = "CONGRATULATIONS, YOU PASSED!";
            statusContainer.style.color = 'green';
            statusContainer.style.fontWeight = 'bold';
        } else if (failRate >= 21 && testStatus !== 'failed') {
            testStatus = 'failed';
            statusContainer.innerText = "You failed this time, try again!";
            statusContainer.style.color = 'red';
            statusContainer.style.fontWeight = 'bold';
        }
    }
}

// Function to show the results window
function showResultWindow(isCorrect, correctAnswer) {
    resultContainer.style.display = 'block';
    resultContainer.style.backgroundColor = isCorrect ? 'green' : 'red';
    resultContainer.innerHTML = isCorrect ? "Correct!" : `Incorrect! The correct answer was: ${correctAnswer}`;

    // Disable buttons while showing results window
    submitBtn.disabled = true;
    skipBtn.disabled = true;

    // Show OK button
    const okBtn = document.createElement('button');
    okBtn.innerText = 'OK';
    okBtn.type = 'button';
    okBtn.addEventListener('click', () => {
        resultContainer.style.display = 'none';
        submitBtn.disabled = false;
        skipBtn.disabled = false;
        nextQuestion();
    });
    resultContainer.appendChild(okBtn);
}

// Function to handle the submission
function handleSubmit() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        // Check if the selected option is correct
        const isCorrect = selectedOption.value === questions[currentQuestionIndex].answer;
        if (isCorrect) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }

        // Update the progress and check for pass/fail
        updateProgress();

        // Show the results window
        showResultWindow(isCorrect, questions[currentQuestionIndex].answer);
    } else {
        alert('Please select an answer or click skip to move to the next question.');
    }
}

// Function to handle skipping
function handleSkip() {
    skippedQuestions.push(currentQuestionIndex); // Store the current question index for later

    // Update the progress
    updateProgress();

    // Move to the next question
    nextQuestion();
}

// Function to move to the next question or revisit skipped questions
function nextQuestion() {
    if (!isRevisitingSkipped && currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
    } else if (!isRevisitingSkipped && currentQuestionIndex >= questions.length - 1 && skippedQuestions.length > 0) {
        isRevisitingSkipped = true;
        currentQuestionIndex = skippedQuestions.shift();
    } else if (isRevisitingSkipped && skippedQuestions.length > 0) {
        currentQuestionIndex = skippedQuestions.shift();
    } else {
        showFinalResults();
        return;
    }

    displayQuestion(currentQuestionIndex);
}

// Function to show final results
function showFinalResults() {
    let score = (correctAnswers / questions.length) * 100;
    resultContainer.innerText += ` You've finished the test with a score of ${score.toFixed(2)}%. ${score >= 80 ? 'You Passed!' : 'You Failed!'}`;
    submitBtn.disabled = true;
    skipBtn.disabled = true;
}

// Event Listeners
submitBtn.addEventListener('click', handleSubmit);
skipBtn.addEventListener('click', handleSkip);

// Display the first question on page load
displayQuestion(currentQuestionIndex);