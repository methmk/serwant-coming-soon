

function PageTransitionOut() {
    var tl = gsap.timeline()
    tl.from('div.transition', {duration: .5, opacity:1})
    tl.to('div.transition', {duration: .5, opacity:0})

}


function PageTransitionIn() {
    var tl = gsap.timeline()
    tl.from('div.transition', {duration: .5, opacity:0})
    tl.to('div.transition', {duration: .5, opacity:1})

}




function homeAnimation(){
    var tl = gsap.timeline();
    tl.from('div.main-content h2', {duration: 1, opacity:0, x:-50})
    tl.from('div.main-content p', {duration: 1, opacity:0, x:-50})
    tl.from('span', {duration: .5, opacity:0})
    tl.from('div.tech-list li', {duration: .5, opacity:0, y:50, stagger:0.2})
}
function devicesAnimation(){
    var tl = gsap.timeline();
    tl.from('div.head-content h3', {duration: 1, opacity:0, x:-50})
    tl.from('div.head-content', {duration: 1, opacity:0, x:-50})
    tl.from('.sonata', {duration: .5, opacity:0, y:-200, stagger:0.5})
    tl.from('ul.anim-dev-list li', {duration: .5, opacity:0, stagger:0.3})
   

}
function platformAnimation(){
    var tl = gsap.timeline();
    tl.from('div.glass', {duration: 1, opacity:0})
    tl.from('div.serwant-ipad ', {duration: 1,x:-100, opacity:0})
    tl.from('div.anim-text ', {duration: 1, opacity:0})
    tl.from('ul.anim-platlist li', {duration: .5, opacity:0, stagger:0.3})
}

function partnersAnimation(){
    var tl = gsap.timeline();
    tl.from('div.anim-head-text', {duration: 1, opacity:0, x:-50})
    tl.from('div.partners-content p', {duration: 1, opacity:0, x:-50})
    tl.from('li#stat1', {opacity:0})
    tl.from('span#country', { innerText: 0, duration: 2, snap: {innerText:1}})
    tl.from('li#stat2', {opacity:0})
    tl.from('span#years', { innerText: 0, duration: 2, snap: {innerText:1}})
    tl.from('li#stat3', {opacity:0})
    tl.from('ul.anim-ul li', {duration: .5, opacity:0, stagger:0.3})
    
    
}
function contactsAnimation(){
    var tl = gsap.timeline();
    tl.from('div.contacts', {duration: 1, opacity:0, x:-50})
    tl.from('ul.anim-li li', {duration: .5, opacity:0, stagger:0.3})
    
    
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
    sync: false,

    transitions: [{

                leave(data){
                PageTransitionOut();
                console.log("leave");


            },

             async enter(data){
                PageTransitionIn();
                 console.log("enter");
            },
                

        }],

        views: [{
            namespace: 'home',
            afterEnter(data) {
                homeAnimation();
                console.log("animate")
            }
          }, 
          
          {
            namespace: 'devices',
            afterEnter(data) {
                devicesAnimation();
                console.log("animate")
              }
            },
            {
                namespace: 'platform',
                afterEnter(data) {
                    platformAnimation();
                    console.log("animate")
                  }
            },
            {
                namespace: 'partners',
                afterEnter(data) {
                    partnersAnimation();
                    console.log("animate")
                  }
                },
                {
                    namespace: 'contacts',
                    afterEnter(data) {
                        contactsAnimation();
                        console.log("animate")
                      }
            
          }], 
    
})
