// カレンダー表示とボタン取得
const calendar = document.getElementById("calendar");
const button = document.getElementById("reserveButton");

// Google Apps Script の WebアプリURL（もっちんさんのデプロイURL）
const GAS_URL = "https://script.google.com/macros/s/AKfycbxo2ygU1ISBo83jaXwcCw-Q6_JxZg6LJbgOtAvPmXGg1KU9Nwj39lmHZ3OJfS9E7Tv1/exec";

// 今日の日付を画面に表示
const today = new Date().toISOString().split("T")[0];
calendar.textContent = `本日：${today}`;

// ボタンをクリックしたときの動作
button.addEventListener("click", () => {
  const car = "車A";  // ← 固定で「車A」を送る
  const url = `${GAS_URL}?car=${encodeURIComponent(car)}`;  // パラメータ付きURL作成

  // Google Apps Script にデータ送信
  fetch(url)
    .then(res => res.text())  // レスポンスをテキストで受け取る
    .then(data => {
      alert(`${today} に ${car} を予約しました！`);
    })
    .catch(err => {
      console.error("エラー:", err);
      alert("予約に失敗しました");
    });
});
