$(document).ready(function(){
    $("div").hover(function() {
        $('i[class^="fab fa-"]', this).addClass('.fab fa-2x');
    }, function() {
        $('i[class^="fab fa-"]', this).removeClass('.fab fa-2x');
    })
});

function loadRepo(url, callback) {
    const gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
      };
      xhttp.open("GET", "https://api.github.com/users/abelan23/repos", true);
      xhttp.send();
    }
  
  function loadRepoCallback(gitHubRequest) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("").innerHTML = gitObject.p;
   
   
    // Callback function needs to parse the JSON
    // Using the DOM get the element ID from your <ul> in your HTML
    // You will need a forEach to loop through the parsed object
    // Using the DOM create new list elements
    // Plug in the .html_url and .name from the parsed object.  To make this a link you'll need 
    // Append the new list items to the element you retrieved from HTML
  }