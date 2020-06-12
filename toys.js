$(function(){
    let toys=$("#toys");
    let count=Math.floor(toys.width()/70);
    //let toys=$(document.getElementById("toys"));
    for(let i=0; i<count; i++){
        let newToy = $("<span>");
        newToy.addClass("toy");
        let num=Math.floor(Math.random()*11)+10;
        newToy.css({
            backgroundImage:"url(img/"+num+".png)"
        })


        toys.append(newToy);
        newToy.one("mouseover",anim);
    }//for
    function anim(){
        $(this)
        .animate({rotate:"30deg"},
        {duration:300, easing:"easeOutQuad"}
        )
        .animate({rotate:"-30deg"},
        {duration:600, easing:"easeInOutQuad"}
        )
        .animate({rotate:"20deg"},
        {duration:500, easing:"easeInOutQuad"}
        )
        .animate({rotate:"-20deg"},
        {duration:400, easing:"easeInOutQuad"}
        )
        .animate({rotate:"10deg"},
        {duration:300, easing:"easeInOutQuad"}
        )
        .animate({rotate:"-10deg"},
        {duration:200, easing:"easeInOutQuad"}
        )
        .animate({rotate:"0deg"},
        {duration:100, easing:"easeInQuad",
    complete:function(){$(this.one("mouseover", ))}
}
        )
    }

})