// colored tag-cloud for blog , different letter sizes //


$(document).ready(function(){
    var classes = ["teg-1", "teg-2", "teg-3", "teg-4", "teg-5"];

    $("#tagcloud a").each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });
});
