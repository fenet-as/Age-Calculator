const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");
const recalcBtnEl = document.getElementById("recalcBtn");

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}


function calculateAge() {
  const birthdayValue = birthdayEl.value;

  if (birthdayValue === "") {
    resultEl.innerText = 'Please enter your birthdate.';
  } else {
    const birthdayDate = new Date(birthdayValue);
    const currentDate = new Date();

    
    if (birthdayDate > currentDate) {
      resultEl.innerText = 'Please enter a valid birthdate.';
    } else {
      const age = getAge(birthdayValue);
      resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;


      recalcBtnEl.style.display = "inline-block";
    }
  }
}




btnEl.addEventListener("click", calculateAge);

recalcBtnEl.addEventListener("click", function () {
  location.reload(); 
});

birthdayEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculateAge();
  }
});
