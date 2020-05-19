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
  const names2 = people.map(person => `<tr>
  										<td>${person.Name}</td>
  										<td>${person.Type}</td>
  										<td>${person.Cost} 000</td>
  									</tr>`).join("\n");
  return `<Table border="1">
  			<tr>
  				<th>Name</th>
          <th>Type</th>
  				<th>Cost</th>
  			</tr>${names2}</Table>`
}
