// Function returning types & Optinal Parameters
function College(name, code) {
    if (code === void 0) { code = 200; }
    return "I am Student of " + name + "and code is" + code;
}
console.log(College("KSRM"));
