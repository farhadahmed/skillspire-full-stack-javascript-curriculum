// Boolean Values have two possible values: true or false.

// One way of producing boolean values is by using the following comparison operators:

==  // Checks if a value is equal to another
=== // Checks if a value is 'strictly' equal to another
!=  // ! means 'not'. So this checks if one value is not equal to another
!== // Checks if a value is strictly not equal to another
<   // Checks if the value on left is less than the value on the right
>   // Checks if the value on left is greater than the value on the right
<=  // Checks if the value on left is less than or equal to the value on right
>=  // Checks if the value on left is greater than or equal to value on right
&&  // Checks if BOTH the values on the left AND right are true
||  // checks if either the values on the left OR right ae tue


3 > 2
//true

'sherlock' > 'batman' //compares the lexical order of the strings.

//true

'harry potter' > 'hermione'
//false

'harry potter'.length > 'hermione'.length //checks if the length of the value on left is greater
                                          //than the value on the right
//true

NaN == NaN // NaN is the result of a statement that doesn't make sense. The reason this is false
           // is that the result of one nonsensical statement isn't equal to the result of
           // another.
//false

true || false // returns true
false || false // returns false

true && true // returns true
true && false // returns false
false && false // returns false