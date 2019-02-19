const input =
document.querySelector('input[type="file"]')
input.addEventListener('change', function(e) {
   document.getElementById('filebox').style.display="block";

   //console.log(input.files)
   const reader = new FileReader()

   reader.onload = function(){

   //console.log(reader.result)
   var fileExt = input.files[0]['type'];
   var size = input.files[0]['size'];


    if (fileExt === "image/png") {
      const img = new Image()
      img.src = reader.result

     document.getElementById("Image").appendChild(img);

     // document.body.appendChild(img)

   } else{
    //console.log("other type");
      if (fileExt === "application/pdf") {
         var  mb = 1000000;
         var newsize = Math.round(size/mb);
         var pdf = "img/pdf.png";
         const img = new Image()
         img.src = pdf;
         document.getElementById("Image").appendChild(img);
         document.getElementById("topa").innerHTML="<h6>Size </h6>"+newsize+"MB";

      } else {
        if (fileExt === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
           var  mb = 1000000;
           var newsize =size/mb;
           var pdf = "img/docx.png";
           const img = new Image()
           img.src = pdf;
           document.getElementById("Image").appendChild(img);
           document.getElementById("topa").innerHTML="<p>Size </p>"+newsize+"MB";
        }//docx
          else{
            if (fileExt === "application/vnd.openxmlformats-officedocument.presentationml.presentation") {
               var  mb = 1000000;
                 if (size > 1000000) {
                      var newsize = Math.round(size/mb)
                 } else{
                      var newsize = (size/mb)
                 }

               var pdf = "img/ppt.png";
               const img = new Image()
               img.src = pdf;
               document.getElementById("Image").appendChild(img);
               document.getElementById("topa").innerHTML="<h6>Size </h6>"+newsize+"MB";
            }//pptx

            else{

              if (fileExt === "application/msword") {
                 var  mb = 1000000;
                   if (size > 1000000) {
                        var newsize = Math.round(size/mb)
                   } else{
                        var newsize = (size/mb)
                   }

                 var pdf = "img/doc.png";
                 const img = new Image()
                 img.src = pdf;
                 document.getElementById("Image").appendChild(img);
                 document.getElementById("topa").innerHTML="<p>Size </p>"+newsize+"MB";
              }//doc
              else{
                if (fileExt === undefined) {
                   var  mb = 1000000;
                     if (size > 1000000) {
                          var newsize = Math.round(size/mb)
                     } else{
                          var newsize = (size/mb)
                     }

                   var pdf = "img/file.png";
                   const img = new Image()
                   img.src = pdf;
                   document.getElementById("Image").appendChild(img);
                   document.getElementById("topa").innerHTML="<p>undefined</p>"+newsize+"MB";
                }//file
                else {
                  //if
                  console.log(fileExt);
                }

              }

            }

          }

      }
    }



   }
   //reader.readAsText(input.files[0])
   reader.readAsDataURL(input.files[0])

},false)

$(document).ready(()=>{

  $("#add").click((e)=>{
    $("#Image").show(300);
  });
});
