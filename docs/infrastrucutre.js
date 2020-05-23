const fetchPromise2 = fetch(
"https://api.github.com/repos/RTWinter/ACNH-Project-Planner/contents/infrastructure.json?ref=master",
  { headers: { Accept: "application/vnd.github.v3.raw+json" } }
);
const bAndI = document.getElementById("inf");
fetchPromise2.then(response => {
  return response.json();
}).then(people => {
  bAndI.innerHTML = listOfNames2(people);
});
function listOfNames2(people) {
  const names2 = people.map(person => `<option cost = ${person.Cost} value="${person.ID}">${person.Name}</option>`).join("\n");
  return `${names2}`
};
  console.log("Names2")
  console.log(names2)