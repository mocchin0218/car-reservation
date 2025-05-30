const calendar = document.getElementById("calendar");
const button = document.getElementById("reserveButton");

const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD形式
calendar.textContent = `本日：${today}`;

button.addEventListener("click", () => {
  alert(`${today} に予約しました！（まだスプレッドシート連携なし）`);
});
