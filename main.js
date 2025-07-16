

// gsap.from("#page1 .Hero-logo",{
//     y: 100,
//     opacity:0,
//     ease:"power2.out",
//     stagger:0.2,
//     delay:1,
//     duration:1.5,
//     pin: true,
// })


gsap.to(" #page1 #mainbox",{
    transform: "translateY(153%)",
    scrollTrigger: {
        trigger: "#page1",
        scroll:"body",
        start: "top 0%",
        end: "top -110%",
        scrub:3,
        markers:false,
        pin: true,
        
    }, 
   
})





gsap.from("#page2 h3",{
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2",
        scroll:"body",
        start: "top 0%",
        end: "top -100%",
        scrub:2,
        markers:false,
        pin: true,
        
        
    }, 
   
})


// gsap.from("#page2 .blackgradient",{
//     transform: "translateX(-105%)",
//     scrollTrigger: {
//         trigger: "#page2",
//         scroll:"body",
//         start: "top 10%",
//         end: "top -50%",
//         scrub:2,
//         markers:false,
//         pin: true,
        
        
//     }, 
   
// })

// gsap.from("#page5 .imgebox1",{
//     scrollTrigger: {
//         trigger: "#page5",
//         scroll:"body",
//         start: "top -40%",
//         end: "bottom 20%",
//         scrub:2,
//         markers:true,
//         pin: true,
        
        
//     }, 
   
// })


gsap.to(".scroll-track", {
  xPercent: -50,
  repeat: -1,
  ease: "linear",
  duration: 15
});