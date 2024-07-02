var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".part-1",
    start:"50% 50%",
    end:"150% 50%",
    scrub:true,
    pin:true
  }
})

tl.to(".top-content",{
  rotateX:"110deg",
  opacity:0,
  duration:1.5,
  ease:Power1
},"sm")

tl.to(".btm-content",{
  rotateX:"-110deg",
  opacity:0,
  duration:1.5
},"sm")

tl.to(".img",{
  height:"100%",
  width:"100vw",
  duration:5
},"sm")

