$(window).on('load', function() {
    // alert(window.innerWidth);
    // Having buttons in view
    var buttonSpacing = setInterval(windowSize, 1000);
    var buttonGroupDistance = document.getElementById("Navfamily");
    var size = "large"
    function windowSize(){
        if (window.innerWidth < 960 && size!=="small") {
            // alert("Too Small");
            buttonGroupDistance.className = "smallWindow"
            size="small"
         }
        if (window.innerWidth >= 960 && size!=="large") {
            // alert("Right Size");
             buttonGroupDistance.className = "largeWindow"
             size="large"
        }
    }

    // Scroll Bar and Sound
    var keepTrackSound = true;
    var lightsaberOnSound = new Audio('Sounds/LightsaberOn.ogg');
    var lightsaverOffSound = new Audio('Sounds/LightsaberOff.ogg');
    var bar = document.getElementById("bar");
    window.onscroll = function() {
      scrollIndicator()
    };
    
    function scrollIndicator() {
      var winScroll = document.body.scrollTop || document.body.scrollTop;
      var height = document.body.scrollHeight - document.body.clientHeight;
      var scrolled = 100;
      
      if (height > 0) {
        scrolled = (winScroll / height)*100;
      }

      // console.log(scrolled);

      if (scrolled > 10 && scrolled < 10.5 && !(this.oldScroll > this.scrollY)){
          keepTrackSound = false;
          lightsaverOffSound.pause();
          lightsaberOnSound.play();
          // console.log("play sound out");
      }

      else if (scrolled > 10 && scrolled < 10.5 && (this.oldScroll > this.scrollY)){
        keepTrackSound = true;
        lightsaberOnSound.pause();
        lightsaverOffSound.play();
        // console.log("play sound in");
        }

    // console.log(this.oldScroll > this.scrollY);
    this.oldScroll = this.scrollY;
    
      bar.style.height = scrolled + "%";
    }

    // var observer = new IntersectionObserver(function(entries) {
    //     // no intersection with screen
    //     if(entries[0].intersectionRatio === 0){
    //         document.querySelector("#disappearTop").classList.add("disappearTop-sticky");
    //         console.log("out of view");
    //     }
    //     // fully intersects with screen
    //     else if(entries[0].intersectionRatio === 1){
    //         document.querySelector("#disappearTop").classList.remove("disappearTop-sticky");
    //         console.log("in view");
    //     }
    // }, { threshold: [0,1] });
    
    // observer.observe(document.querySelector("#disappearTop"));

});