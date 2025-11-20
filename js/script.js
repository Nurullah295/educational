const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const pagesList = document.getElementById("pagesList");
const themeToggle = document.getElementById("themeToggle");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function renderPages(filter = "") {
  pagesList.innerHTML = "";
  pages
    .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(page => {
      const btn = document.createElement("button");
      btn.className = "page-btn";
      btn.innerHTML = `
        <span>${page.name}</span>
        <span class="favorite-icon ${favorites.includes(page.url) ? 'favorited' : ''}" data-url="${page.url}">★</span>
      `;
      btn.onclick = () => window.open(page.url, "_blank");
      pagesList.appendChild(btn);
    });

  document.querySelectorAll(".favorite-icon").forEach(icon => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation();
      const url = icon.dataset.url;
      if (favorites.includes(url)) {
        favorites = favorites.filter(f => f !== url);
      } else {
        favorites.push(url);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
      renderPages(searchInput.value);
    });
  });
}

hamburger.onclick = () => {
  sidebar.classList.toggle("hidden");
};

searchInput.addEventListener("input", () => {
  renderPages(searchInput.value);
  clearSearch.style.display = searchInput.value ? "inline" : "none";
});

clearSearch.onclick = () => {
  searchInput.value = "";
  renderPages();
  clearSearch.style.display = "none";
};

themeToggle.onclick = () => {
  const html = document.documentElement;
  const isLight = html.getAttribute("data-theme") === "light";
  html.setAttribute("data-theme", isLight ? "dark" : "light");
  themeToggle.textContent = isLight ? "🌙" : "🌞";
};

renderPages();



const favToggle = document.getElementById("favToggle");
const favoritePanel = document.getElementById("favoritePanel");
const favoriteLinks = document.getElementById("favoriteLinks");

favToggle.addEventListener("click", () => {
  favoritePanel.classList.toggle("hidden");
  renderFavoritePanel();
});

function renderFavoritePanel() {
  favoriteLinks.innerHTML = "";
  const favList = pages.filter(p => favorites.includes(p.url));
  if (favList.length === 0) {
    favoriteLinks.innerHTML = "<p>No favorites added.</p>";
    return;
  }

  favList.forEach(p => {
    const btn = document.createElement("button");
    btn.className = "page-btn";
    btn.innerHTML = `
      <span>${p.name}</span>
      <span class="favorite-icon favorited" data-url="${p.url}">★</span>
    `;
    btn.querySelector(".favorite-icon").addEventListener("click", (e) => {
      e.stopPropagation();
      favorites = favorites.filter(f => f !== p.url);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      renderPages(searchInput.value); // sidebar update
      renderFavoritePanel();          // panel update
    });
    btn.onclick = () => window.open(p.url, "_blank");
    favoriteLinks.appendChild(btn);
  });
}





        // পাসওয়ার্ড চেক করার ফাংশন
        function checkPassword() {
          const correctPasswords = ["1763", "1763", "1763"]; // একাধিক পাসওয়ার্ড
          const input = document.getElementById("passwordInput").value;

          // পাসওয়ার্ড চেক
          if (correctPasswords.includes(input)) {
              // পাসওয়ার্ড সঠিক হলে ফরম লুকানো এবং কন্টেন্ট দেখানো
              document.getElementById("passwordForm").style.display = "none";
              document.getElementById("protectedContent").style.display = "block";
          } else {
              // পাসওয়ার্ড ভুল হলে এরর মেসেজ দেখানো
              document.getElementById("errorMessage").style.display = "block";
          }
      }


        // Read More / Read Less toggle button
  function toggleText() {
    const moreText = document.getElementById("moreText");
    const previewText = document.getElementById("previewText");
    
    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      previewText.innerHTML = "Click to hide details";
    } else {
      moreText.style.display = "none";
      previewText.innerHTML = "In multicenter, double-blind, placebo-controlled 12-week trial on 628 patients...";
    }
  }


      