//To use this function, you have to have two <div> tags with ids "build header" and "build footer"
(function(){
  var includeFile = function(file, navType,isStyle) {
    var elmnt = document.getElementById(navType);
    if (elmnt == null){
      return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        //if its a style sheet than add style tags
        if (isStyle){
          if (this.status == 200) {elmnt.insertAdjacentHTML( "afterbegin", "<style>" + this.responseText + "</style>");}
          if (this.status == 404) {elmnt.insertAdjacentHTML('afterbegin', "Page not found.");}
        }
        //if its not  a style sheet than don't bother with style tags
        else {
          if (this.status == 200) {elmnt.insertAdjacentHTML('afterbegin', this.responseText);}
          if (this.status == 404) {elmnt.insertAdjacentHTML('afterbegin', "Page not found.");}
        }
      }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
    return;
  }

  //NOTE: Appends to within div tag so must build html and css backwards (will appear css then html in final)

  //build header
  includeFile("/CSPortfolioWebsite/headerFooter/header.html", "buildHeader", false);
  includeFile("/CSPortfolioWebsite/headerFooter/css/header.css", "buildHeader", true);

  //build footer
  includeFile("/CSPortfolioWebsite/headerFooter/footer.html", "buildFooter", false);
  includeFile("/CSPortfolioWebsite/headerFooter/css/footer.css", "buildFooter", true);


})();
