var modalCard = document.getElementById("modal-card");
        var openCard = document.getElementById("open-card");
        var bgCard = document.getElementsByClassName("bgCard")[0];
        var closeCard = document.getElementsByClassName("closeCard")[0];

       // When the user clicks on the button, open the modal
            openCard.onclick = function() {
                modalCard.style.display = "block";
            }

       // When the user clicks on (x), close the modal
            closeCard.onclick = function() {
                modalCard.style.display = "none";
            }

        // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == bgCard) {
                    modalCard.style.display = "none";
                }
            }
