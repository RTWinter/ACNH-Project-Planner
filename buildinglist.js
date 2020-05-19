const fetchPromise = fetch(
"https://api.github.com/repos/RTWinter/ACNH-Project-Planner/contents/buildinglist.json?ref=master",
  { headers: { Accept: "application/vnd.github.v3.raw+json" } }
);
const main = document.getElementById("main");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  main.innerHTML = listOfNames(people);
});
function listOfNames(people) {
  const names = people.map(person => `<tr>
  										<td>${person.Name}</td>
  										<td>${person.L} X ${person.W}</td>
  										<td>${person.Cost} 000</td>
  									</tr>`).join("\n");
  return `<Table border="1">
  			<tr>
  				<th>Name</th>
  				<th>Size</th>
  				<th>Cost</th>
  			</tr>${names}</Table>`
}
