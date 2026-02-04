//utility datatypes ;
// used for flexibility , safety , or  special behaviour
// any : used the data type is not known in advance


let data: any;
data = 10;
data = "hello";
data = true;
console.log(data.toupperCase());

//Unknown : used when the datatype is unknown but must be checked  before use
let value: unknown;
value = "Ramu"
if(typeof value === "string"){
    console.log(value.toLocaleUpperCase()); // without checking this we get error
}


//void : that do not return any value
function printMessage(msg: string): void{
    console.log(msg);
}


//never : function never ends
function throwError(message: string):
never{
    throw new Error(message)
}

