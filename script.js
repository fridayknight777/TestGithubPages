function sayHello() {
    alert("Hello from GitHub Pages!");
  }
  
  unction pickAnimal() {
    const rand = Math.random() * 100;
    let animal;

    if (rand < 89) {
      // Common
      const common = ["Cat", "Dog", "Pidgeon", "Horse"];
      animal = common[Math.floor(Math.random() * common.length)];
    } else if (rand < 99) {
      // Rare
      const rare = ["Whale", "Frog"];
      animal = rare[Math.floor(Math.random() * rare.length)];
    } else {
      // Legendary
      animal = "Ape";
    }

    alert("You got: " + animal);
  }