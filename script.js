const burger = document.querySelector('nav svg');

burger.addEventListener('click', ()=>{
    if(burger.classList.contains('active')){
        gsap.to('.links',{ x: '100%'});
        gsap.to('.line', {stroke: 'white'})
        gsap.set('body',{overflow:'auto'})
        gsap.set('body', {overflowX: 'hidden'})

    }else{
        gsap.to('.links', {x: '0%'});
        gsap.to('.line', {stroke: 'black'})
        gsap.fromTo('.links a', 
        {opacity: 0 , y:0}, 
        {opacity: 1, y:20, delay:0.25, stagger: 0.25}) //stagger is use to load the items one after the other
        
        gsap.set('body',{overflow:'hidden'})
    }
    
    burger.classList.toggle('active');
})

const videos = gsap.utils.toArray(".video");
gsap.set(videos, { opacity: 0 });

videos.forEach((video) => {
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",
    
    onEnter: () =>{ //onEnter is a function that will trigger the video to load
        gsap.to(video, {opacity:1})
        video.play() //to play the vid but first add the muted and loop in html vid tag
    },
    //*to stop the vid when scroll down or not ont the vid place we  use this methods

    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(), //its for when scroll back again it will play
    });
});
