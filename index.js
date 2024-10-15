document.getElementById("btn0").addEventListener("click", function () {
  let btn0 = document.getElementById("btn0");
  let res = document.getElementById("res");
  //   btn0.innerHTML = res.innerHTML;
  res.innerHTML += btn0.innerHTML;
  //   console.log("In btn 0");
});

document.getElementById("btn1").addEventListener("click", function () {
  let btn1 = document.getElementById("btn1");
  let res = document.getElementById("res");
  //   btn0.innerHTML = res.innerHTML;
  res.innerHTML += btn1.innerHTML;
  //   console.log("In btn 1");
});

document.getElementById("btnClr").addEventListener("click", function () {
  document.getElementById("res").innerHTML = "";
});

document.getElementById("btnSum").addEventListener("click", function () {
  let btn1 = document.getElementById("btnSum");
  let res = document.getElementById("res");
  //   btn0.innerHTML = res.innerHTML;
  res.innerHTML += btn1.innerHTML;
  //   console.log("In btn Sum");
});

document.getElementById("btnSub").addEventListener("click", function () {
  let btn1 = document.getElementById("btnSub");
  let res = document.getElementById("res");
  //   btn0.innerHTML = res.innerHTML;
  res.innerHTML += btn1.innerHTML;
  //   console.log("In btn Sub");
});

document.getElementById("btnMul").addEventListener("click", function () {
  let btn1 = document.getElementById("btnMul");
  let res = document.getElementById("res");
  //   btn0.innerHTML = res.innerHTML;
  res.innerHTML += btn1.innerHTML;
  //   console.log("In btn Mul");
});

document.getElementById("btnDiv").addEventListener("click", function () {
  let btn1 = document.getElementById("btnDiv");
  let res = document.getElementById("res");
  //   btn0.innerHTML = res.innerHTML;
  res.innerHTML += btn1.innerHTML;
  //   console.log("In btn Div");
});

document.addEventListener("keydown", function (event) {
  let res = document.getElementById("res");

  // Check if the key pressed is "0"
  if (event.key === "0") {
    res.innerHTML += btn0.innerHTML; // Append btn0's content to res
  }

  //   console.log("In global keydown for 0");
});

document.addEventListener("keydown", function (event) {
  let res = document.getElementById("res");

  // Check if the key pressed is "0"
  if (event.key === "1") {
    res.innerHTML += btn1.innerHTML; // Append btn1's content to res
  }

  //   console.log("In global keydown for 1");
});

document.addEventListener("keydown", function (event) {
  //   console.log(event.key);
  let res = document.getElementById("res");

  // Check if the key pressed is "0"
  if (event.key === "Escape") {
    res.innerHTML = ""; // Clear everything on pressing Esc button
  }

  //   console.log("Cleared everything");
});
