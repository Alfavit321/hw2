function changeLinkColor(linkElement) {
  linkElement.addEventListener('click', function(event) {
    event.preventDefault(); 
    this.style.color = 'blue';
    
    setTimeout(function() { 
      linkElement.style.color = '';
    }, 1000);
  });
}

function initApp() {
  var link = document.getElementById('customLink');
  changeLinkColor(link);
}

document.addEventListener('DOMContentLoaded', initApp);
