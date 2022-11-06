//side-effects
// 1. Side-effects are changes to the state of the program
// 2. Side-effects can include:
//    - Modifying any external variable or object property
//    - Logging to the console
//    - Writing to the screen
//    - Writing to a file
//    - Writing to the network
//    - Triggering any external process 
//    - Calling any other functions with side-effects
// 3. Any function that relies on a random number generator cannot be pure
// 4. Any function that changes the system clock cannot be pure
// 5. Any function that reads system input cannot be pure
// 6. Any function that writes to the screen cannot be pure
// 7. Any function that writes to a file cannot be pure
// 8. Any function that writes to the network cannot be pure
// 9. Any function that triggers any external process cannot be pure
// 10. Any function that calls any other functions with side-effects cannot be pure
// 11. Any function that modifies any external variable or object property cannot be pure
// 12. Any function that logs to the console cannot be pure
// 13. Any function that throws an exception cannot be pure
