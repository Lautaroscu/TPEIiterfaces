const games = [
  {
    name: "Fortnite",
    description:
      "Fortnite is a popular battle royale game where players fight against each other to be the last one standing. It features colorful graphics and various weapons and building mechanics that make it unique.",
    image: "https",
  },
  {
    name: "Minecraft",
    description:
      "Minecraft is a sandbox game that allows players to build and explore virtual worlds made up of blocks. It offers various game modes and endless creative possibilities.",
    image: "https",
  },
  {
    name: "Among Us",
    description:
      "Among Us is a multiplayer game where players work together to complete tasks on a spaceship, while trying to identify and eliminate impostors. It requires strategy and communication to succeed.",
    image: "https",
  },
  {
    name: "Call of Duty",
    description: "Call of Duty",
    image: "https",
  },
  {
    name: "Animal Crossing",
    description: "Animal Crossing",
    image: "https",
  },
];

let list = document.getElementById("list");

function showData() {
  games.forEach((game) => {
    list.innerHTML += `
          <li>${game.description} </li>
      `;
  });
}
console.log("sds");

showData();
