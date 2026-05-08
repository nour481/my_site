// ===============================
// اسم المشروع: دليل الفعاليات
// المادة: برمجة ويب 1
// الوظيفة: التحكم بالسلايدر + الفلترة + النموذج
// ===============================

// سلايدر الفعاليات

let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));

  slides[index].classList.add("active");

  index++;
  if (index >= slides.length) {
    index = 0;
  }
}

// تشغيل السلايدر كل 3 ثواني
setInterval(showSlide, 3000);

// 🔎 فلترة الفعاليات

const category = document.getElementById("filterCategory");
const date = document.getElementById("filterDate");
const cards = document.querySelectorAll(".event-card");

function filterEvents() {
  const catValue = category.value;
  const dateValue = date.value;

  cards.forEach(card => {
    let matchCat = (catValue === "all" || card.dataset.category === catValue);
    let matchDate = (!dateValue || card.dataset.date === dateValue);

    if (matchCat && matchDate) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

if (category && date) {
  category.addEventListener("change", filterEvents);
  date.addEventListener("change", filterEvents);
}


//  نموذج اتصل بنا


const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const successAlert = document.getElementById("successAlert");
  const errorAlert = document.getElementById("errorAlert");

  // تحقق بسيط

  if(name === "" || email  === "" || message  === ""){

    errorAlert.classList.remove("d-none");
    successAlert.classList.add("d-none");

  }

  else if(!email.includes("@")){

    errorAlert.classList.remove("d-none");
    successAlert.classList.add("d-none");

  }

  else{

    successAlert.classList.remove("d-none");
    errorAlert.classList.add("d-none");

    form.reset();

  }

});

