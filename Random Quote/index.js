const quotes = {};
quotes[0] =
  "A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful - L. R. Ellert";
quotes[1] =
  "Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot. - Wayne Gretzky";
quotes[2] =
  "No one would have crossed the ocean if he could have gotten off the ship in the storm. - Charles Kettering";
quotes[3] =
  "Make the decision, make another. Remake one past, you cannot. - Yoda";
quotes[4] =
  "I had it in my heart. I believed in myself, and I had confidence. I knew how to do it, had natural talent and I pursued it. - Muhammad Ali";
quotes[5] =
  "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek - Barack Obama";

let quote = document.getElementById("quote");
let quotee = document.getElementById("quotee");
let generate = document.getElementById("generate");
let i = 0;
quote.innerHTML =
  '" ' + quotes[i].split("").splice(0, quotes[i].indexOf("-")).join("") + ' "';
quotee.innerHTML = quotes[i].split("").splice(quotes[i].indexOf("-")).join("");

generate.addEventListener("click", (c) => {
  if (i < 5) {
    i++;
    quote.innerHTML =
      '" ' +
      quotes[i].split("").splice(0, quotes[i].indexOf("-")).join("") +
      '"';
    quotee.innerHTML = quotes[i]
      .split("")
      .splice(quotes[i].indexOf("-"))
      .join("");
  } else {
    i = 0;
    quote.innerHTML =
      '" ' +
      quotes[i].split("").splice(0, quotes[i].indexOf("-")).join("") +
      ' "';
    quotee.innerHTML = quotes[i]
      .split("")
      .splice(quotes[i].indexOf("-"))
      .join("");
  }
});
