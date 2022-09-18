const wrappers = document.querySelectorAll(".wrapper");

for (const wrapper of wrappers) {
  const selectBtn = wrapper.querySelector(".select-btn"),
    searchInp = wrapper.querySelector("input"),
    options = wrapper.querySelector(".options");

  let countries = [
    "Afghanistan",
    "Algeria",
    "Argentina",
    "Australia",
    "Bangladesh",
    "Belgium",
    "Bhutan",
    "Brazil",
    "Canada",
    "China",
    "Denmark",
    "Ethiopia",
    "Finland",
    "France",
    "Germany",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Italy",
    "Japan",
    "Malaysia",
    "Maldives",
    "Mexico",
    "Morocco",
    "Nepal",
    "Netherlands",
    "Nigeria",
    "Norway",
    "Pakistan",
    "Peru",
    "Russia",
    "Romania",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sweden",
    "Switzerland",
    "Thailand",
    "Turkey",
    "Uganda",
    "Ukraine",
    "United States",
    "United Kingdom",
    "Vietnam",
  ];

  function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach((country) => {
      let isSelected = country == selectedCountry ? "selected" : "";
      let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
      options.insertAdjacentHTML("beforeend", li);
    });
  }
  addCountry();

  function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
  }

  searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries
      .filter((data) => {
        return data.toLowerCase().startsWith(searchWord);
      })
      .map((data) => {
        let isSelected =
          data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
      })
      .join("");
    options.innerHTML = arr
      ? arr
      : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
  });

  selectBtn.addEventListener("click", () => {
    !wrapper.classList.contains("open") && wrapper.classList.add("open");
    wrappers.forEach(
      (el) => !el.classList.contains("open") && el.classList.remove("active")
    );
    wrapper.classList.toggle("active");
    wrapper.classList.remove("open");
  });
}

// switch dir
const switchDir = () =>
  document.documentElement.setAttribute(
    "dir",
    document.documentElement.dir == "ltr" ? "rtl" : "ltr"
  );
document.body.ondblclick = switchDir;

// toggle header video
if (typeof headerPlayButton !== "undefined") {
  headerPlayButton.addEventListener("click", () => {
    [headerPlayButton, headerVideo, headerTextContent].forEach((el) =>
      el.classList.toggle("hidden")
    );
    headerVideo.play();
  });
}

if (typeof headerVideo !== "undefined") {
  headerVideo.addEventListener("click", () => {
    headerVideo.pause();
    [headerVideo, headerTextContent, headerPlayButton].forEach((el) =>
      el.classList.toggle("hidden")
    );
  });
}

// our products animation
document.querySelectorAll(".our-product-item").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.querySelector(".absolute").classList.add(
      "bg-[#003c717d]",
      "h-full",
      "top-0"
    );
    el.querySelector(".absolute").classList.remove(
      "top-[calc(100%_-_56px)]",
      "h-14"
    );
    el.querySelector("p").classList.toggle("hidden");
    el.querySelector(".text-white").classList.toggle("text-center");
  });
  el.addEventListener("mouseleave", () => {
    el.querySelector(".absolute").classList.remove(
      "bg-[#003c717d]",
      "h-full",
      "top-0"
    );
    el.querySelector(".absolute").classList.add(
      "top-[calc(100%_-_56px)]",
      "h-14"
    );
    el.querySelector("p").classList.toggle("hidden");
    el.querySelector(".text-white").classList.toggle("text-center");
  });
});

// our products gallery
// ourProductsVideoPlayButton - ourProductsBadge - ourProductsVideo
if (typeof ourProductsVideoPlayButton !== "undefined") {
  ourProductsVideoPlayButton.addEventListener("click", () => {
    [ourProductsVideoPlayButton, ourProductsVideo].forEach((el) =>
      el.classList.toggle("hidden")
    );
    ourProductsVideo.play();
  });
}

if (typeof ourProductsVideo !== "undefined") {
  ourProductsVideo.addEventListener("click", () => {
    ourProductsVideo.pause();
    [ourProductsVideo, ourProductsVideoPlayButton].forEach((el) =>
      el.classList.toggle("hidden")
    );
  });
}
