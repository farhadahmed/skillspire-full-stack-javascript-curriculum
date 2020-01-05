function validateUserId(userId) {
	userId = userId.split('');
	for (let i = 0; i < userId.length; i++) {
		if (userId[i] === ' ') {
			return 'Invalid input. User ID cannot have spaces.';
		}
	}

	return 'User created.';
}

// console.log(validateUserId('123 123'));


function validateUserId2(userId) {
	if (/\s/g.test(userId)) {
		return 'Invalid input. User ID cannot have spaces.';
	} 
	return 'User created.';
}

console.log(validateUserId2(user1.userId));
console.log(validateUserId2(user2.userId));