        var start = new Date().getTime();

        function newShape(){

            if(Math.random() > 0.5){
                document.getElementById("shape").style.borderRadius = "50%";
            }
            else{
                document.getElementById("shape").style.borderRadius = "0%";
            }

            var width = Math.floor((Math.random()*200 + 100));
            
            document.getElementById("shape").style.top = Math.floor((Math.random()*200 + 100)) + "px";
            document.getElementById("shape").style.left = Math.floor((Math.random()*1000 + 100)) + "px";

            document.getElementById("shape").style.width = width + "px";
            document.getElementById("shape").style.height = width + "px";

            document.getElementById("shape").style.backgroundColor = color();

            document.getElementById("shape").style.display = "block";

            start = new Date().getTime();



        }

        function color(){

            var letters = "0123456789ABCDEF".split('');
            var color = "#";

            for(var i=0 ; i<6 ; i++){

                color+=letters[(Math.floor(Math.random()*16))];
            }

            return color;

        }

        function calling(){
            setTimeout(newShape,(Math.random()*2000));
        }

        calling();

        var hscore=50;

        document.getElementById("shape").onclick = function(){

            var end = new Date().getTime();
            var total = (end - start)/1000;

            document.getElementById("shape").style.display = "none";
            document.getElementById("yourTime").innerHTML = total + "seconds";

            if(total<hscore){
                hscore = total;
            }
            else{
                hscore = hscore;
            }

            document.getElementById("highScore").innerHTML = hscore;

            calling();
        }