/*
Discuss what a LinkedList is. Discuss when to use 
LinkedList vs array. 

Cover the following functions
- Check if empty
- Prepend
- Append
- Check size
- Contains
- Remove
*/

// Use the test function to invoke functions with various parameters
function test() {
	// Insert tests here
}

// Initialize an empty linked list
function LinkedList() {
	this.head = null;
}


// If the head of the list is null, the list is empty
LinkedList.prototype.isEmpty = function() {
	if (this.head) {
		return false;
	} else {
		return true;
	}
}

LinkedList.prototype.prepend = function(val) {
	// New node's next points to the current head node
	let newNode = {
		value: val,
		next: this.head
	}
	// Make new node the list's head
	this.head = newNode;
}

LinkedList.prototype.append = function(val) {
	let newNode = {
		value: val,
		next: null
	};

	// If the list is empty, make the newNode the head
	if (this.isEmpty()) {
		this.head = newNode;
	} else {
		let current = this.head;

		// The loop moves current to the end of the list and then appends newNode
		while (current.next !== null) {
			current = current.next;
		}

		current.next = newNode;
	}
}

// Returns the size of the list
LinkedList.prototype.size = function() {

	// If list is empty (i.e., if this.head is null), while loop is skipped and 0 is returned.
	let current = this.head;
	let count = 0;

	// As current moves to the next node, count is incremented
	while (current !== null) {
		current = current.next;
		count++;
	}

	return count;
}

LinkedList.prototype.print = function() {
	if (this.isEmpty()) {return 'empty list'};

	let current = this.head;
	let output = '';
	while (current !== null) {
		output += '[' + current.value + ']-';
		current = current.next;
	};

	return output;
};


LinkedList.prototype.contains = function(val) {
	current = this.head;

	// Current move through the list and returns true if any node's value is equal to val
	while (current !== null) {
		if (current.value === val) {return true;}
		current = current.next;
	}
	return false;
}

LinkedList.prototype.remove = function(val) {
	// First use contains method to see if list contains the value passed in argument
	if (!this.contains(val)) {
		return 'List doesn\'t contain the value.';
		// If the head contains the value, make the head's next the new head
	} else if (this.head.value === val) {
		this.head = this.head.next;
		return 'Head removed.';
	} else {
		let current = this.head.next;
		let previous = this.head;
		// Move current and previous through the list until either val equals current.value or current hits the end of the list
		while (current !== null) {
			if (current.value === val) {
				previous.next = current.next;
				return val + 'removed.'
			};
			current = current.next;
			previous = previous.next;
		};
	};
};


test();