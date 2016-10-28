window.onload = function() { 
    var scrollTimer = false;
    var tabletop;  
    var ew = document.getElementById('wrap');
    var offsets = ew.getBoundingClientRect();
    var tr0 =  ew.getElementsByTagName("tr")[0].getBoundingClientRect();
    var adjustments =   tr0.top - offsets.top ;
               
    function scrollFinished(ths) {
        if (tabletop > adjustments ) {
            tabletop = tabletop - adjustments; 
        }
        var translate = "translate(0,"+tabletop+"px)";
        for (var i = 0; i < ths.length; i++) {
            ths[i].style.visibility = 'visible';
            ths[i].style.transform = translate;
        }
    }
     
    ew.addEventListener("scroll",function(){
        tabletop = this.scrollTop ;
        if ( !scrollTimer ) {
            //hide th headers:
            var thCollection = this.querySelectorAll('th');
            for (var i = 0; i < thCollection.length; i++) {
                thCollection[i].style.visibility = 'hidden';
            }
            scrollTimer = true;
            setTimeout(function() {
                scrollTimer = false;
                scrollFinished(thCollection);
            }, 250);
        }
    });
}                                                                          

