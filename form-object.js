const form = document.querySelector("form");
const onSubmit = (event) => {
	event.preventDefault();

	let item = document.querySelector("#item-input");
	let priority = document.querySelector("#priority-input");
	let checkbox = document.querySelector("#checkbox-recurring");
	console.log(item.value, priority.value, checkbox.value);

	// FormData() object.
	const formData = new FormData(event.currentTarget);
	item = formData.get("item");
	priority = formData.get("priority");
	checkbox = formData.get("recurring");
	console.log(item, priority, checkbox);

	// get an iterator of FormData()
	const entries = formData.entries();
	for (const entry of entries) {
		console.log(entry);
	}
};

form.addEventListener("submit", onSubmit);
