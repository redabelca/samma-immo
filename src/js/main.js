const wrappers = document.querySelectorAll(".wrapper");
for (const wrapper of wrappers) {
  const selectBtn = wrapper.querySelector(".select-btn");
  const searchInp = wrapper.querySelector("input");
  const options = wrapper.querySelector(".options");

  let items = [...options.querySelectorAll("li")].map((li) => li.innerText);
  options.innerHTML = "";

  window.renderItems = (selectedCountry) => {
    options.innerHTML = "";
    items.forEach((item) => {
      let isSelected = item == selectedCountry ? "selected" : "";
      let li = `<li onclick="updateName(this)" class="${isSelected}">${item}</li>`;
      options.insertAdjacentHTML("beforeend", li);
    });
  };
  renderItems();

  function updateName(selectedLi) {
    let _wrapper = selectedLi.parentElement.parentElement.parentElement;
    _wrapper.querySelector("input").value = "";
    renderItems(selectedLi.innerText);
    _wrapper.classList.remove("active");
    // selectBtn.firstElementChild.innerText = selectedLi.innerText;
    let contentInput =
      selectedLi.parentElement.parentElement.querySelector(".content-input");
    if (contentInput) contentInput.value = selectedLi.innerText;
    selectedLi.parentElement.parentElement.parentElement.querySelector(
      ".wrapper-label"
    ).innerHTML = selectedLi.innerText;
  }

  searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = items
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

// our products hover animation
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

// animation
let els = [];
if (typeof productItemsContainer !== "undefined")
  els.push(productItemsContainer);
if (typeof ourRealizationsItemsContainer !== "undefined")
  els = [...els, ...ourRealizationsItemsContainer];
els.forEach((el) => {
  let observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].target.classList.contains("animated")) {
        observer.disconnect();
      }
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("animated");
        entries[0].target.querySelectorAll(".fade-item").forEach((_el, i) => {
          setTimeout(() => {
            _el.classList.add("translate-y-0", "opacity-1");
            _el.classList.remove("-translate-y-1/2", "opacity-0");
          }, +(i * 3 + "00"));
        });
      }
    },
    {
      rootMargin: "0px",
      threshold: 0.2,
    }
  );
  if (typeof el !== "undefined") observer.observe(el);
});
