async function predict() {
  const periodInput = document.getElementById("periodInput").value;
  const resultDiv = document.getElementById("result");

  try {
    const response = await fetch("data.json");
    const data = await response.json();

    const found = data.find(entry => entry.period === periodInput);

    if (!found) {
      resultDiv.innerHTML = "❌ Period not found in last 1000 records.";
      return;
    }

    const number = found.number;
    const type = number >= 5 ? "Big" : "Small";

    resultDiv.innerHTML = `✅ Number: <b>${number}</b><br>Prediction: <b>${type}</b>`;
  } catch (err) {
    resultDiv.innerHTML = "❌ Error reading data.json file.";
    console.error(err);
  }
}
