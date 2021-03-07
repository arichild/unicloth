var modalReg = document.getElementById("modal-registration");
        var openReg = document.getElementById("open-reg");
        var bgCard = document.getElementsByClassName("bgCard")[0];
        var closeReg = document.getElementsByClassName("close-registration")[0];

       // When the user clicks on the button, open the modal
            openReg.onclick = function() {
                modalReg.style.display = "block";
            }

       // When the user clicks on (x), close the modal
            closeReg.onclick = function() {
                modalReg.style.display = "none";
            }

        // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == bgCard) {
                    modalReg.style.display = "none";
                }
            }
