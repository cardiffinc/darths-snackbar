//param 'message' is the message that'll be displayed in the snackbar
function showSnackbar(message) {
    var snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = message;
    snackbar.className = "show";
    setTimeout(function(){ 
        snackbar.className = snackbar.className.replace("show", ""); 
    }, 3000);
  }
