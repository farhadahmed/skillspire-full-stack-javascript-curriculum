'use strict';

(function() {

	let staffCreationForm = document.getElementById('staff-creation-form');
	let fnameInput = document.getElementById('fname-input');
	let lnameInput = document.getElementById('lname-input');
	let aliasInput = document.getElementById('alias-input');
	let emailInput = document.getElementById('email-input');
	let phoneInput = document.getElementById('phone-input');
	let tableBody = document.getElementById('table-body');

	// As soon as the page loads, retrieve staff from localStorage and fill the table
	// with the staff objects
	fillTableFromStorage();

	staffCreationForm.addEventListener('submit', function() {
		event.preventDefault();

		if (localStorage.staffMembers) {
			/*
				- Retrieve array of staff from local storage
				- Create obj from input boxes
				- Store new obj in array
				- Store array in local storage
				- Pull from localStorage to update table
			*/
			let staffMembersArr = JSON.parse(localStorage.getItem('staffMembers'));
			createStaffAndPushToArr(staffMembersArr);
			locallyStoreArr(staffMembersArr);
			clearInputs();
			fillTableFromStorage();
			// let newStaffMember = new StaffMember(fnameInput.value, lnameInput.value, aliasInput.value, emailInput.value, phoneInput.value);
			// staffMembersArr.push(newStaffMember);
			// localStorage.setItem('staffMembers', JSON.stringify(staffMembersArr));
			

		} else {
			/*
				- Create empty staff array
				- Create obj from input boxes
				- Store new object in array
				- Store array in local storage
				- Pull from localStorage to update table
			*/
			let staffMembersArr = [];
			createStaffAndPushToArr(staffMembersArr);
			locallyStoreArr(staffMembersArr);
			clearInputs();
			fillTableFromStorage();
			// let newStaffMember = new StaffMember(fnameInput.value, lnameInput.value, aliasInput.value, emailInput.value, phoneInput.value);
			// staffMembersArr.push(newStaffMember);
			// localStorage.setItem('staffMembers', JSON.stringify(staffMembersArr));
		}
	});

	// Constructor function for creating staff member objects
	function StaffMember(fname, lname, alias, email, phone) {
		this.fname = fname;
		this.lname = lname;
		this.alias = alias;
		this.email = email;
		this.phone = phone;
	}

	// Grab array of staff members from local storage and use the data to update table
	function fillTableFromStorage() {
		if (localStorage.staffMembers) {
			let staffMembersArr = JSON.parse(localStorage.getItem('staffMembers'));

			tableBody.innerHTML = '';
			for (let i=0; i<staffMembersArr.length; i++) {
				updateTable(staffMembersArr[i].fname, staffMembersArr[i].lname, staffMembersArr[i].alias, staffMembersArr[i].email, staffMembersArr[i].phone);
			}
		}
	}

	// Update the table by adding a new row of data for a staff member
	function updateTable(fname, lname, alias, email, phone) {
		tableBody.innerHTML += 
		'<tr>' +
			'<td>'+fname+'</td>'+
			'<td>'+lname+'</td>'+
			'<td>'+alias+'</td>'+
			'<td>'+email+'</td>'+
			'<td>'+phone+'</td>'+
		'</tr>'
	}

	// Get values from input boxes to create the staff object
	function createStaffAndPushToArr(staffMembersArr) {
		let newStaffMember = new StaffMember(fnameInput.value, lnameInput.value, aliasInput.value, emailInput.value, phoneInput.value);
		staffMembersArr.push(newStaffMember);
	}

	// Store the staff members array to local storage
	function locallyStoreArr(staffMembersArr) {
		localStorage.setItem('staffMembers', JSON.stringify(staffMembersArr));
	}

	function clearInputs() {
		fnameInput.value = '';
		lnameInput.value = '';
		aliasInput.value = '';
		emailInput.value = '';
		phoneInput.value = '';
	}
})();