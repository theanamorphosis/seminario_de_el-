document.getElementById("menu_item_9").addEventListener("click", function(){
 document.getElementById("marxito").classList.remove("marxito-closed");
 document.getElementById("marxito").classList.add("marxito-opened");
});

document.getElementById("close-marxito").addEventListener("click", function(){
 document.getElementById("marxito").classList.remove("marxito-opened");
 document.getElementById("marxito").classList.add("marxito-closed");
});

document.getElementById("close-platformUse").addEventListener("click", function(){
    document.getElementById("platformUse").classList.remove("platformUse-opened");
    document.getElementById("platformUse").classList.add("platformUse-closed");
});

