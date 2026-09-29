window.addEventListener("load", () => {

    const headline = document.getElementById("headline");

    headline.style.opacity = "1";
    headline.style.transform = "translateY(0)";

    const stats = document.querySelectorAll(".stat");

    stats.forEach((stat,index)=>{
        setTimeout(()=>{
            stat.style.opacity="1";
            stat.style.transform="translateY(0)";
        },500*(index+1));
    });

});


window.addEventListener("scroll", ()=>{

    const image = document.getElementById("hero-image");

    let scrollValue = window.scrollY;

    image.style.transform =
        `translateY(${scrollValue * 0.3}px)`;

});