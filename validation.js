function emailValid() {
  let address = document.forms["form"]["email"].value;
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  if (regex.test(address)) return true;
  else {
    alert("Error: Invalid e-mail address.");
    return false;
  }
}
