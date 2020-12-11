//get the counters
const counter = document.querySelectorAll(".counter")

//now we loop through the node
counter.forEach(counter => {
	//selects the div and adds a text
	counter.innerText = "0"

	//make another function for counting up
	const updateCounter = () => {
		const target = +counter.getAttribute("data-target")
		const c = +counter.innerText

		const increment = target / 200

		//add an if statement

		if(c < target) {
			counter.innerText = `${Math.ceil(c + increment)}`
			//keep calling update counter
			setTimeout(updateCounter, 1)
		}
	}
		//call the function
		updateCounter()
})