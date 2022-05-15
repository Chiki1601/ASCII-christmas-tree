document.body.style.backgroundColor = "black";

      // defining colors, lamps and symbols as arrays
      // count is used to loop through arrays
      var count = -1;
      var colors = new Array("#22cc25", "#ff6600", "#ff0033");
      var symbols = new Array("*", "#", "•");
      var lights = new Array('#ff0033', '#ff6600', '#22cc25', '#ffcc00', '#3aaed8');

      // defining interval of changing colors and symbols
      setInterval(function(){

        document.body.style.backgroundColor = "black";
        document.body.innerHTML = '';

        // reseting count
        if(window.count < window.colors.length - 1) {
          window.count += 1
        } else {
          window.count = 0;
        }

        // calling functions
        ornament(window.count);
        tree(window.count);

        // setting background color to black
        document.body.style.backgroundColor = "black";

      }, 1500)

      //  function that holds top of the tree and accepts one parameter (counter)
      function ornament(num) {

        var a=4,
          b=5,
          c=1,
          d="<div style='font-family:monospace;text-align:center;color:" + window.colors[num] + "'>",
          w=1,
          x=1,
          y=""+window.symbols[num]+""+window.symbols[num]+""+window.symbols[num]+"<br>"; //menjano

        // loop for rendering ornaments
        for(i=1; i<a; i++) {
          for(j=0; j<w; j++){

            if(x%c == 1) {
              d += " <span style='color:" + window.colors[num] + "'> "+window.symbols[num]+" </span>"; //menjano
            } else {
              d += ""+window.symbols[num]+""; //menjano od *
            }

            x++;
          }

          if(i%b==7) {
            w-=7;
          } else {
            w+=2;
          }

          d+="<br>";
        }

        // drawing the ornaments on page
        document.write(d + "<span style='color:" + window.colors[num] + "'>" + y + "</span></div>");
      }


      //tree
      function tree(num) {
        var a=30,
          b=10,
          c=6,
          d="<div style='font-family:monospace;text-align:center;color:#3C8D0D'>",
          w=1,
          x=1,
          y="| 1 5 |<br>", z="|troxo|<br>";

        for(i=1;i<a;i++) {
          for(j=0;j<w;j++){

            if(x%c==1) {
              d+="<span style='color:" + window.lights[Math.floor(Math.random() * window.lights.length)] + "'>O</span>";
            } else {
              d+="*"  ;
            }
           x++;

          }

          if(i%b==0){
            w-=7;
          } else {
            w+=2;
          }

          d+="<br>";
        }

        document.write(d+"<span style='color:#ff0000'>"+z+y+"</span></div>");
      }