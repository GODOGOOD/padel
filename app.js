function render(){

  document.getElementById("trainer_name").value = data.trainer.name;

  ["I","A1","A2","B","E"].forEach(p=>{
    document.getElementById("lesson_"+p).value = data.lesson[p];
  });

  renderPlayers();
  renderChecklist();
}

function renderPlayers(){
  const el = document.getElementById("players");
  el.innerHTML = "";

  data.players.forEach((p,i)=>{
    el.innerHTML += `
      <div class="card">
        <input value="${p.name}"
        onchange="data.players[${i}].name=this.value">

        <textarea
        onchange="data.players[${i}].notes=this.value">${p.notes||""}</textarea>
      </div>
    `;
  });
}

function renderChecklist(){
  const el = document.getElementById("checklist");
  el.innerHTML = "";

  Object.keys(data.checklist).forEach(k=>{
    el.innerHTML += `
      <label>
        <input type="checkbox"
        ${data.checklist[k] ? "checked":""}
        onchange="data.checklist['${k}']=this.checked">
        ${k}
      </label><br>
    `;
  });
}

function addPlayer(){
  data.players.push({name:"Nieuwe speler", notes:""});
  render();
}

function saveData(){
  data.trainer.name = document.getElementById("trainer_name").value;

  ["I","A1","A2","B","E"].forEach(p=>{
    data.lesson[p] = document.getElementById("lesson_"+p).value;
  });

  localStorage.setItem("padel_data", JSON.stringify(data));
  alert("Saved!");
}

function loadData(){
  const d = localStorage.getItem("padel_data");
  if(d){
    Object.assign(data, JSON.parse(d));
    render();
  }
}

render();
