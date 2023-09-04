
class Link {
    constructor(urls, texts){
        this.linkEl = document.createElement("a");
        this.linkEl.href = urls;
        this.linkEl.innerText = texts;
    };
    update(){
        this.li = document.createElement("li")
        this.li.append(this.linkEl)
        this.links = document.querySelector("#links");
        this.links.append(this.li);
    };
};

class Element {
    constructor(){
        
    };
};

let links = [];
let Elements = [];

let urls =["https://da.wikipedia.org/wiki/Kalaha", "https://www.br.dk/blog/kalaha-regler/", "https://www.bog-ide.dk/produkt/115216/kalaha-dize", "https://www.coolshop.dk/legetoej/braetspil-og-spil/kalaha/", "https://kalahamusic.dk/"];
let texts = ["Link til Wikipwdia.org", "Link til regler", "Link til webshop 1", "Link til webshop 2", 'Link til bandet "Kalaha"'];

for (let i = 0; i < urls.length; i++){
    let newLink = new Link(urls[i], texts[i]);
    links.push(newLink);
};

links.forEach(Link => {
    Link.update();
});