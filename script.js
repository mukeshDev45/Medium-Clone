// =============================
// 🔹 Navbar Scroll Effect
// =============================
window.addEventListener("scroll", () => {
  const topbar = document.querySelector(".topbar");

  if (window.scrollY > 20) {
    topbar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  } else {
    topbar.style.boxShadow = "none";
  }
});


// =============================
// 🔹 Tabs Switching
// =============================
function activateTabs() {
  const tabs = document.querySelectorAll(".tabs span");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelector(".tabs .active")?.classList.remove("active");
      tab.classList.add("active");
    });
  });
}


// =============================
// 🔹 Search Function
// =============================
function activateSearch() {
  const searchInput = document.querySelector(".topbar input");
  const posts = document.querySelectorAll(".post");

  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    posts.forEach(post => {
      const title = post.querySelector("h2")?.innerText.toLowerCase();

      if (title && title.includes(value)) {
        post.style.display = "flex";
      } else {
        post.style.display = "none";
      }
    });
  });
}


// =============================
// 🔹 Post Click Alert
// =============================
function activatePostClick() {
  const posts = document.querySelectorAll(".post");

  posts.forEach(post => {
    post.addEventListener("click", () => {
      const title = post.querySelector("h2")?.innerText;
      if (title) {
        alert("Opening: " + title);
      }
    });
  });
}


// =============================
// 🔹 Sidebar Navigation (MAIN)
// =============================
const sidebarItems = document.querySelectorAll(".sidebar li");
const feed = document.querySelector(".feed");

// Home content (default save)
const homeContent = feed.innerHTML;

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {

    // Highlight active
    sidebarItems.forEach(i => i.style.fontWeight = "normal");
    item.style.fontWeight = "bold";

    const text = item.innerText.trim();

    // 🔹 HOME
    if (text.includes("Home")) {
      feed.innerHTML = homeContent;
      activateTabs();
      activateSearch();
      activatePostClick();
    }

    // 🔹 PROFILE
    else if (text.includes("Profile")) {
      feed.innerHTML = `
        <h2>👤 Your Profile</h2>
        <p><strong>Name:</strong> Mukesh</p>
        <p><strong>Email:</strong> example@gmail.com</p>
        <p><strong>Bio:</strong> Frontend Developer 🚀</p>
      `;
    }

    // 🔹 LIBRARY
    else if (text.includes("Library")) {
      feed.innerHTML = `
        <h2>📚 Your Library</h2>
        <p>No saved articles yet.</p>
      `;
    }

    // 🔹 STORIES
    else if (text.includes("Stories")) {
      feed.innerHTML = `
        <h2>📝 Your Stories</h2>
        <p>You haven't written any stories.</p>
      `;
    }

    // 🔹 STATS
    else if (text.includes("Stats")) {
      feed.innerHTML = `
        <h2>📊 Stats</h2>
        <p>Views: 120</p>
        <p>Followers: 45</p>
      `;
    }

  });
});


// =============================
// 🔹 Initial Activation
// =============================
activateTabs();
activateSearch();
activatePostClick();

