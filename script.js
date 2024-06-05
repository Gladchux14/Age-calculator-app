const today = new Date();
let isDaysValid = false;
let isMonthsValid = false;
let isYearsValid = false;

function calculate() {
  let Years = document.getElementById("Year").value;
  if (Years === "") {
    document.getElementById("error3").innerHTML = "this field is required";
    document.getElementById("askyear").style.color = "red";
    document.getElementById("Year").style.borderColor = "red";
  } else if (isNaN(Years) || Years > 2024) {
    document.getElementById("error3").innerHTML = "Must be a valid Year";
    document.getElementById("askyear").style.color = " red";
    document.getElementById("Year").style.borderColor = "red";
  } else {
    document.getElementById("error3").innerHTML = "";
    document.getElementById("askyear").style.color = "gray";
    document.getElementById("Year").style.borderColor = "gray";
    isYearsValid = true;
  }

  let Months = document.getElementById("Month").value;
  if (Months === "") {
    document.getElementById("error2").innerHTML = "this field is required";
    document.getElementById("askmonth").style.color = "hsl(0, 100%, 67%)";
    document.getElementById("Month").style.borderColor = "hsl(0, 100%, 67%)";
  } else if (isNaN(Months) || Months < 1 || Months > 12) {
    document.getElementById("error2").innerHTML = "Must be a valid Month";
    document.getElementById("askmonth").style.color = "hsl(0, 100%, 67%)";
    document.getElementById("Month").style.borderColor = "hsl(0, 100%, 67%)";
  } else {
    document.getElementById("error2").innerHTML = "";
    document.getElementById("askmonth").style.color = "gray";
    document.getElementById("Month").style.borderColor = "gray";
    isMonthsValid = true;
  }

  let Days = document.getElementById("Day").value;
  if (Days === "") {
    document.getElementById("error").innerHTML = "this field is required";
    document.getElementById("askday").style.color = "hsl(0, 100%, 67%)";
    document.getElementById("Day").style.borderColor = "hsl(0, 100%, 67%)";
  } else if (isNaN(Days) || Days < 1 || Days > 30) {
    document.getElementById("error").innerHTML = "Must be a valid Day";
    document.getElementById("askday").style.color = "hsl(0, 100%, 67%)";
    document.getElementById("Day").style.borderColor = "hsl(0, 100%, 67%)";
  } else {
    document.getElementById("error").innerHTML = "";
    document.getElementById("askday").style.color = "gray";
    document.getElementById("Day").style.borderColor = "gray";
    isDaysValid = true;
  }

  if (!isYearsValid || !isMonthsValid || !isDaysValid) {
    return;
  }

  let birthDay = today.getDate() - +Days;
  let birthMonth = today.getMonth() +1 - +Months;
  let birthYear = today.getFullYear() - +Years;

  console.log(birthDay);
  if (birthDay < 0) {
    birthMonth -= 1;
    birthDay += 31;
  }
  document.getElementById("result-Day").innerHTML = birthDay;

  console.log(birthMonth);
  if (birthMonth < 0) {
    birthYear -= 1;
    birthMonth += 12;
  }
  document.getElementById("result-Month").innerHTML = birthMonth;

  console.log(birthYear);
  document.getElementById("result-Year").innerHTML = birthYear;
}
