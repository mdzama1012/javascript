/**
 * Note: use source tab of browser's developer tool to understand working properly.
 * javascript is a synchronous and single threaded language.
 * everything in javascript happens inside an execution context.
 * javascript execution context have 2 components
 * memory (variable environment)
 * code (thread of execution)
 * when javascript start running 2 phases takes place:
 * memory creation phase.
 * and, code execution phase.
 * the memory space whole code of function is stored. (like a string).
 * whenever function is invoked a new execution context is created for the function.
 * here also 2 phases takes place:
 * memory creation phase
 * and, code execution phase.
 * after the execution of function the execution context of function is cleared.
 * all the execution context are managed inside the call stack.
 * whenever EC is created it is pushed to stack and when it is deleted it is removed from the stack.
 */

var x = 5; // bind to the window object.
// we can call these function before declaration because of hoisting.
a();
b();

function a() {
	var x = 5; // this x is not bind to the window object.
	let y = 7; // inside temporal dead zone.
	console.log(x * y);
}

function b() {
	var x = 2;
	let y = 5;
	console.log(x * y);
}
