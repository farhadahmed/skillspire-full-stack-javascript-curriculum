/*
	Every computer has a certain ampount of processing power - the ability
	to manage or manipulate data. The more tasks that are run on a computer,
	the more processing power is used. Each task or application that runs on 
	an Operating System (OS) is called a "process". Every OS has a way to 
	track how much of the computer's processing power is being used by every 
	process. 

	Create a function to emulate opening an application. The function should
	take one argument: the amount of processing power that the application
	needs in order to run. Have a list of numbers representing the processing
	power needed by current working applications. If the app being opened
	requires more processing power than the CPU currently has available,
	return "Cannot open. Close other applications". Otherwise, add the
	application to the list of processes and return "Application opened".
*/

function runKnowledgeCheck() {

	// We'll create an arbitrary number to represent our processing power: 100
	let computerProcessingPower = 100;
	// List of numbers representing processing power needed by currently
	// opened applications
	let processes = [];

	function openApplication(appProccessingPowerNeeded) {
		// Check if the app's processing power needed is greater than 
		// the available processing power.
		if (getAvailableProcessingPower() < appProccessingPowerNeeded) {
			return 'Cannot open. Close other applications.';
		}

		processes.push(appProccessingPowerNeeded);

		return 'Application opened';
	}


	// Return the available processing power by looping through
	// the list of currently running processes
	function getAvailableProcessingPower() {
		let availableProcessingPower = computerProcessingPower;

		for (let i = 0; i <= processes.length; i++) {
			availableProcessingPower -= processes[i];
		}

		return availableProcessingPower;
	}
}