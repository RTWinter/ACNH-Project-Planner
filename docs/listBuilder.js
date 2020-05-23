function listBuilder()

{var oldItems = JSON.parse(sessionStorage.getItem('plan')) || []; // Number of items in current array
	var thisStep = oldItems.length + 1; // Number of current step
	var job = document.getElementById("projName")
	var jobName = job.value // Name of project, will be used to save multiple projects to local storage
	var e = document.getElementById("bldgs")
	var strBldg = e.value // id of building added in step
	var e2 = document.getElementById("inf")
	var strBandI = e2.value // id of infrastructure added in current step
	console.log(strBldg) // debugging
	console.log(strBandI)
	console.log(jobName)
	var newItem = {
		name: jobName,
		step: thisStep,
		building: strBldg,
		bandi: strBandI
	}; // Creates a new array? Object?

	console.log("Old items"); // Moar debug
	console.log(oldItems);
	console.log("New items");
	console.log(newItem);
	oldItems.push(newItem);
	sessionStorage.setItem('plan', JSON.stringify(oldItems));
	console.log(sessionStorage.plan);};
	function planTableFactory()

{var tempArray = JSON.parse(sessionStorage.plan)
		const table = document.getElementById("currentPlan")
		console.log(table)
		const listOfSteps = tempArray.map(plan => "<tr><td>"+plan.step+"</td><td>"+plan.building+"<br>"+plan.bandi+"</td></tr>").join("\n")
		console.log(listOfSteps)
		return listOfSteps}