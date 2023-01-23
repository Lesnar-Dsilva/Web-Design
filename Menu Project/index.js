const menu = [
  {
    category: "lunch",
    id: 1,
    name: "Hamburger",
    image: "hamburger.jpg",
    price: "£5.00",
    description:
      "This blanched pecans dish is relatively soft with a juicy texture. It is balanced with sorrel (dock) with turmeric and has just the right amount of onion powder. It smells invigorating with pitanga. It is weak and insipid. You can really feel how gluten free and how high in magnesium it is.",
  },
  {
    category: "snack",
    id: 2,
    name: "Hotdog",
    image: "hotdog.jpg",
    price: "£2.00",
    description:
      "This fermented chickpeas breakfast is utterly chewy with an electric texture. It compares to oats with coriander-blair and has a touch of galangal root powder. It smells elusive with a hint of lotus root. It is old and strange. You can really feel how high in calcium and how free trade it is.",
  },
  {
    category: "snack",
    id: 3,
    name: "Fries",
    image: "fries.jpeg",
    price: "£3.00",
    description:
      "This charred feijoa eggroll is moderately gooey with a crunchy texture. It has an undertone of broadbeans (fava beans) with vitex and has aloe vera. It smells like a bouquet with mangos. It is mildly woodsy. You can really feel how low calorie and how no preservatives it is.",
  },
  {
    category: "snack",
    id: 4,
    name: "Corn Dog",
    image: "corn_dog.jpg",
    price: "£3.00",
    description:
      "This infused swiss chard stroganoff is quite tender with a silky texture. It is balanced with split peas with calamint and has a tiny bit of nasturtium. It smells cutting with an overwhelming amount of prairie turnips. It is strongly southern. You can really feel how antioxidant rich and how whole food it is.",
  },
  {
    category: "lunch",
    id: 5,
    name: "Biscuits and Gravy",
    image: "biscuits_gravy.jpg",
    price: "£10.00",
    description:
      "This broiled cantaloupe pudding is a touch grainy with a grainy texture. It indicates cranberries with rosemary and has a dash of clove. It smells tart with an overwhelming amount of lemon peel. It is certainly spicy. You can really feel how packed with phytonutrients and how high in zinc it is.",
  },
  {
    category: "dinner",
    id: 6,
    name: "Buffalo Wings",
    image: "buffalo_wings.jpg",
    price: "£12.00",
    description:
      "This infused banana cake is hardly fizzy with a crunchy texture. It compares to arugula with yarrow and has cassia bark. It smells odor-free with kohlrabi. It is sharp and dry. You can really feel how organic and how quality guaranteed it is.",
  },
  {
    category: "lunch",
    id: 7,
    name: "Macaroni and Cheese",
    image: "mac_cheese.jpg",
    price: "£7.00",
    description:
      "This whipped fava beans broth is thoroughly crusty with a mushy texture. It bursts with the flavor of finger millet with cicely and has a bit of sweet woodruff. It smells like tobacco with an overwhelming amount of butterbur. It is thick and savory. You can really feel how high in enzymes and how unsulfured it is.",
  },
  {
    category: "snacks",
    id: 8,
    name: "Tater Tots",
    image: "tater_tots.jpg",
    price: "£8.00",
    description:
      "This breaded Georgia pecans pilaf is entirely flaky with a delicate texture. It parallels Sea Island red peas with milk thistle and has salvia. It smells like cinnamon with a great deal of cherimoya. It is indescribably delicious. You can really feel how unsweetened and how alkaline it is.",
  },
  {
    category: "dessert",
    id: 9,
    name: "Chocolate Chip Cookies",
    image: "chocolate_chip_cookies.jpg",
    price: "£15.00",
    description:
      "This seared corn bisque is kind of burned with a dense texture. It compares to pistachios with mullein and has poppy seeds. It smells savory with a tiny bit of leeks. It is highly localized. You can really feel how high in zinc and how no artificial sweeteners it is.",
  },
  {
    category: "breakfast",
    id: 10,
    name: "Grilled Cheese",
    image: "grilled_cheese.jpg",
    price: "£9.00",
    description:
      "This charred flaxseed lunch is reasonably chewy with a delicate texture. It is infused with amaranth leaves with dittany of crete and has a dash of mustard seeds. It smells gentle with collards. It is strong and sharp. You can really feel how 0g of added sugar and how sustainably sourced it is.",
  },
];

const menuCenter = document.querySelector(".menuCenter");

const menuBtns = document.querySelector(".menuBtns");

window.addEventListener(
  "DOMContentLoaded",
  displayMenuItem(menu),
  displayMenuBtns()
);

function displayMenuItem(menu) {
  let displayMenu = menu.map(function (menuItem) {
    return ` <!-- Single Item -->
        <article class="menuItem">
          <img src=${menuItem.image} class="photo" alt=${menuItem.name} />
          <div class="menuItemInfo">
            <header class="itemInfo">
              <h4 class="itemName">${menuItem.name}</h4>
              <h4 class="itemPrice">${menuItem.price}</h4>
            </header>

            <p class="itemText">
              ${menuItem.description}
            </p>
          </div>
        </article>
        <!-- End of Single Item -->`;
  });
  displayMenu = displayMenu.join("");
  menuCenter.innerHTML = displayMenu;
}

function displayMenuBtns() {
  let displayMenuBtn = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  let categoryBtns = displayMenuBtn
    .map(function (category) {
      return `<button type="button" class="filterBtn" data-id=${category}>${category}</button>`;
    })
    .join("");

  menuBtns.innerHTML = categoryBtns;
  let filterBtns = menuBtns.querySelectorAll(".filterBtn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      let category = e.currentTarget.dataset.id;
      let menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItem(menu);
      } else {
        displayMenuItem(menuCategory);
      }
    });
  });
}
