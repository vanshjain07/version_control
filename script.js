const app = document.getElementById("app");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll("nav li").forEach(item => {
  item.onclick = () => {
    location.hash = item.dataset.route;
  };
});

function render() {
  const route = location.hash.replace("#", "") || "home";

  app.className = "";
  setTimeout(() => app.className = "fade", 50);

  if (route === "home") {
    app.innerHTML = `
      <section class="hero">
        <div>
          <h2>FORMULA 1 DRIVER</h2>
          <h1>CHARLES LECLERC</h1>
          <p>Ferrari’s future. Monaco’s pride. A driver built for championships.</p>
        </div>
      </section>
    `;
  }

  if (route === "career") {
    app.innerHTML = `
      <section class="timeline">
        <h2>Career Timeline</h2>
        <div class="event">2018 – F1 Debut (Sauber)</div>
        <div class="event">2019 – Joined Ferrari</div>
        <div class="event">2022 – Championship Contender</div>
      </section>
    `;
  }

  if (route === "stats") {
    app.innerHTML = `
      <section class="stats">
        <div class="stat">5+<br><small>Wins</small></div>
        <div class="stat">25+<br><small>Podiums</small></div>
        <div class="stat">20+<br><small>Poles</small></div>
        <div class="stat">#16<br><small>Driver</small></div>
      </section>
    `;
  }

  if (route === "gallery") {
    app.innerHTML = `
      <section class="gallery">
        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70">
        <img src="https://images.unsplash.com/photo-1610128114197-485d933885c5">
        <img src="https://images.unsplash.com/photo-1617531653520-4893f5bdc1b0">
        <img src="https://images.unsplash.com/photo-1542362567-b07e54358753">
      </section>
    `;

    document.querySelectorAll(".gallery img").forEach(img => {
      img.onclick = () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
      };
    });
  }
}

modal.onclick = () => modal.style.display = "none";

window.addEventListener("load", render);
window.addEventListener("hashchange", render);
