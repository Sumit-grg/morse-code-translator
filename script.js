const charCodes=Array(37); 
charCodes["a"]=". _";
charCodes["b"]="_ . . .";
charCodes["c"]="_ . _ .";
charCodes["d"]="_ . .";
charCodes["e"]=".";
charCodes["f"]=". . _ .";
charCodes["g"]="_ _ .";
charCodes["h"]=". . . .";
charCodes["i"]=". .";
charCodes["j"]=". _ _ _";
charCodes["k"]="_ . _";
charCodes["l"]=". _ . .";
charCodes["m"]="_ _";
charCodes["n"]="_ .";
charCodes["o"]="_ _ _";
charCodes["p"]=". _ _ .";
charCodes["q"]="_ _ . _";
charCodes["r"]=". _ .";
charCodes["s"]=". . .";
charCodes["t"]="_";
charCodes["u"]=". . _";
charCodes["v"]=". . . _";
charCodes["w"]=". _ _";
charCodes["x"]="_ . . _";
charCodes["y"]="_ . _ _";
charCodes["z"]="_ _ . .";
charCodes["1"]=". _ _ _ _";
charCodes["2"]=". . _ _ _";
charCodes["3"]=". . . _ _";
charCodes["4"]=". . . . _";
charCodes["5"]=". . . . .";
charCodes["6"]="_ . . . .";
charCodes["7"]="_ _ . . .";
charCodes["8"]="_ _ _ . .";
charCodes["9"]="_ _ _ _ .";
charCodes["0"]="_ _ _ _ _";
charCodes[" "]=" ";





const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

submitBtn.addEventListener("click", function(){
  const inputField = document.getElementById("inputField").value;
  const splitArray = inputField.split("");
  let i;
  let mCode = "";
  for (i = 0; i < splitArray.length; i++) {
  mCode += charCodes[splitArray[i]];
  }
  document.getElementById("outputField").innerHTML = mCode;
});

resetBtn.addEventListener("click", function(){
  document.getElementById("inputField").value = "";
  document.getElementById("outputField").innerHTML = "";
});





// const string = "hello my name is Sumit";
// const splitString = string.split("");
// console.log(splitString);
// let i;
// for (i = 0; i < splitString.length; i++) {
//   const codeS = charCodes[splitString[i]];
//   console.log(codeS);
// };
