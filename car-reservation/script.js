document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().slice(0, 10);
  document.getElementById("today").textContent = today;

  document.getElementById("reserveButton").addEventListener("click", () => {
    const GAS_URL = "https://script.google.com/macros/s/【あなたのデプロイURL】/exec";
    const carName = today;

    fetch(`${GAS_URL}?car=${encodeURIComponent(carName)}`)
      .then(res => res.text())
      .then(text => alert(`${carName} に予約しました！（スプレッドシート連携完了）`))
      .catch(err => alert("エラーが発生しました"));
  });
});
