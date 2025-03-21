function checkData() {
  const inputText = document.getElementById("inputText").value;

  if (!inputText.trim()) {
    alert("Please enter some text to check.");
    return;
  }

  showLoading();

  // Simulating a fact-checking process
  setTimeout(() => {
    hideLoading();
    
    // Simulate Fact-Checking Result (Random True or False)
    const isTrue = Math.random() > 0.5;
    const resultText = isTrue 
      ? `<strong>Result:</strong> ✅ This statement is likely TRUE.` 
      : `<strong>Result:</strong> ❌ This statement is likely FALSE.`;

    // Simulated Sources (You can customize these)
    const sources = [
      "https://www.snopes.com",
      "https://www.factcheck.org",
      "https://toolbox.google.com/factcheck/explorer"
    ];
    
    const sourceLinks = sources.map(source => `<li><a href="${source}" target="_blank">${source}</a></li>`).join("");

    document.getElementById("result").innerHTML = `
      ${resultText}<br>
      <strong>Sources for Verification:</strong>
      <ul>${sourceLinks}</ul>
    `;
    document.getElementById("result").classList.remove("hidden");
  }, 3000);
}

function showLoading() {
  document.getElementById("loading").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
}

function hideLoading() {
  document.getElementById("loading").classList.add("hidden");
}
