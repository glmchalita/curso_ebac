document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form-sorter").addEventListener("submit", function (event) {
    event.preventDefault();
    let max_num = parseInt(document.getElementById("max-num").value);

    let random_num = Math.floor(Math.random() * max_num) + 1;
    document.getElementById("result-value").innerText = random_num;

    document.querySelector(".result").style.display = "block";
  });
});
