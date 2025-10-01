function sayHello() {
    alert("Hello from GitHub Pages!");
  }
  
  function pickAnimal() {
    const lastClick = localStorage.getItem("lastClickDate");
    const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
  
    if (lastClick === today) {
      alert("You can only pick one animal per day. Come back tomorrow!");
      return;
    }
  
    localStorage.setItem("lastClickDate", today);
  
    const rand = Math.random() * 100;
    let animal;
  
    if (rand < 89) {
      const common = ["Кіт", "Собачка", "Голуб", "Кінь"];
      animal = common[Math.floor(Math.random() * common.length)];
    } else if (rand < 99) {
      const rare = ["Кіт", "Ква"];
      animal = rare[Math.floor(Math.random() * rare.length)];
    } else {
      animal = "Бібізян";
    }
  
    alert("You got: " + animal);
  }
  