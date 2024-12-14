function palindrome_check(){
  //step 1: get the text written by the user
  var text = document.getElementById("input").value;
  //step - 2 convert the entire text in lower case
  var textLower = text.toLowerCase();  //bhumika

  //step - 3 do the reversing of actual word
  //textLower.split("")- b h u m i k a
  //reverse() - a k i m u h b 
  //join("") - akimuhb - rev
  var rev = textLower.split("").reverse().join("");



//HW - compare the 2 varibales and show the final output on the answer paragraph. 
if (rev == textLower) {
  document.getElementById("prog").innerHTML =  text+" is a Palindrome";
}
else {
document.getElementById("prog").innerHTML =  text+" is not a Palindrome";
}
}


