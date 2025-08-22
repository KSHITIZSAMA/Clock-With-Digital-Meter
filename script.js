function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = ((seconds / 60) * 360) + 90;
  const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

  document.getElementById('second').style.transform = `rotate(${secondDegrees}deg)`;
  document.getElementById('minute').style.transform = `rotate(${minuteDegrees}deg)`;
  document.getElementById('hour').style.transform = `rotate(${hourDegrees}deg)`;

  document.getElementById('digital').innerText = now.toLocaleTimeString();
  document.getElementById('date').innerText = now.toDateString();

  document.getElementById('tick-sound').play().catch(()=>{});
}

setInterval(updateClock, 1000);
updateClock();

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("theme-toggle");
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
