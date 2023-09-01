class Link {
    constructor(link, text, section){
        this.createLink = document.createElement("a");
        this.createLink.href = link;
        this.createLink.innerText = text;
        this.br = document.createElement("br");
        section.append(this.createLink, this.br);
    };
};

//Sections
const body = document.body;
const header = document.querySelector("#header")
const ikkeBesøgt = document.querySelector("#ikkeBesøgt");
const besøgtTitel = document.querySelector("#besøgtTitel");
const besøgt = document.querySelector("#besøgt");

//Overskrift
const overskrift = document.createElement("h1");
overskrift.innerText = "Her er lidt om Kalaha";
header.append(overskrift)

//Besøgt
const besøgtTitelText = document.createElement("h1");
besøgtTitelText.innerText = "Besøgte links";
besøgtTitel.append(besøgtTitelText);

//Link 1
const kalahaWiki = "https://da.wikipedia.org/wiki/Kalaha";
const wikiText = "Link til Wikipwdia.org";
new Link(kalahaWiki, wikiText, ikkeBesøgt);

//Link 2
const kalahaRegler = "https://www.br.dk/blog/kalaha-regler/";
const reglerText = "Link til regler";
new Link(kalahaRegler, reglerText, ikkeBesøgt);

//Link 3
const webShop1 = "https://www.bog-ide.dk/produkt/115216/kalaha-dize";
const webShopText1 = "Link til webshop 1";
new Link(webShop1, webShopText1, ikkeBesøgt);

//Link 4
const webShop2 = "https://www.coolshop.dk/legetoej/braetspil-og-spil/kalaha/";
const webShopText2 = "Link til webshop 2";
new Link(webShop2, webShopText2, ikkeBesøgt);

//Link 5
const kalahaBand = "https://kalahamusic.dk/";
const kalahaBandText = 'Link til bandet "Kalaha"';
new Link(kalahaBand, kalahaBandText, ikkeBesøgt);


//new Link (123, "test", ikkeBesøgt);


