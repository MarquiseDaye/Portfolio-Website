var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Designer",
    "Graphic Designer",
    "Illustrator",
    "Video Editor",
    "Web Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 90,
  loop: true,
});

const nav = document.querySelector(".navigation"),
  navList = nav.querySelectorAll("li"),
  Section = document.querySelectorAll(".section"),
  totalSection = Section.length,
  totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      section_butn_togl();
    }
  });
}

function addBackSection(n) {
  Section[n].classList.add("back-section");
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    Section[i].classList.remove("back-section");
  }
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    Section[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalSection; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];

    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const showIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(showIndex);
});

const navigation_btn = document.querySelector(".nav-toggler"),
  sidebar = document.querySelector(".sidebar");
navigation_btn.addEventListener("click", () => {
  section_butn_togl();
});
function section_butn_togl() {
  sidebar.classList.toggle("open");
  navigation_btn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    Section[i].classList.toggle("open");
  }
}
