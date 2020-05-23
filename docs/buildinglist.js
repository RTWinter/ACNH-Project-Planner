const fetchPromise = fetch(
"https://api.github.com/repos/RTWinter/ACNH-Project-Planner/contents/buildinglist.json?ref=master",
  { headers: { Accept: "application/vnd.github.v3.raw+json" } }
);
const main = document.getElementById("bldgs");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  main.innerHTML = listOfNames(people);
});
function listOfNames(people) {
  const names = people.map(person => `<option value="${person.ID}">${person.Name}</option>`).join("\n");
  return `<option value="N/A">Choose a Building</option>${names}`
}
