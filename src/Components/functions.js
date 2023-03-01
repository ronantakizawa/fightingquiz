
export const links=
["https://www.onefc.com/lifestyle/7-essential-strength-and-conditioning-exercises-for-martial-artists/",
"https://blog.joinfightcamp.com/training/how-to-increase-punching-speed-boxing-tips-and-exercises/#:~:text=The%20best%20way%20to%20increase%20your%20punching%20speed%20is%20to,punching%20faster%20in%20no%20time.",
"https://clinchgear.com/blogs/news/twenty-tips-for-improving-stamina-endurance-for-mma-fighters",
"https://www.youtube.com/watch?v=MQeX-he8olo",
"https://www.youtube.com/watch?v=pBT5KNcHBr0",
"https://www.mensjournal.com/sports/picking-a-fight-choose-the-right-martial-art-for-you"];

export var weaknesslink="";

export const numToVal = (val) =>{
    switch(val){
      case 0:
        weaknesslink=links[0];
        return "Power";
      case 1:
        weaknesslink=links[1];
        return "Speed";
      case 2:
        weaknesslink=links[2];
        return "Stamina"
      case 3:
        weaknesslink=links[3];
          return "IQ"
      case 4:
        weaknesslink=links[4];
          return "EQ"
      case 5:
          weaknesslink=links[5];
          return "Lack of Specialization"
  
      default:
        return "Power"
  
    }

  }