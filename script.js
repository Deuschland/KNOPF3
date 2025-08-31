const data = {
  "SCHMIEDER KLINIK": {
    "Name": "SCHMIEDER KLINIK",
    "Kostenträger": "3491",
    "Kostenträger - Name / Ort": "SCHMIEDER KLINIK",
    "Von Objekt / Ort": "SCHM. GAILINGEN",
    "Nach Objekt / Ort": "SCHM. ALLENSBACH / MRT",
    "Statistik": "",
    "Zusatzfeld": "",
    "Tarif": "9111",
    "Zusatztext für Rechnung": ""
  }
};

const mainContainer = document.getElementById("main-buttons");
const output = document.getElementById("output");

const btn = document.createElement("button");
btn.textContent = "SCHMIEDER KLINIK";
btn.addEventListener("click", () => showTable("SCHMIEDER KLINIK", btn));
mainContainer.appendChild(btn);

function showTable(category, clickedBtn) {
  document.querySelectorAll("#main-buttons button").forEach(b => b.classList.remove("selected"));
  clickedBtn.classList.add("selected");

  const entry = data[category];

  const fields = [
    "Name",
    "Kostenträger",
    "Kostenträger - Name / Ort",
    "Von Objekt / Ort",
    "Nach Objekt / Ort",
    "Statistik",
    "Zusatzfeld",
    "Tarif",
    "Zusatztext für Rechnung"
  ];

  const rows = fields.map(field => {
    const value = entry[field] && entry[field].trim() !== "" ? entry[field] : "—";
    return `<tr><td class="label">${field}</td><td class="value">${value}</td></tr>`;
  }).join("");

  output.innerHTML = `<table class="vertical-table"><tbody>${rows}</tbody></table>`;
}
