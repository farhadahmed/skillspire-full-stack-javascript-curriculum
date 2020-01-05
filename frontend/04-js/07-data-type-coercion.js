// When an operator is applied to unexpected data types, JavaScript will sometimes automatically
// convert one of the data types. This is known as "type coercion".

'Farhad' + 5 // A string plus a number will result in converting the number to a string and 
             // concatonating it.
// 'Farhad5'

'5' - 1 // A string number subtracted by a number will conver the string to a number and then
		// subtract the two numbers.
// 4

'Farhad' * 5 // Notice that type coercion doesn't work for everything. In some cases JS doesn't
			 // know how to make sense of a statement.
// NaN


(('5'-1) > 3) && (('10' + 1) > 100) // the left evaluates to true since 4 is greater than 3. the 
									// right is also true since 101 is greater than 100.