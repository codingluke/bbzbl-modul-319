//"Oct 27, 2023 14:45:00"
// Set the date we're counting down to
export const setTimer = (id, toDate, endText) => {
  const countDownDate = new Date(toDate).getTime();
  // Update the count down every 1 second
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let text = "";
    if (days) text += `${days} <sup>Tag</sup> `;
    if (hours) text += `${hours} <sup>std</sup> `;
    if (minutes) text += `${minutes} <sup>min</sup> `;
    if (!hours && !minutes && seconds) text += `${seconds} <sup>sek</sup>`;
    document.getElementById(id).innerHTML = text;
    if (distance < 0) {
      clearInterval(x);
      document.getElementById(id).innerHTML = endText;
    }
  }, 1000);
};
