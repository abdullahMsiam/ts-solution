# How generics enable reusable, strictly typed code

### Generic is allow to accecpt dynamically types and It also a good option to avoid using any type. 
```ts
function value<T>(value:T):T{
    return value; 
}
```
### It is also reuseable like we can give number array or string array with one like: 
```ts
function array<T>(item:T):T[]{
    return [item]
}
const array(5); 
const array("name"); 
```
