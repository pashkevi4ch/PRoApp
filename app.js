function changeColor(eId) {
  let strs = ["String 1", "String 2", "String 3"];
  const tasks = document.getElementById(eId);
  console.log(tasks);
  for (var i in strs) {
    var anchor = document.createElement("li");
    anchor.innerText = strs[i];
    tasks.appendChild(anchor);
  }
}


function goTo(path) {
    window.location.assign(path)
}

function submitTask() {
    task = document.getElementById("inTask").value;
    console.log(task);
}