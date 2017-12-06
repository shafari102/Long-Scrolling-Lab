var canvas = document.getElementById("canvas");
var boat = document.getElementById("boat");

window.onscroll = function(){


  var x = window.pageXOffset;

  console.log(x);



  boat.style.left =  x  + "px";

//  if(x > 2000){

//      boat.src="images/boat.png"
//  }else{
//
  //boat.src="https://1.bp.blogspot.com/-jnt2C7f2HH8/WSGIun5uhGI/AAAAAAAAK6s/A1R4fUrtMUsQtEbKqopa2xTWqaEtxClogCLcB/s1600/256___come-to-fight-emoji.png";
// }

}
