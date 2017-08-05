function loadJSON(){
            var http_request = new XMLHttpRequest();
            
         
            http_request.onreadystatechange = function(){
         
               if (http_request.readyState == 4  ){
                  // Javascript function JSON.parse to parse JSON data
                  var jsonObj = JSON.parse(http_request.responseText);

                  // jsonObj variable now contains the data structure and can
                  // be accessed as jsonObj.name and jsonObj.country.
                  document.getElementById("Name").innerHTML = jsonObj.name;
                  document.getElementById("Country").innerHTML = jsonObj.country;
                  document.getElementById("age").innerHTML = jsonObj.age;
               }
            };
         
            http_request.open("GET", "data.json", true);
            http_request.send();
         }