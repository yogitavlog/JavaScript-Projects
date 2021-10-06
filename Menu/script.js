var bodyElement = document.body;
var section = document.createElement("section");
var main = document.createElement("div");
var heading = document.createElement("h2");
var line = document.createElement("div");
var buttonContainer = document.createElement("div");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
var button5 = document.createElement("button");
var center = document.createElement("div");

/*ARTICLE 1*/
var article1 = document.createElement("article");
var Img1 = document.createElement("img");
var imgInfo1 = document.createElement("div");
var header1 = document.createElement("header");
var header11 = document.createElement("h4");
var header12 = document.createElement("h4");
var paragraph1 =  document.createElement("p");
var orderBtn = document.createElement("button");

/*ARTICLE 2*/
var article2 = document.createElement("article");
var Img2 = document.createElement("img");
var imgInfo2 = document.createElement("div");
var header2 = document.createElement("header");
var header21 = document.createElement("h4");
var header22 = document.createElement("h4");
var paragraph2 =  document.createElement("p");

/*ARTICLE 3*/
var article3 = document.createElement("article");
var Img3 = document.createElement("img");
var imgInfo3 = document.createElement("div");
var header3 = document.createElement("header");
var header31 = document.createElement("h4");
var header32 = document.createElement("h4");
var paragraph3 =  document.createElement("p");

/*ARTICLE 4*/
var article4 = document.createElement("article");
var Img4 = document.createElement("img");
var imgInfo4 = document.createElement("div");
var header4 = document.createElement("header");
var header41 = document.createElement("h4");
var header42 = document.createElement("h4");
var paragraph4 =  document.createElement("p");

/*ARTICLE 5*/
var article5 = document.createElement("article");
var Img5 = document.createElement("img");
var imgInfo5 = document.createElement("div");
var header5 = document.createElement("header");
var header51 = document.createElement("h4");
var header52 = document.createElement("h4");
var paragraph5 =  document.createElement("p");

/*ARTICLE 6*/
var article6 = document.createElement("article");
var Img6 = document.createElement("img");
var imgInfo6 = document.createElement("div");
var header6 = document.createElement("header");
var header61 = document.createElement("h4");
var header62 = document.createElement("h4");
var paragraph6 =  document.createElement("p");

/*ARTICLE 7*/
var article7 = document.createElement("article");
var Img7 = document.createElement("img");
var imgInfo7 = document.createElement("div");
var header7 = document.createElement("header");
var header71 = document.createElement("h4");
var header72 = document.createElement("h4");
var paragraph7 =  document.createElement("p");

/*ARTICLE 8*/
var article8 = document.createElement("article");
var Img8 = document.createElement("img");
var imgInfo8 = document.createElement("div");
var header8 = document.createElement("header");
var header81 = document.createElement("h4");
var header82 = document.createElement("h4");
var paragraph8 =  document.createElement("p");

/*ARTICLE 9*/
var article9 = document.createElement("article");
var Img9 = document.createElement("img");
var imgInfo9 = document.createElement("div");
var header9 = document.createElement("header");
var header91 = document.createElement("h4");
var header92 = document.createElement("h4");
var paragraph9 =  document.createElement("p");

/*ARTICLE 10*/
var article10 = document.createElement("article");
var Img10 = document.createElement("img");
var imgInfo10 = document.createElement("div");
var header10 = document.createElement("header");
var header101 = document.createElement("h4");
var header102 = document.createElement("h4");
var paragraph10 =  document.createElement("p");


/*class and id name to tags*/
section.className = "menu";
main.className = "title";
line.className = "underline";
buttonContainer.className = "btn-container";
button1.className = "filter-btn";
button1.type = "button";
button1.id = "all";
button2.className = "filter-btn";
button2.type = "button";
button2.id = "breakfast";
button3.className = "filter-btn";
button3.type = "button";
button3.id = "lunch";
button4.className = "filter-btn";
button4.type = "button";
button4.id = "shakes";
button5.className = "filter-btn";
button5.type = "button";
button5.id = "dinner";
center.className = "section-center";

/*ARTICLE-1 CLASSNAMES*/
article1.className = "menu-item";
Img1.className = "photo";
Img1.alt = "buttermilk";
imgInfo1.className = "item-info";
header12.className = "price";
paragraph1.className = "item-text";
orderBtn.type = "button";
orderBtn.className = "order-btn";

/*ARTICLE-2 CLASSNAMES*/
article2.className = "menu-item";
Img2.className = "photo";
Img2.alt = "diner";
imgInfo2.className = "item-info";
header22.className = "price";
paragraph2.className = "item-text";

/*ARTICLE-3 CLASSNAMES*/
article3.className = "menu-item";
Img3.className = "photo";
Img3.alt = "godzilla";
imgInfo3.className = "item-info";
header32.className = "price";
paragraph3.className = "item-text";

/*ARTICLE-4 CLASSNAMES*/
article4.className = "menu-item";
Img4.className = "photo";
Img4.alt = "country";
imgInfo4.className = "item-info";
header42.className = "price";
paragraph4.className = "item-text";

/*ARTICLE-5 CLASSNAMES*/
article5.className = "menu-item";
Img5.className = "photo";
Img5.alt = "egg";
imgInfo5.className = "item-info";
header52.className = "price";
paragraph5.className = "item-text";

/*ARTICLE-6 CLASSNAMES*/
article6.className = "menu-item";
Img6.className = "photo";
Img6.alt = "oreo";
imgInfo6.className = "item-info";
header62.className = "price";
paragraph6.className = "item-text";

/*ARTICLE-7 CLASSNAMES*/
article7.className = "menu-item";
Img7.className = "photo";
Img7.alt = "bacon";
imgInfo7.className = "item-info";
header72.className = "price";
paragraph7.className = "item-text";

/*ARTICLE-8 CLASSNAMES*/
article8.className = "menu-item";
Img8.className = "photo";
Img8.alt = "american";
imgInfo8.className = "item-info";
header82.className = "price";
paragraph8.className = "item-text";

/*ARTICLE-9 CLASSNAMES*/
article9.className = "menu-item";
Img9.className = "photo";
Img9.alt = "quarantine";
imgInfo9.className = "item-info";
header92.className = "price";
paragraph9.className = "item-text";

/*ARTICLE-10 CLASSNAMES*/
article10.className = "menu-item";
Img10.className = "photo";
Img10.alt = "steak";
imgInfo10.className = "item-info";
header102.className = "price";
paragraph10.className = "item-text";


/*append tags into another tags*/
bodyElement.appendChild(section);
section.appendChild(main);
main.appendChild(heading);
main.appendChild(line);
section.appendChild(buttonContainer);
buttonContainer.appendChild(button1);
buttonContainer.appendChild(button2);
buttonContainer.appendChild(button3);
buttonContainer.appendChild(button4);
buttonContainer.appendChild(button5);
section.appendChild(center);

/*APPEND ARTICLE-1*/
center.appendChild(article1);
article1.appendChild(Img1);
article1.appendChild(imgInfo1);
imgInfo1.appendChild(header1);
header1.appendChild(header11);
header1.appendChild(header12);
imgInfo1.appendChild(paragraph1);
imgInfo1.appendChild(orderBtn);

/*APPEND ARTICLE-2*/
center.appendChild(article2);
article2.appendChild(Img2);
article2.appendChild(imgInfo2);
imgInfo2.appendChild(header2);
header2.appendChild(header21);
header2.appendChild(header22);
imgInfo2.appendChild(paragraph2);

/*APPEND ARTICLE-3*/
center.appendChild(article3);
article3.appendChild(Img3);
article3.appendChild(imgInfo3);
imgInfo3.appendChild(header3);
header3.appendChild(header31);
header3.appendChild(header32);
imgInfo3.appendChild(paragraph3);

/*APPEND ARTICLE-4*/
center.appendChild(article4);
article4.appendChild(Img4);
article4.appendChild(imgInfo4);
imgInfo4.appendChild(header4);
header4.appendChild(header41);
header4.appendChild(header42);
imgInfo4.appendChild(paragraph4);

/*APPEND ARTICLE-5*/
center.appendChild(article5);
article5.appendChild(Img5);
article5.appendChild(imgInfo5);
imgInfo5.appendChild(header5);
header5.appendChild(header51);
header5.appendChild(header52);
imgInfo5.appendChild(paragraph5);

/*APPEND ARTICLE-6*/
center.appendChild(article6);
article6.appendChild(Img6);
article6.appendChild(imgInfo6);
imgInfo6.appendChild(header6);
header6.appendChild(header61);
header6.appendChild(header62);
imgInfo6.appendChild(paragraph6);

/*APPEND ARTICLE-7*/
center.appendChild(article7);
article7.appendChild(Img7);
article7.appendChild(imgInfo7);
imgInfo7.appendChild(header7);
header7.appendChild(header71);
header7.appendChild(header72);
imgInfo7.appendChild(paragraph7);

/*APPEND ARTICLE-8*/
center.appendChild(article8);
article8.appendChild(Img8);
article8.appendChild(imgInfo8);
imgInfo8.appendChild(header8);
header8.appendChild(header81);
header8.appendChild(header82);
imgInfo8.appendChild(paragraph8);

/*APPEND ARTICLE-9*/
center.appendChild(article9);
article9.appendChild(Img9);
article9.appendChild(imgInfo9);
imgInfo9.appendChild(header9);
header9.appendChild(header91);
header9.appendChild(header92);
imgInfo9.appendChild(paragraph9);

/*APPEND ARTICLE-10*/
center.appendChild(article10);
article10.appendChild(Img10);
article10.appendChild(imgInfo10);
imgInfo10.appendChild(header10);
header10.appendChild(header101);
header10.appendChild(header102);
imgInfo10.appendChild(paragraph10);


/*text to the tags*/
heading.innerText = 'Our Menu';
button1.innerText = "All";
button2.innerText = "Breakfast";
button3.innerText = "Lunch";
button4.innerText = "Shakes";
button5.innerText = "Dinner";

/*ARTICLE-1 TEXT*/
Img1.src = "Images/item-1.jpeg";
header11.innerText = "buttermilk pancakes";
header12.innerText = "$15.99";
paragraph1.innerText = "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
orderBtn.innerText = "Order Now";

/*ARTICLE-2 TEXT*/
Img2.src = "Images/item-2.jpeg";
header21.innerText = "diner double";
header22.innerText = "$13.99";
paragraph2.innerText = "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing."

/*ARTICLE-3 TEXT*/
Img3.src = "Images/item-3.jpeg";
header31.innerText = "godzilla milkshake";
header32.innerText = "$6.99";
paragraph3.innerText = "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."

/*ARTICLE-4 TEXT*/
Img4.src = "Images/item-4.jpeg";
header41.innerText = "country delight";
header42.innerText ="$20.99";
paragraph4.innerText = "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"

/*ARTICLE-5 TEXT*/
Img5.src = "Images/item-5.jpeg";
header51.innerText = "egg attack";
header52.innerText ="$22.99"
paragraph5.innerText = "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"

/*ARTICLE-6 TEXT*/
Img6.src = "Images/item-6.jpeg";
header61.innerText = "oreo dream";
header62.innerText ="$18.99"
paragraph6.innerText = "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"

/*ARTICLE-7 TEXT*/
Img7.src = "Images/item-7.jpeg";
header71.innerText = "bacon overflow";
header72.innerText ="$8.99"
paragraph7.innerText = "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"

/*ARTICLE-8 TEXT*/
Img8.src = "Images/item-8.jpeg";
header81.innerText = "american classic";
header82.innerText ="$12.99"
paragraph8.innerText = "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"

/*ARTICLE-9 TEXT*/
Img9.src = "Images/item-9.jpeg";
header91.innerText = "quarantine buddy";
header92.innerText ="$16.99"
paragraph9.innerText = "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."

/*ARTICLE-10 TEXT*/
Img10.src = "Images/item-10.jpeg";
header101.innerText = "steak dinner";
header102.innerText ="$39.99"
paragraph10.innerText = "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."


/*JAVASCRIPT*/
// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
/*const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "Images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "Images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "Images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "Images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "Images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "Images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "Images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "Images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "Images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "steak dinner",
      category: "dinner",
      price: 39.99,
      img: "Images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  const container = document.querySelector(".btn-container");
  
  // load items
  window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
  });
  
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title} />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
  
    sectionCenter.innerHTML = displayMenu;
  }
  
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>
        ${category}
        </button>`;
      })
      .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    // filter items
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        // console.log(menuCategory);
        if (category === "all") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }*/
  

