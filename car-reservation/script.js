const calendar = document.getElementById("calendar");
const button = document.getElementById("reserveButton");

const GAS_URL = "https://script.google.com/macros/s/AKfycbxo2ygU1ISBo83jaXwcCw-Q6_JxZg6LJbgOtAvPmXGg1KU9Nwj39lmHZ3OJfS9E7Tv1/exec";

// 今日の日付を表示
const today = new Date().toISOString().split("T")[0];
calendar.textContent = `本日：${today}`;

// ボタンを押したら car=車A を送るようにする
button.addEventListener("click", () => {
  const car = "車A";  // ← ここが重要！
  const url = `${GAS_URL}?car=${encodeURIComponent(car)}`;

  fetch(url)
    .then(res => res.text())
    .then(data => {
      alert(`${today} に ${car} を予約しました！`);
    })
    .catch(err => {
      console.error("エラー:", err);
      alert("予約に失敗しました");
    });
});
