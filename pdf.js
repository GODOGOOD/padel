function buildPDF(){

  const pdf = document.getElementById("pdf");
  pdf.innerHTML = "";

  ["I","A1","A2","B","E"].forEach(p=>{

    pdf.innerHTML += `
      <section class="page">
        <h1>${p}</h1>

        <h3>Les</h3>
        <p>${data.lesson[p]}</p>

        <h3>Trainer</h3>
        <p>${data.trainer.name}</p>

        <h3>Spelers</h3>
        ${data.players.map(pl=>`
          <div>
            <b>${pl.name}</b><br>
            ${pl.notes || ""}
          </div>
        `).join("")}

        <h3>Checklist</h3>
        <pre>${JSON.stringify(data.checklist,null,2)}</pre>
      </section>
    `;

  });

}

function exportPDF(){
  buildPDF();
  window.print();
}
