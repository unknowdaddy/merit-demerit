let students = JSON.parse(localStorage.getItem("students")) || [];

function saveStudents() {
  localStorage.setItem("students", JSON.stringify(students));
}

function renderStudents() {
  const container = document.getElementById("students");
  container.innerHTML = "";
  students.forEach((student, index) => {
    const div = document.createElement("div");
    div.className = "student";
    div.innerHTML = `
      <span><b>${student.name}</b> – Score: ${student.score}</span>
      <div>
        <button onclick="addMerit(${index})">+ Merit</button>
        <button onclick="addDemerit(${index})">- Demerit</button>
        <button onclick="resetScore(${index})">Reset</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function addStudent() {
  const nameInput = document.getElementById("studentName");
  const name = nameInput.value.trim();
  if (name) {
    students.push({ name, score: 0 });
    saveStudents();
    renderStudents();
    nameInput.value = "";
  }
}

function addMerit(index) {
  students[index].score++;
  saveStudents();
  renderStudents();
}

function addDemerit(index) {
  students[index].score--;
  saveStudents();
  renderStudents();
}

function resetScore(index) {
  students[index].score = 0;
  saveStudents();
  renderStudents();
}

renderStudents();
