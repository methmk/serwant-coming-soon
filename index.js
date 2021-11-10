function PageTransitionOut() {
    var tl = gsap.timeline()
    tl.from('div.transition', {duration: .5, opacity:0})
    tl.to('div.transition', {duration: .5, opacity:1})

}


function PageTransitionIn() {
    var tl = gsap.timeline()
    tl.from('div.transition', {duration: .3, opacity:0})
    tl.to('div.transition', {duration: .3, opacity:1})

}





function contentAnimation(){
    var tl = gsap.timeline();
   //home page


}


function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({


    transitions: [{
        sync: true,



                leave(data){


                PageTransitionOut();

                console.log("leave");


            },

             enter(data){
                PageTransitionIn();
                 console.log("enter");
            },
                
            afterEnter(data) {          
                contentAnimation();
                    console.log("anim");
                
              }

        }]
    
})
