const form1 = document.querySelector(".container");
const subBtn = document.querySelector("#submit");
const form2 = document.querySelector(".form2");
const rate = document.querySelector("#rate");
const feedback = document.querySelectorAll(".feedback");

subBtn.addEventListener("click", () =>
  form2.classList.remove("hidden")((form1.style.display = "none"))
);

feedback.forEach((a) =>
  a.addEventListener("click", () => {
    rate.innerHTML = a.innerHTML;
  })
);
