$(function() {  
    $('#restore').hide();
    $("#transform").on('click', function() {
        $("h1").text("The Butterfly");
        $("p").html("This is a <strong>butterfly</strong> in its natural habitat:");
        $("p").css("color", "green");
        $("img").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgasX3-MqCkc6587iYidEaCuOh8IbKkhvuug&usqp=CAU", width="400");
        $("a").attr("href", "https://en.wikipedia.org/wiki/Butterfly");
        $("ul").append("<li>There are more than 20,000 species of butteflies</li><li> Butterfly have upto 12000 eyes</li><li> Butterflies live only a few weeks </li><li> Butterflies use their feet to taste </li>");
        $('#restore').show();
        $('#transform').hide();
        var nameEls = document.getElementsByTagName("span");
            console.log(nameEls);
            // HTMLCollection
            console.log(nameEls[0]);
            for (var i = 0; i < nameEls.length; i++) {
                nameEls[i].innerHTML = "Butterfly";
            }
    });

    $("#restore").on('click', function() {
        location.reload(true); 
        
    }); 

});