const userName = document.getElementById(`name`);
console.log(userName.value);
const nextButton = document.querySelector(`#next`);
const body = document.querySelector(`body`)

nextButton.addEventListener(`click`, () => {
    const firstResponse = document.createElement(`p`);
    firstResponse.textContent += `Nice to see you again ${userName.value}
                                  Do you know why you're here?`;
    body.appendChild(firstResponse);
    const secondAnswer = document.createElement(`input`);
    const secondAnswerSubmit = document.createElement(`button`);
    body.appendChild(secondAnswer);
    body.appendChild(secondAnswerSubmit);

})