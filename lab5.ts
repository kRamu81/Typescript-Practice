// Function returning types & Optinal Parameters
function College(name:string , code:number =200): any{
    return "I am Student of "+ name +"and code is"+code;
}
console.log(College("KSRM"));
//output : I am Student of KSRMand code is200
// another Way we can return using ${}