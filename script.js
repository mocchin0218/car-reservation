const calendar = document.getElementById("calendar");
const button = document.getElementById("reserveButton");

// 🔗 あなたのGASのURLをここに貼ります（すでに完璧です！）
const GAS_URL = "https://script.google.com/macros/s/AKfycbxo2ygU1ISBo83jaXwcCw-Q6_JxZg6LJbgOtAvPmXGg1KU9Nwj39lmHZ3OJfS9E7Tv1/exec";

// 📅 今日の日付を表示
const today = new Date().toISOString().split("T")[0];
calendar.textContent = `本日：${today}`;

// 🖱 予約ボタンクリックで送信
button.addEventListener("click", () => {
  const car = "車A"; // 今回は固定で「車A」を登録（後で選択式にしてもOK）
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
