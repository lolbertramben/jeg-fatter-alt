class Link {
    constructor(elements){
        this.linkEl = document.createElement("a");
        this.linkEl.href = elements.url;
        this.linkEl.setAttribute("target", "_selfe");
        this.linkEl.innerText = elements.text;
    };
    update(){
        this.li = document.createElement("li")
        this.li.append(this.linkEl)
        this.links = document.querySelector("#links");
        this.links.append(this.li);
    };
};

class Element {
    constructor(url, text){
        this.url = url;
        this.text = text;
    };
};

let links = [];
let elements = [];

//Links
elements.push(new Element("123", "test"));
elements.push(new Element("https://da.wikipedia.org/wiki/Kalaha", "Link til Wikipwdia.org"));
elements.push(new Element("https://www.br.dk/blog/kalaha-regler/", "Link til regler"));
elements.push(new Element("https://www.bog-ide.dk/produkt/115216/kalaha-dize", "Link til webshop 1"));
elements.push(new Element("https://www.coolshop.dk/legetoej/braetspil-og-spil/kalaha/", "Link til webshop 2"));
elements.push(new Element("https://kalahamusic.dk/", 'Link til bandet "Kalaha"'));



for (let i = 0; i < elements.length; i++){
    let newLink = new Link(elements[i]);
    links.push(newLink);
};

links.forEach(Link => {
    Link.update();
});

function addLink(){
    let urlInput = document.querySelector("#urlLink").value;
    let titleInput = document.querySelector("#titleLink").value;
    elements.unshift(new Element(urlInput, titleInput));
    links.unshift(new Link(elements[0]));
    links[0].update();
    document.querySelector("#urlLink").value = "";
    document.querySelector("#titleLink").value = "";
};