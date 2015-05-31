var nowy = Math.floor(Math.random() * 5) + 1;
var stary;
var obecny = 1;
var tmp;
var timer1 = 0;
var timer2 = 0;
var nrPDF=1;

$(document).ready(function () {
    $("#button1").click(function () {
        $("#b_1").fadeIn();
    });
    $("#button2").click(function () {
        $("#b_2").fadeIn();
    });
    $("#button5").click(function () {
        $("#b_5").fadeIn();
    });
	    $("#button3").click(function () {
        $("#b_3").fadeIn();
    });
    $("#button4").click(function () {
        rozmiar();
        $(".galer").fadeIn();
        $(".slider").fadeIn();
        ustawslajd(nowy);
    });
		$("#box_1").mouseover(function(){
   		 $("#ciekawostka_1").show();
		  });
		   $("#box_1").mouseout(function(){
        $("#ciekawostka_1").hide();
    });
		$("#box_2").mouseover(function(){
   		 $("#ciekawostka_2").show();
		  });
		   $("#box_2").mouseout(function(){
        $("#ciekawostka_2").hide();
    });
		$("#box_3").mouseover(function(){
   		 $("#ciekawostka_3").show();
		  });
		   $("#box_3").mouseout(function(){
        $("#ciekawostka_3").hide();
    });
	


    //logowanie sprawdzanie wporadzonego hasla
    $("#logowanie").click(function (){
        if (document.getElementById('haslo').value == document.title) {
            alert('Gratulacje! Hasło poprawne!');
            self.location = document.getElementById('haslo').value + 'z.html';
        }
        else {
            alert('Niepowodzenie logowania');
        }
    });

    //animacja scrollowania
    $('a[href ^= "#"]').click(function () {
        var hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000);
        return false;
    });
});

function zmienArt(nr_art) {
    if (obecny != nr_art) {
        $("#article_" + obecny).fadeOut(1000);
        $("#article_" + nr_art).delay(1000).fadeIn(1000);
        tmp = obecny;
        obecny = nr_art;
        document.getElementById("art_" + nr_art).innerHTML = "<img src=\"ikony/a3.png\" onmouseover=\"src='ikony/a2.png'\" onmouseout=\"src='ikony/a3.png'\"/>";
        document.getElementById("art_" + tmp).innerHTML = "<img src=\"ikony/a1.png\" onmouseover=\"src='ikony/a2.png'\" onmouseout=\"src='ikony/a1.png'\"/>";
    }
}

function ustawslajd(nrslajdu) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    stary = nowy;
    nowy = nrslajdu;
    schowaj();
    setTimeout("zmienslajd()", 500);
}

function schowaj() {
    $("#slider").fadeOut(500);
}

function zmienslajd() {
    for (var i = 1; i <= 5; i++) {
        document.getElementById("slajd" + i).innerHTML = "<img src=\"ikony/a1.png\" onmouseover=\"src='ikony/a2.png'\" onmouseout=\"src='ikony/a1.png'\"/>";
    }
    document.getElementById("slajd" + nowy).innerHTML = "<img src=\"ikony/a3.png\" onmouseover=\"src='ikony/a2.png'\" onmouseout=\"src='ikony/a3.png'\"/>";
    stary = nowy;
    nowy++;
    if (nowy > 5) {
        nowy = 1;
    }
    var plik = "url(\"img/galeria/" + nowy + ".png\")";
    document.getElementById("slider").style.backgroundImage = plik;
    $("#slider").fadeIn(500);
    timer1 = setTimeout("zmienslajd()", 5000);
    timer2 = setTimeout("schowaj()", 4500);
}

function rozmiar() {
    var wysokosc = screen.height - 90;
    var szerokosc = screen.width;
    var galeria = document.getElementById("b_4");
    galeria.style.height = 100 + "vh";
    galeria.style.width = 100 + "%";
    //alert("Twoja rozdzielczosc ekranu to: " + screen.width + "x" + screen.height);
}


	
function przed(x, y) {
    x.style.zIndex = "0";
	x.style.backgroundImage= "url(\"img/ciekawostki/" + y + "a.jpg\")";
	x.style.opacity="1";
  
}

function po(x, y) {
    x.style.zIndex = "1";
	x.style.opacity="0.1";
	x.style.backgroundImage= "url(\"img/ciekawostki/" + y + "b.jpg\")";    
}

function zmienPDF(x)
{
	document.getElementById("pdfwyswietlator").src="publikacje/" + x+ ".pdf";

}