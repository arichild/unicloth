        var modal = document.getElementById("modal-authorization");
        var btn = document.getElementById("open-btn");
        var bg = document.getElementsByClassName("bg")[0];
        var close = document.getElementsByClassName("close-authorization")[0];

       // When the user clicks on the button, open the modal
            btn.onclick = function() {
                modal.style.display = "block";
            }

       // When the user clicks on <span> (x), close the modal
            close.onclick = function() {
                modal.style.display = "none";
            }

        // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == bg) {
                    modal.style.display = "none";
                }
            }
