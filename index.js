
  const textElements = document.querySelectorAll(".copy-text");
const notification = document.getElementById("notification");

textElements.forEach((el) => {
  el.addEventListener("click", function () {
    const text = this.textContent;
    navigator.clipboard.writeText(text).then(() => {
      notification.classList.add("show");
      setTimeout(() => {
        notification.classList.remove("show");
      }, 1000);
    }).catch(err => {
      console.error("Ошибка при копировании:", err);
    });
  });
});

  const main = document.getElementById('main');
    const maxOffset = 460; // максимальное смещение вверх
    const scrollDistance = 400; // за сколько пикселей прокрутки произойдет полное смещение

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const offset = Math.min(scrollY / scrollDistance * maxOffset, maxOffset);
      main.style.transform = `translateY(-${offset}px)`;
    });