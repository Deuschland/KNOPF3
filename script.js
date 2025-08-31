const data = {
  "SCHMIEDER KLINIK": [
    {
      "Kostenträger - Nr.": "3491",
      "Tarif": "9111",
      "Kostenträger - Name / Ort": "SCHMIEDER KLINIK",
      "Zusatztext fur Rechnung": "",
      "Von Objekt / Ort": "SCHM. GAILINGEN",
      "Nach Objekt / Ort": "SCHM. ALLENSBACH / MRT",
      "Statistik": "",
      "Zusatzfeld": "",
      "Name": "SCHMIEDER KLINIK"
    }
  ],
  "PRIVAT": [
    {
      "Kostenträger - Nr.": "1",
      "Tarif": "6600",
      "Kostenträger - Name / Ort": "PRIVAT",
      "Zusatztext fur Rechnung": "",
      "Von Objekt / Ort": "WHG",
      "Nach Objekt / Ort": "",
      "Statistik": "",
      "Zusatzfeld": "",
      "Name": "PRIVAT"
    }
  ],
  "Hilfeleistung bzw. Tragehilfen/privat": [
    {
      "Kostenträger - Nr.": "1",
      "Tarif": "2800",
      "Kostenträger - Name / Ort": "Hilfeleistung bzw. Tragehilfen/privat",
      "Zusatztext fur Rechnung": "HOCH HELFEN",
      "Von Objekt / Ort": "4204",
      "Nach Objekt / Ort": "WHG",
      "Statistik": "93",
      "Zusatzfeld": "",
      "Name": "Hilfeleistung bzw. Tragehilfen/privat"
    }
  ],
  "HAUSNOTRUF": [
    {
      "Kostenträger - Nr.": "8",
      "Tarif": "8609",
      "Kostenträger - Name / Ort": "HAUSNOTRUF",
      "Zusatztext fur Rechnung": "HNR NR. ___",
      "Von Objekt / Ort": "4204",
      "Nach Objekt / Ort": "WHG",
      "Statistik": "89",
      "Zusatzfeld": "8",
      "Name": "HAUSNOTRUF"
    }
  ],
  "ZFP Reichenau": [
    {
      "Kostenträger - Nr.": "2775",
      "Tarif": "9201",
      "Kostenträger - Name / Ort": "ZFP Reichenau",
      "Zusatztext fur Rechnung": "",
      "Von Objekt / Ort": "ZFP ST. 92",
      "Nach Objekt / Ort": "",
      "Statistik": "",
      "Zusatzfeld": "",
      "Name": "ZFP Reichenau"
    }
  ],
  "LEERFAHRT": [
    {
      "Kostenträger - Nr.": "9",
      "Tarif": "<>",
      "Kostenträger - Name / Ort": "LEERFAHRT",
      "Zusatztext fur Rechnung": "",
      "Von Objekt / Ort": "4204",
      "Nach Objekt / Ort": "4202 / 4203 / 4205 / 4206",
      "Statistik": "91",
      "Zusatzfeld": "7",
      "Name": "DIENSTFAHRT"
    },
    {
      "Kostenträger - Nr.": "9",
      "Tarif": "<>",
      "Kostenträger - Name / Ort": "LEERFAHRT",
      "Zusatztext fur Rechnung": "",
      "Von Objekt / Ort": "4204",
      "Nach Objekt / Ort": "",
      "Statistik": "81",
      "Zusatzfeld": "6",
      "Name": "FEHLFAHRT"
    }
  ],
  "KH - KONSTANZ": [
    {
      "Kostenträger - Nr.": "1203",
      "Tarif": "9201",
      "Kostenträger - Name / Ort": "KH - KONSTANZ",
      "Zusatztext fur Rechnung": "",
      "Von Objekt / Ort": "ZNA MED KONSTANZ",
      "Nach Objekt / Ort": "ZNA MED SINGEN",
      "Statistik": "21",
      "Zusatzfeld": "",
      "Name": "KH - KONSTANZ"
    }
  ],
  "KH - SINGEN": [
    {
      "Kostenträger - Nr.": "3214",
      "Tarif": "9201",
      "Kostenträger - Name / Ort": "KH - SINGEN",
      "Zusatztext fur Rechnung": "",
      "Von Objekt / Ort": "ZNA MED SINGEN",
      "Nach Objekt / Ort": "ZNA MED KONSTANZ",
      "Statistik": "21",
      "Zusatzfeld": "",
      "Name": "KH - SINGEN"
    }
  ]
};

const categories = Object.keys(data);

const mainContainer = document.getElementById("main-buttons");
const detailContainer = document.getElementById("detail-buttons");
const output = document.getElementById("output");
const detailsBlock = document.getElementById("details");
const selectedCategory = document.getElementById("selected-category");

categories.forEach(cat => {
  const btn = document.createElement("button");
  btn.textContent = cat;
  btn.addEventListener("click", () => showDetails(cat, btn));
  mainContainer.appendChild(btn);
});

function showDetails(category, clickedBtn) {
  selectedCategory.textContent = category;
  detailContainer.innerHTML = "";
  output.textContent = "Результат: —";
  detailsBlock.classList.remove("hidden");

  document.querySelectorAll("#main-buttons button").forEach(b => b.classList.remove("selected"));
  clickedBtn.classList.add("selected");

  data[category].forEach(entry => {
    const btn = document.createElement("button");
    btn.textContent = entry["Tarif"];
    btn.addEventListener("click", () => {
      document.querySelectorAll("#detail-buttons button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      showEntry(entry);
    });
    detailContainer.appendChild(btn);
  });
}

function showEntry(entry) {
  const requiredFields = [
    'Kostenträger - Nr.', 'Tarif', 'Kostenträger - Name / Ort',
    'Zusatztext fur Rechnung', 'Von Objekt / Ort', 'Nach Objekt / Ort',
    'Statistik', 'Zusatzfeld', 'Name'
  ];

  const html = requiredFields.map(field => {
    const value = entry[field] && entry[field].trim() !== "" ? entry[field] : "—";
    return `<strong>${field}</strong>: ${value}`;
  }).join("<br>");

  output.innerHTML = html;
}

// PWA: реєстрація service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
