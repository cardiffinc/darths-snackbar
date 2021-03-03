//param 'message' is the message that'll be displayed in the snackbar
//also make sure a div with id snackbar is in the DOM. 
function showSnackbar(message) {
    var snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = message;
    snackbar.className = "show";
    setTimeout(function(){ 
        snackbar.className = snackbar.className.replace("show", ""); 
        snackbar.innerHTML = '';
    }, 3000);
  }
