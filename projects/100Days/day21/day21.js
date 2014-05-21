function save() {

    document.getElementById("thoughts").innerHTML = document.getElementById("input").value();
    
if (typeof(Storage) != "undefined")
  {
  // Store
  localStorage.setItem("storage");
      localStorage.storage = document.getElementById("thoughts").value();
  // Retrieve
   document.getElementById("thoughts").innerHTML=localStorage.getItem("storage");
  
  }

else
  
{
  document.getElementById("thoughts").innerHTML="Sorry, your browser does not support Web Storage...";
  
}
    
}