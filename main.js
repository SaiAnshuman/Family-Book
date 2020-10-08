var names_of_people = ["Srinivas.R","Rekha.S","Sai Anshuamn.S"];

var images = ["dad.png","mom.png","anshu.png"];

var i=0;
function nextslide() {
document.getElementById("img_family_members").src=images[i];
document.getElementById("Name").innerHTML=names_of_people [i];
i++;
}



