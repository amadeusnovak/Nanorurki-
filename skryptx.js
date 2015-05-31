$(document).ready(function () {
    $("#button1").click(function () {
        $("#b_1").fadeIn()
        ;
    });
});
$(document).ready(function () {
    $("#button2").click(function () {
        $("#b_2").fadeIn();
    });
});
$(document).ready(function () {
    $("#button5").click(function () {
        $("#b_5").fadeIn();
    });
});
$(document).ready(function () {
    $("#button4").click(function () {
        $(".galer").fadeIn();
        $(".slider").fadeIn();
    });
});
var obecny = 1;
var tmp;


function zmienArt(nr_art) {
    if (obecny != nr_art) {
        $("#article_" + obecny).fadeOut(1000);
        $("#article_" + nr_art).delay(1000).fadeIn(1000);
        tmp = obecny;
        obecny = nr_art;
    }

    var obraz = "<img src=\"ikony/a1.png\" />";
    var obraz1 = "<img src=\"ikony/a3.png\" />";


    document.getElementById("art_" + nr_art).innerHTML = "<img src=\"ikony/a3.png\" onmouseover=\"src='ikony/a2.png'\" onmouseout=\"src='ikony/a3.png'\"/>";
    document.getElementById("art_" + tmp).innerHTML = "<img src=\"ikony/a1.png\" onmouseover=\"src='ikony/a2.png'\" onmouseout=\"src='ikony/a1.png'\"/>";


}


var numer = Math.floor(Math.random() * 5) + 1;

var timer1 = 0;
var timer2 = 0;

function ustawslajd(nrslajdu) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    tmp = numer;
    numer = nrslajdu - 1;


    schowaj();
    setTimeout("zmienslajd()", 500);

}

function schowaj() {
    $("#slider").fadeOut(500);
}

function zmienslajd() {
    var obraz = "<img src=\"ikony/a1.png\" />";
    var obraz1 = "<img src=\"ikony/a3.png\" />";


    document.getElementById("slajd" + numer).innerHTML = "<img src=\"ikony/a3.png\" onmouseover=\"src='ikony/a2.png'\" onmouseout=\"src='ikony/a3.png'\"/>";
    document.getElementById("slajd" + tmp).innerHTML = "<img src=\"ikony/a1.png\" onmouseover=\"src='ikony/a2.png'\" onmouseout=\"src='ikony/a1.png'\"/>";
    ;
    tmp = numer;
    numer++;
    if (numer > 5) numer = 1;

    var plik = "url(\"img/galeria/" + numer + ".jpg\")";

    document.getElementById("slider").style.backgroundImage = plik;
    $("#slider").fadeIn(500);

    timer1 = setTimeout("zmienslajd()", 5000);
    timer2 = setTimeout("schowaj()", 4500);

}

function rozmiar() {
    var wysokosc = screen.height - 90;
    var szerokosc = screen.width;
    var galeria = document.getElementById("b_4");
    galeria.style.height = wysokosc + "px";
    document.getElementById("b_4");
    galeria.style.width = szerokosc + "px";


}
alert("Twoja rozdzielczosc ekranu to: " + screen.width + "x" + screen.height);

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000);
        return false;
    });
});


	
	
	
