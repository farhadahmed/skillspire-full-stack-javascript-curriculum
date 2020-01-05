/*
LinkedList functions
- Check if empty
- Check size
- Prepend
- Append
- Contains
- Remove
*/

function test() {
	var list = new LinkedList;
	console.log('Expect true.');
	console.log(list.isEmpty());
	console.log('Expect [5]-');
	list.prepend(5);
	console.log(list.print());
	console.log('Expect [5]-[7]-');
	list.append(7);
	console.log(list.print());
	console.log('Expect false');
	console.log(list.contains(32));
	console.log('Expect true.');
	console.log(list.contains(7));
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


// Returns the size of the list
LinkedList.prototype.size = function() {

	// If list is empty (i.e., if this.head is null), while loop is skipped and 0 is returned.
	var current = this.head;
	var count = 0;

	// As current moves to the next node, count is incremented
	while (current !== null) {
		current = current.next;
		count++;
	}

	return count;
}

LinkedList.prototype.print = function() {
	if (this.isEmpty()) {return 'empty list'};

	var current = this.head;
	var output = '';
	while (current !== null) {
		output += '[' + current.value + ']-';
		current = current.next;
	};

	return output;
};

LinkedList.prototype.prepend = function(val) {
	// New node's next points to the current head node
	var newNode = {
		value: val,
		next: this.head
	}
	// Make new node the list's head
	this.head = newNode;
}

LinkedList.prototype.append = function(val) {
	var newNode = {
		value: val,
		next: null
	};

	// If the list is empty, make the newNode the head
	if (this.isEmpty()) {
		this.head = newNode;
	} else {
		var current = this.head;

		// The loop moves current to the end of the list and then appends newNode
		while (current.next !== null) {
			current = current.next;
		}

		current.next = newNode;
	}
}


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
		var current = this.head.next;
		var previous = this.head;
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