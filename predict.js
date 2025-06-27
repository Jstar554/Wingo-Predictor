async function predict() {
  const period = document.getElementById("periodInput").value;
  if (!period) return alert("Please enter a period number.");

  const res = await fetch("data.json");
  const data = await res.json();

  const last1000 = data.slice(-1000);
  const freq = Array(10).fill(0);
  last1000.forEach(item => { freq[item.number]++; });

  let predicted = freq.indexOf(Math.max(...freq));
  let size = predicted >= 5 ? "Big" : "Small";

  document.getElementById("result").innerHTML =
    `Prediction for Period <b>${period}</b>:<br><br>
     Number: <b>${predicted}</b><br>
     Type: <b>${size}</b>`;
    }
