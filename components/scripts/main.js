function tableData() {
	let request = new XMLHttpRequest();
	request.open("GET", "https://jsonplaceholder.typicode.com/users");
	request.onload = () => {
		let response = request.response;
		let parseData = JSON.parse(response);

		let table = document.querySelector(".table");

		let keys = Object.keys(parseData[0]);
		// console.log(keys.join(", "));

		let headName = keys[1];
		let headUser = keys[2];
		let headEmail = keys[3];
		let headAddress = keys[4];
		let headPhone = keys[5];

		let tableHead = `
		    <th scope="col">${headName}</th>
		    <th scope="col">${headUser}</th>
		    <th scope="col">${headEmail}</th>
		    <th scope="col">${headAddress}</th>
		    <th scope="col">${headPhone}</th>
		`;

		let tr = document.getElementById("tr");
		if (table) {
			tr.innerHTML = tableHead;
		}

		let tableBody = "";
		for (let i = 0; i < parseData.length; i++) {
			let name = parseData[i].name;
			let username = parseData[i].username;
			let email = parseData[i].email;
			let phone = parseData[i].phone;

			let street = parseData[i].address.street;
			let suite = parseData[i].address.suite;
			let city = parseData[i].address.city;
			let zip = parseData[i].address.zipcode;

			let address = `
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

		let tbody = document.getElementById("tbody");
		if (table) {
			tbody.innerHTML = tableBody;
		}
	};
	request.send();
}

function copyrightYear() {
	let c = document.getElementById("date");
	let d = new Date();
	c.innerHTML = d.getFullYear();
}

window.onload = () => {
	tableData();
	copyrightYear();
};
