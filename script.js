const homeSearchForm = document.querySelector(".site-search");
const catalogSearchForm = document.querySelector(".catalog-search");
const searchInput = document.querySelector("#searchbar");

if (homeSearchForm) {
    const searchableCards = document.querySelectorAll("[data-searchable]");

    homeSearchForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const query = searchInput.value.trim().toLowerCase();

        searchableCards.forEach((card) => {
            const matches = !query || card.dataset.searchable.toLowerCase().includes(query);
            card.hidden = !matches;
        });

        document.querySelector("#forces").scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

if (catalogSearchForm) {
    const catalogItems = document.querySelectorAll(".catalog-section > div, .catalog-section > article");

    catalogSearchForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const query = searchInput.value.trim().toLowerCase();

        catalogItems.forEach((item) => {
            const matches = !query || item.textContent.toLowerCase().includes(query);
            item.hidden = !matches;
        });

        document.querySelector(".catalog-section").scrollIntoView({ behavior: "smooth", block: "start" });
    });
}
