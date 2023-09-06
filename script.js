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

let links = [];
let elements = [];

//Links
elements.push({url: "123", text: "test"});
elements.push({url: "https://da.wikipedia.org/wiki/Kalaha", text: "Link til Wikipwdia.org"});
elements.push({url: "https://www.br.dk/blog/kalaha-regler/", text: "Link til regler"});
elements.push({url: "https://www.bog-ide.dk/produkt/115216/kalaha-dize", text: "Link til webshop 1"});
elements.push({url: "https://www.coolshop.dk/legetoej/braetspil-og-spil/kalaha/", text: "Link til webshop 2"});
elements.push({url: "https://kalahamusic.dk/", text: 'Link til bandet "Kalaha"'});



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
    elements.unshift({url: urlInput, text: titleInput});
    links.unshift(new Link(elements[0]));
    links[0].update();
    document.querySelector("#urlLink").value = "";
    document.querySelector("#titleLink").value = "";
};