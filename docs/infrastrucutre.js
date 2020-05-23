const fetchPromise2 = fetch(
"https://api.github.com/repos/RTWinter/ACNH-Project-Planner/contents/infrastructure.json?ref=master",
  { headers: { Accept: "application/vnd.github.v3.raw+json" } }
);
const bAndI = document.getElementById("bAndI");
fetchPromise2.then(response => {
  return response.json();
}).then(people => {
  bAndI.innerHTML = listOfNames2(people);
});
function listOfNames2(people) {
  const names2 = people.map(person => `<option value="${person.ID}">${person.Name}</option>`).join("\n");
  return `<select id="inf", name="Bridges & Inclines"><option value="N/A">Choose Bridge/Incline</option>${names2}</select>`
}
