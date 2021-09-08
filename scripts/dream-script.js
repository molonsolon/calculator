const userName = document.querySelector(`#name`);
console.log(userName.value);
const nextButton = document.querySelector(`#next`);
const body = document.querySelector(`body`)
const firstQuestion = document.querySelector(`#first-question`)

nextButton.addEventListener(`click`, () => {
    body.removeChild(firstQuestion);
    const firstResponse = document.createElement(`p`);
    firstResponse.classList.add("question-two")
    firstResponse.textContent += `Nice to see you again ${userName.value}
                                  Do you know why you're here?`;

    const secondAnswer = document.createElement(`input`);
    secondAnswer.classList.add("answer-two")
    const secondAnswerSubmit = document.createElement(`button`);
    secondAnswerSubmit.classList.add("next-two");
    body.appendChild(firstResponse);
    body.appendChild(secondAnswer);
    body.appendChild(secondAnswerSubmit);


    // for (let i = 0; i < firstQuestion.clientHeight; i++) {
    //     firstQuestion[i].
    // }
})