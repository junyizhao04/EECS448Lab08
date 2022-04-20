function validate()
{
  var password1 = document.getElementById("passwd");
  var password2 = document.getElementById("confirmpswd");

  if(password1.value == "" || password2.value == "")
  {
     alert ("Please enter your password!");
  }
  else if (password1.value.length < 8)
  {
    alert ("Password length must be longer or equal than 8 characters!");
  }
  else if (password1.value != password2.value)
  {
    alert ("Passwords do not match!");
  }
  else
  {
    alert ("Password validated");
  }
}