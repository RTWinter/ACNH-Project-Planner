function planTableFactory()

{var tempArray = JSON.parse(sessionStorage.plan)
		const table = document.getElementById("currentPlan")
		console.log(table)
		const listOfSteps = tempArray.map(plan => "<tr><td>"+plan.step+"</td><td>"+plan.building+"</td></tr>").join("\n")
		console.log(listOfSteps)
		return listOfSteps}