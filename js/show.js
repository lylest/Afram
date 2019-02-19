$(document).ready(()=>{
  $(".mid").click(()=>{
    $(".menuca").show(500);
  });

  //other make it editable


   	$(".menn").each(function(){
    this.contentEditable = true;
    });
});
