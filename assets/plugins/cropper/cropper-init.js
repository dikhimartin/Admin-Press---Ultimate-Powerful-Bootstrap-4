
    function initCropper(){
        var image = document.getElementById('blah');
        var cropper = new Cropper(image, {
          aspectRatio: 1 / 1,
          crop: function(e) {
            console.log(e.detail.x);
            console.log(e.detail.y);
          }
        });

        // On crop button clicked
        document.getElementById('crop_button').addEventListener('click', function(){
            var imgurl =  cropper.getCroppedCanvas().toDataURL();
            var img = document.createElement("img");
            img.src = imgurl;
            document.getElementById("cropped_result").appendChild(img);

            /* ---------------- SEND IMAGE TO THE SERVER-------------------------

                cropper.getCroppedCanvas().toBlob(function (blob) {
                      var formData = new FormData();
                      formData.append('croppedImage', blob);
                      // Use `jQuery.ajax` method
                      $.ajax('/path/to/upload', {
                        method: "POST",
                        data: formData,
                        processData: false,
                        contentType: false,
                        success: function () {
                          console.log('Upload success');
                        },
                        error: function () {
                          console.log('Upload error');
                        }
                      });
                });
            ----------------------------------------------------*/
        })
    }