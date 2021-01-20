function tableData() {
	const request = new XMLHttpRequest();
	request.open("GET", "https://jsonplaceholder.typicode.com/users");
	request.onload = () => {
		const response = request.response;
		const parseData = JSON.parse(response);

		const table = document.querySelector(".table");

		const keys = Object.keys(parseData[0]);

		const headName = keys[1];
		const headUser = keys[2];
		const headEmail = keys[3];
		const headAddress = keys[4];
		const headPhone = keys[5];

		const tableHead = `
			<th scope="col">${headName}</th>
			<th scope="col">${headUser}</th>
			<th scope="col">${headEmail}</th>
			<th scope="col">${headAddress}</th>
			<th scope="col">${headPhone}</th>
		`;

		const tr = document.getElementById("tr");
		if (table) {
			tr.innerHTML = tableHead;
		}

		let tableBody = "";
		for (let i = 0; i < parseData.length; i++) {
			const name = parseData[i].name;
			const username = parseData[i].username;
			const email = parseData[i].email;
			const phone = parseData[i].phone;

			const street = parseData[i].address.street;
			const suite = parseData[i].address.suite;
			const city = parseData[i].address.city;
			const zip = parseData[i].address.zipcode;

			const address = `
				<div>${street}</div>
				<div>${suite}</div>
				<div>${city}, ${zip}</div>
			`;

			tableBody += `
				<tr>
					<th data-label="${headName}" scope="row">${name}</th>
					<td data-label="${headUser}">${username}</td>
					<td data-label="${headEmail}">${email}</td>
					<td data-label="${headAddress}">${address}</td>
					<td data-label="${headPhone}">${phone}</td>
				</tr>
			`;
		}

		const tbody = document.getElementById("tbody");
		if (table) {
			tbody.innerHTML = tableBody;
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
