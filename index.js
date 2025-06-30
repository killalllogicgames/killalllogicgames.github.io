
  const textElement = document.getElementById("copy-text");
  const notification = document.getElementById("notification");

  textElement.addEventListener("click", function () {
    const text = this.textContent;
    navigator.clipboard.writeText(text).then(() => {
      // Показать уведомление
      notification.classList.add("show");

      // Скрыть через 3 секунды
      setTimeout(() => {
        notification.classList.remove("show");
      }, 1000);
    }).catch(err => {
      console.error("Ошибка при копировании:", err);
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