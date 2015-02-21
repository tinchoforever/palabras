var gfeed = require('google-feed-api');

//Sources de diaros porteños
//TODO: Ponemos mas del interior?

var clarin = new gfeed.Feed('http://clarin.feedsportal.com/c/33088/f/577682/index.rss');
var clarinEco = new gfeed.Feed('http://www.clarin.com/rss/economia/');

var lanacion = new gfeed.Feed('http://contenidos.lanacion.com.ar/herramientas/rss/origen=1');
var lanacionEco = new gfeed.Feed('http://contenidos.lanacion.com.ar/herramientas/rss/categoria_id=30');

var pagina12 = new gfeed.Feed('http://www.pagina12.com.ar/diario/rss/principal.xml');

var minutouno = new gfeed.Feed('http://www.minutouno.com/rss/principal.xml');
var minutounoPol = new gfeed.Feed('http://www.minutouno.com/rss/politica.xml');

var infobae = new gfeed.Feed('http://cdn01.ib.infobae.com/adjuntos/162/rss/politica.xml');

var tiempoArgentino = new gfeed.Feed('http://www.infonews.com/rss/politica.xml');

var sources = [];

sources.push(clarin);
sources.push(clarinEco);

sources.push(lanacion);
sources.push(lanacionEco);

sources.push(pagina12);

sources.push(minutouno);
sources.push(minutounoPol);


sources.push(infobae);

sources.push(tiempoArgentino);

//TODO: Palabra a diltrar
var word = 'Macri';

//Por cada fetch del rss
for (var i = 0; i < sources.length; i++) {
	sources[i].listItems(function(items){ process(items); });
};


//Busco e imprimo
function process(items){
	for (var i = 0; i < items.length; i++) {
	    	if (items[i].title.indexOf(word) > -1 || items[i].content.indexOf(word) > -1 ){
	    		console.log(word + "-" + items[i].title);
	    	}
	};  
}


