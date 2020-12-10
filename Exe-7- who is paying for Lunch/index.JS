/* who Is paying for lunch ?
I wrote a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.
 Example of listname=["Nazanin" , "Kia", "Jenny", " Chole" ," john"] */


 /* solution*/

function whosPaying(listname){
 var numberOfPeople=teamMember.length;
   var randomPersonPosition=Math.floor(Math.random()*numberOfPeople) ;
  var randomPerson=teamMember[randomPersonPosition]
   return ( randomPerson+ " is going to buy lunch today!");

}
