// スプレッドシート連携のURLを貼り付けてください
const GAS_URL = "https://script.google.com/macros/s/AKfycbxo2ygU1ISBo83jaXwcCw-Q6_JxZg6LJbgOtAvPmXGg1KU9Nwj39lmHZ3OJfS9E7Tv1/exec";

// 今日の日付を表示
const today = new Date().toISOString().slice(0, 10);
document.getElementById("today").textContent = today;

// ボタンのクリックイベント
document.getElementById("reserveButton").addEventListener("click", () => {
  const url = `${GAS_URL}?car=${encodeURIComponent(today)}`;

  fetch(url)
    .then(res => res.text())
    .then(data => {
      alert(`${today} に予約しました！（まだスプレッドシート連携なし）`);
      console.log(data);
    })
    .catch(err => {
      alert("エラーが発生しました");
      console.error(err);
    });
});
