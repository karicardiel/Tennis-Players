function playerPick() {
  let name = prompt("What is your name?");
  let player = prompt("Which one is your favorite player?");
  if (player === "Roger Federer") {
    alert("Great " + name + ", the Swiss Master is happy for your choice 🇨🇭");
  } else {
    alert("Great " + name + ", you picked a great player!");
  }
}

let favorite = document.querySelector(".favorite");
favorite.addEventListener("click", playerPick);
