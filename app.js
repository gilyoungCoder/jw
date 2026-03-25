(() => {
  const grid = document.getElementById("productGrid");
  const emptyState = document.getElementById("emptyState");
  const categoryButtons = document.querySelectorAll(".cat-btn");

  const CATEGORY_LABELS = {
    audio: "AUDIO",
    tech: "TECH",
    life: "LIFESTYLE",
    food: "FOOD"
  };

  const ARROW_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>`;

  function renderProducts(category) {
    const filtered = category === "all"
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === category);

    grid.innerHTML = "";
    emptyState.style.display = filtered.length ? "none" : "block";

    filtered.forEach((product, i) => {
      const card = document.createElement("article");
      card.className = "product-card";
      card.style.animationDelay = `${i * 0.08}s`;

      card.innerHTML = `
        <div class="product-image-wrap">
          <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
          <div class="product-image-overlay"></div>
        </div>
        <div class="product-info">
          <span class="product-category-tag">${CATEGORY_LABELS[product.category] || product.category}</span>
          <h2 class="product-name">${product.name}</h2>
          <p class="product-desc">${product.desc}</p>
          <div class="product-bottom">
            <span class="product-price">${product.price}</span>
            <a class="product-link" href="${product.link}" target="_blank" rel="noopener noreferrer nofollow">
              BUY ${ARROW_SVG}
            </a>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.category);
    });
  });

  renderProducts("all");
})();