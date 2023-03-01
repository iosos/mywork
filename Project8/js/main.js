
var siteNameInput = document.getElementById('siteName');
var siteUrlInput = document.getElementById('siteUrl');

var siteContainer = [];

if (localStorage.getItem('sites')!=null){
    siteContainer= JSON.parse(localStorage.getItem('sites'));
    siteDisplay();
}

function addSite() {
    var siteObject = {
        name: siteNameInput.value,
        url: siteUrlInput.value,
    }
    siteContainer.push(siteObject);

    localStorage.setItem('sites', JSON.stringify(siteContainer));   
    siteDisplay();
    clearInput();
  
}
function siteDisplay() {

    var cont = ``;
    for (var i=0;i<siteContainer.length; i++){
        cont+= `
     
        <div class="webwell row" id="${siteContainer[i].name+ '-' + i}">
        <h2>${siteContainer[i].name}</h2>
        <a class="btn btn-primary" href="https://${siteContainer[i].url}" target="_blank">visit</a>
        <button class="btn btn-danger btndelete" onclick='deleteSite(${i})'>Delete</button>
        </div>
        `
    } 
    document.getElementById('bookmarkList').innerHTML= cont
}

function deleteSite (Index) {
    siteContainer.splice(Index,1);
    localStorage.setItem('sites', JSON.stringify(siteContainer));
    siteDisplay ();
}

function clearInput (){
    siteNameInput.value='';
    siteUrlInput.value='';
  
}

siteDisplay(); 

