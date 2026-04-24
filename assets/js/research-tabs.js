(function () {
  const tablist = document.querySelector(".research-tabs");
  if (!tablist) return;

  const tabs = tablist.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('.tab-panel[role="tabpanel"]');
  const ids = Array.from(tabs).map((t) => t.getAttribute("aria-controls"));

  function showPanel(panelId) {
    const id = ids.includes(panelId) ? panelId : ids[0];

    tabs.forEach((tab) => {
      const controls = tab.getAttribute("aria-controls");
      const active = controls === id;
      tab.setAttribute("aria-selected", active);
      tab.classList.toggle("research-tab-active", active);
    });

    panels.forEach((panel) => {
      const match = panel.id === id;
      panel.hidden = !match;
    });

    const hash = "#" + id.replace(/^panel-/, "");
    if (window.location.hash !== hash) {
      history.replaceState(null, "", hash);
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      showPanel(tab.getAttribute("aria-controls"));
    });
  });

  function hashToPanelId(raw) {
    if (raw === "drafts") return "panel-drafts";
    if (raw === "books" || raw === "book") return "panel-books";
    if (raw === "reviews") return "panel-reviews";
    if (raw === "published-articles" || raw === "publications")
      return "panel-published-articles";
    return "panel-published-articles";
  }

  window.addEventListener("hashchange", () => {
    const raw = (location.hash || "").slice(1);
    showPanel(hashToPanelId(raw));
  });

  const initial = (location.hash || "#published-articles").slice(1);
  showPanel(hashToPanelId(initial));
})();
