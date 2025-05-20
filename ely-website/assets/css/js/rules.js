document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.target).classList.add("active");
    });
  });

  // 載入法典內容
  const types = ["constitution", "criminal", "civil", "trade", "international"];
  types.forEach(type => {
    fetch(`data/rules/${type}.html`)
      .then(res => res.text())
      .then(html => {
        document.getElementById(type).innerHTML = html;
      });
  });
});