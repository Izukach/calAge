const day = document.querySelectorAll("input");
const month = document.getElementById("monthId");
const year = document.getElementById("yearId");
const submitbtn = document.getElementById("headerBtn");
const spanDay = document.getElementById("spanDay");
const spanIconY = document.getElementById("spanIconY");
const spanIconD = document.getElementById("spanIconD");
const spanIconM = document.getElementById("spanIconM");
const spanMonth = document.getElementById("spanMonth");
const spanYear = document.getElementById("spanYear");

let today = new Date();
let currentDay = today.getUTCDate();
let currentMonth = today.getUTCMonth() + 1;
let currentYear = today.getFullYear();

//calculate the age in months:
// Age = (currentYear-birthYear)*12 + (currentMonth-birthMonth) + (currentDay-birthDay)/30;
// let rat = currentYear - 1984
// console.log(rat)
// let eat = currentMonth - 9
// console.log(eat)
// let cat = currentDay - 24
// console.log(cat)

// submitbtn.addEventListener("click", function () {
//   if (day.value < 1 || day.value > 31) return;
//   let today = new Date();
//   let currentDay = today.getUTCDate();
//   let currentMonth = today.getUTCMonth() + 1;
//   let currentYear = today.getFullYear();

//   if (day.value < 1 || day.value > 31) {
//     spanDay.innerHTML = "Insert vaild day";
//     spanDay.style.color = "red";
//     day.style.border = "solid red";
//     spanIconY.innerHTML = "";
//     spanIconM.innerHTML = "";
//     dayValue.innerHTML = "";

//     console.log("hey");
//   } else {
//     let myDay = currentDay - day.value;
//     // console.log(myDay);
//     spanIconD.innerHTML = day.value;
//     spanIconD.style.fontSize = "xx-large";
//     spanIconD.style.fontWeight = "bolder";
//     day.style.border = "solid black";
//     spanDay.innerHTML = "";
//   }
//   if (month.value < 1 || month.value > 12) {
//     spanMonth.innerHTML = "Insert a vaild month";
//     spanMonth.style.color = "red";
//     month.style.border = "solid red";
//     spanIconY.innerHTML = "";
//     spanIconD.innerHTML = "";

//     console.log("hello");
//   } else {
//     let myMonth = currentMonth - month.value;
//     // console.log(myMonth);
//     spanIconM.innerHTML = Math.abs(myMonth);

//     spanIconM.style.fontSize = "xx-large";
//     spanIconM.style.fontWeight = "bolder";
//     month.style.border = "solid black";
//     spanMonth.innerHTML = "";
//   }
//   if (year.value < 1 || year.value > 2030) {
//     spanYear.innerHTML = "Insert a vaild year";
//     spanYear.style.color = "red";
//     spanIconD.innerHTML = "";
//     spanIconM.innerHTML = "";
//     year.style.border = "solid red";

//     console.log("hi");
//   } else {
//     let myYear = currentYear - year.value;
//     // console.log(myYear);
//     spanIconY.innerHTML = Math.abs(myYear);
//     spanIconY.style.fontSize = "xx-large";
//     spanIconY.style.fontWeight = "bolder";
//     year.style.border = "solid ";
//     spanYear.innerHTML = `<i class="fa-solid fa-minus fa-2xl"></i> `;
//   }

// if (day.value < 1 || day.value > 31 || "" )
// });

submitbtn.addEventListener("click", function () {
  for (let i = 0; i < day.length; i++) {
    if (day[0].value === "" && day[1].value === "" && day[2].value === "") {
      spanDay.innerText = "Invaild text";
      spanMonth.innerText = "Invaild text";
      spanYear.innerText = "Invaild text";
      spanDay.style.color = "red";
      spanMonth.style.color = "red";
      spanYear.style.color = "red";
      // spanYear.label.style.color = "red";
    }
    if (day[0].value >= 1 && day[0].value <= 31) {
      let myDay = currentDay - day[0].value;
      spanIconD.innerText = myDay;
      spanIconD.style.fontSize = "xx-large";
      spanIconD.style.fontWeight = "bolder";
      console.log(day[0].value);
      spanDay.innerText = "";
      day[0].style.border = "solid black";
    } else {
      spanDay.innerText = "Invaild text";
      spanDay.style.color = "red";
      day[0].style.border = "solid red";
    }

    if (day[1].value >= 1 && day[1].value <= 12) {
      let myMonth = currentMonth - day[1].value;
      spanIconM.innerHTML = Math.abs(myMonth);
      spanIconM.style.fontSize = "xx-large";
      spanIconM.style.fontWeight = "bolder";
      console.log(day[1].value);
      spanMonth.innerText = "";
      day[1].style.border = "solid black";
    } else {
      spanMonth.innerText = "Invaild text";
      spanMonth.style.color = "red";
      day[1].style.border = "solid red";
    }
    if (day[2].value >= 1 && day[2].value <= 2030) {
      let myYear = currentYear - day[2].value;
      spanIconY.innerHTML = Math.abs(myYear);
      spanIconY.style.fontSize = "xx-large";
      spanIconY.style.fontWeight = "bolder";
      spanYear.innerText = "";
      day[2].style.border = "solid black";
    } else {
      spanYear.innerText = "Invaild text";
      spanYear.style.color = "red";
      day[2].style.border = "solid red";
    }
  }
});
