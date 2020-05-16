//===========================Nawigacja=============================
//chowanie menu w widoku komórkowym po kliknięciu linka
document.querySelectorAll(".link").forEach((item) => {
  item.addEventListener("click", () => {
    hideNav();
  });
});
const hideNav = () => {
  document.querySelector(".menu__btn").checked = false;
};
//===========================Karuzela=============================

let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".hero__background");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
 
}

//===========================More Info=============================
AOS.init();
//===========================Walidacja formularza==================
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("mail");
const checkbox = document.getElementById("opt-in");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();

  if (nameValue === "") {
    setErrorFor(name, "Proszę wpisać imię");
  } else {
    setSuccessFor(name);
  }

  if (emailValue === "") {
    setErrorFor(email, "Proszę wpisać adres mailowy");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Niepoprawny adres mailowy");
  } else {
    setSuccessFor(email);
  }

  if (!checkbox.checked) {
    setErrorFor(checkbox, "Proszę wyrazić zgodę na przetwarzanie danych");
  } else {
    setSuccessFor(checkbox);
  }
}

function setErrorFor(input, message) {
  const newsletterInput = input.parentElement;
  const small = newsletterInput.querySelector("small");
  newsletterInput.className = "newsletter__input error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const newsletterInput = input.parentElement;
  newsletterInput.className = "newsletter__input success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//============= Komunikat cookies======================
const cookie = document.querySelector(".cookie");
const buttonClose = document.querySelector(".cookie__close");

if (localStorage.getItem("cookieAccepted") !== "isAccepted") {
  setTimeout(() => {
    cookie.classList.remove("hidden");
  }, 3000);
} else {
  cookie.classList.add("hidden");
}

buttonClose.addEventListener("click", () => {
  localStorage.setItem("cookieAccepted", "isAccepted");
  cookie.classList.add("hidden");
});
