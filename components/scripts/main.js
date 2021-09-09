function tableData() {
	const request = new XMLHttpRequest();
	request.open("GET", "https://jsonplaceholder.typicode.com/users");
	request.onload = () => {
		const response = request.response;
		const parseData = JSON.parse(response);

		const table = document.querySelector(".table");
		const keys = Object.keys(parseData[0]).splice(1, 5);
		// console.log(keys);

		let headItems = [];
		keys.forEach((key) => {
			headItems.push(`<th scope=\"col\">${key}</th>`);
		});
		// console.log(headItems);

		let bodyItems = [];
		parseData.forEach((data) => {
			bodyItems.push(`<tr>
				<th data-label=\"${keys[0]}\" scope=\"row\">${data.name}</th>
				<td data-label=\"${keys[1]}\">${data.username}</td>
				<td data-label=\"${keys[2]}\">${data.email}</td>
				<td data-label=\"${keys[3]}\">
					${data.address.street}<br/>
					${data.address.suite}<br/>
					${data.address.city}, ${data.address.zipcode}
				</td>
				<td data-label=\"${keys[4]}\">${data.phone}</td>
			</tr>`);
		});
		// console.log(bodyItems);

		const tr = document.getElementById("tr");
		const tbody = document.getElementById("tbody");
		if (table) {
			tr.innerHTML = headItems.join(" ");
			tbody.innerHTML = bodyItems.join(" ");
		}
	};
	request.send();
}

function copyrightYear() {
	const current = document.getElementById("date");
	const date = new Date();
	if (current) {
		current.innerHTML = date.getFullYear();
	}
}

window.onload = () => {
	tableData();
	copyrightYear();
};
