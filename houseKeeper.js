// var houseKeeper = {
//     yearOfExperience: 12,
//     name: "Alexa",
//     cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
// }

function houseKeeper(yearsOfExperience,name,cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function cleaning (){
        alert("cleaning")
    }
}
var houseKeeper1 = new houseKeeper(12, "Alexa", ["bathroom", "lobby", "bedroom"]);
var houseKeeper2 = new houseKeeper(18, "Joshua", ["bedroom"]);