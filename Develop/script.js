// Assignment Code
var generateBtn = document.querySelector("#generate");

var abcLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var abcUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var spclChar = [" ","'","!",'"',"#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","]","^","_","`","{","|","}","~"]


// Write password to the #password input
function writePassword() {
  
  var pw_Length = prompt("How many long do you want your password?")
  if (pw_Length <8 || pw_Length>128){
    alert("!!!MUST BE BETWEEN 8 AND 128!!!")
    return
  }

  var password = generatePassword();

  function generatePassword(){
    var charList = [] 
    if (confirm("Do you want to use upper case letters?")){
       charList.concat(upperCase)
     };
    if (confirm("Do you want to use upper case letters?")){
      charList.concat(lowerCase)
    };
    if (confirm("Do you want to use upper case letters?")){
      charList.concat(spclChar)
    };

    for (let i = 0; i < pw_Length; i++) {
      Math.floor;
    };

    return
  };
  
  


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// use confirm
// lits of vars


