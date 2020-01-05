/*

Use only JS for this assignment - no HTML or CSS.

You're working for an online school and are working on part of their report card feature that tells
students how they are doing. Create a function that takes a letter grade. If the student has an A,
log "You have an A. Well done!", if they have a B, log "You have a B.", if they have a C, log "You
have a C. Work harder.", if they have a D, log "You have a D. An automatic report is being sent to 
your parents.", If they have an F, log "You have an F. This is what happens when you don't go to 
class."

*/

function reportCardStatus(studentGrade) {
	if (studentGrade === 'A') {
		console.log('You have an A. Well done!');
	}
	if (studentGrade === 'B') {
		console.log('You have a B.');
	}
	if (studentGrade === 'F') {
		console.log('You have an F. This is what happens when you don\'t go to class.');
	}
}


reportCardStatus('A');
reportCardStatus('B');
reportCardStatus('F');