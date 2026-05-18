<!-- Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing. -->

# Unknown is more safer than Any type
##  any type is not check for the type of variable. It used to take anything like number, string, object etc. It will not do verify the types and that will make a runtime error. But unkonow is demand a varification of given values type. Unknown is help for type narrowing with type checking like that: 
`function process(value: unknown) {
  if (typeof value === "string") {
    // narrowed to string
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    // narrowed to number
    console.log(value.toFixed(2));
  } else {
    console.log("not string or number");
  }
}
`