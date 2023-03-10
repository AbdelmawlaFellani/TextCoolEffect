const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("h1")?.addEventListener("mouseover", (event) => {
    let iterations = 0;

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter,index) => {
          if (index < iterations) {
            return event.target.dataset.value[index];
          }
           return (letters[Math.floor(Math.random() * (letters.length - 1))]);
        })
        .join("");
      if (iterations >= event.target.dataset.value.length) clearInterval(interval);
      iterations += 1/3;
    }, 35);
  });
});
