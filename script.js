var cursor = document.querySelector("#cursor");
var boxes = document.querySelectorAll(".box");
var page2 = document.querySelector("#page2")
var page3 = document.querySelector("#page3")
var page4 = document.querySelector("#page4")
var bottombox = document.querySelector(".btmbox")
var btms = document.querySelectorAll(".btm")
 
window.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        top:dets.y,
        left:dets.x,
        ease:Power1
        
    })
})

boxes.forEach(function(elem){
   elem.addEventListener("mouseenter", function(){
    cursor.style.width = "100px"
    cursor.style.height = "50px"
    cursor.style.backgroundColor ="rgba(255,255,255,0.9)"
    cursor.innerHTML = `<h3 class ="text-xl" >click</h3>`
   })
})


boxes.forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
     cursor.style.width = "8px"
     cursor.style.height = "8px"
     cursor.style.backgroundColor =""
     cursor.innerHTML = ""
    })
 })

 gsap.to("#para span h1",{
    y:0,
    duration:0.9,
    stagger:0.3,
    scrollTrigger:{
        trigger:"span",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end: "top 45%",
        scrub:3,
    }
 })

page2.addEventListener("mouseenter", function(){
    cursor.style.width = "150px"
    cursor.style.height = "50px"
    cursor.style.backgroundColor ="rgba(255,255,255,0.9)"
    cursor.innerHTML = `<h3 class ="text-xl" >Arredobagno</h3>`
})

page2.addEventListener("mouseleave", function(){
    cursor.style.width = "8px"
    cursor.style.height = "8px"
    cursor.style.backgroundColor =""
    cursor.innerHTML = ""
})

page3.addEventListener("mouseenter", function(){
    cursor.style.width = "150px"
    cursor.style.height = "50px"
    cursor.style.backgroundColor ="rgba(255,255,255,0.9)"
    cursor.innerHTML = `<h3 class ="text-xl" >teri batto</h3>`
})

page3.addEventListener("mouseleave", function(){
    cursor.style.width = "8px"
    cursor.style.height = "8px"
    cursor.style.backgroundColor =""
    cursor.innerHTML = ""
})

page4.addEventListener("mouseenter", function(){
    cursor.style.width = "150px"
    cursor.style.height = "50px"
    cursor.style.backgroundColor ="rgba(255,255,255,0.9)"
    cursor.innerHTML = `<h3 class ="text-xl" >kesi lagi</h3>`
})

page4.addEventListener("mouseleave", function(){
    cursor.style.width = "8px"
    cursor.style.height = "8px"
    cursor.style.backgroundColor =""
    cursor.innerHTML = ""
})




gsap.from("#page3 video",{
  scale:0,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"body",
    //  markers:true,
     start:"top 70%",
     end: "top 45%",
     scrub:3,
    
  }
})


gsap.from("#page4 video",{
    scale:0,
    scrollTrigger:{
      trigger:"#page4 ",
      scroller:"body",
    //    markers:true,
       start:"top 80%",
       end: "top 45%",
       scrub:3,
      
    }
  })

gsap.to(".roll h1",{
    x:"-100%",
    duration:6,
    repeat:-1,
    ease:"linear"
    
})



gsap.from(".page video",{
    scale:0,
    scrollTrigger:{
      trigger:"#page2",
      scroller:"body",
      //  markers:true,
       start:"top 50%",
       end: "top 45%",
       scrub:3,
      
    }
  })
  
  gsap.to(".roll h1",{
      x:"-100%",
      duration:6,
      repeat:-1,
      ease:"linear"
      
  })


bottombox.addEventListener("mouseenter", function(){
    cursor.style.width = "8px"
    cursor.style.height = "8px"
    cursor.style.backgroundColor =""
    cursor.innerHTML = ""

    btms.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            cursor.style.width = "100px"
            cursor.style.height = "100px"
            cursor.style.backgroundColor ="rgba(255,255,255,0.9)"
             cursor.innerHTML = `<i class="ri-arrow-right-line text-5xl font-thin"></i>`
            

        })
        
    })

    btms.forEach(function(elem){
        elem.addEventListener("mouseleave", function(){
            cursor.style.width = "8px"
            cursor.style.height = "8px"
            cursor.style.backgroundColor =""
             cursor.innerHTML = ``
            

        })
        
    })

})