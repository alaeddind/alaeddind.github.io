function myFunction(){
    relocateElement("1.2b", "", "1", "");
}

function relocateElement(searchClassName, searchId, targetParentClassName, targetParentID, appendFirst = true) {
   
    let searchElement = null;
    let searchTargetParent = null;
    
        if(searchId == ""){
            searchElement = document.getElementsByClassName(searchClassName);
            if(searchElement == undefined || searchElement.length == 0){
                alert("Element not found!");
                return;
            }else{
                searchElement = searchElement[0];
            }
            
        }else{
            searchElement = document.getElementById(searchId);
            if(searchElement == undefined){
                alert("Element not found!");
                return;
            }
        }
        
        if(targetParentID == ""){
            searchTargetParent = document.getElementsByClassName(targetParentClassName);
            if(searchTargetParent == undefined || searchTargetParent.length == 0){
                alert("Element not found!");
                return;
            }else{
                searchTargetParent = searchTargetParent[0];
            }
        }else{
            searchTargetParent = document.getElementById(targetParentID);
            if(searchTargetParent == undefined){
                alert("Element not found!");
                return;
            }
        }
        
        if(appendFirst)
            searchTargetParent.insertBefore(searchElement, searchTargetParent.firstChild);
        else
            searchTargetParent.appendChild(searchElement);
    
      
      
    }
