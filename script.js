function checkData() {
  const inputText = document.getElementById("inputText").value;

  if (!inputText.trim()) {
    alert("Please enter some text to check.");
    return;
  }

  showLoading();

  // Simulating a fact-checking process (3-second wait)
  setTimeout(() => {
    hideLoading();
    
    // Simulate Fact-Checking Result (Random True or False)
    const isTrue = Math.random() > 0.5;
    const resultText = isTrue 
      ? `<strong>Result:</strong> ✅ This statement is likely TRUE.` 
      : `<strong>Result:</strong> ❌ This statement is likely FALSE.`;

    document.getElementById("result").innerHTML = resultText;
    document.getElementById("result").classList.remove("hidden");
  }, 3000);
}

function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please upload a file to proceed.");
    return;
  }

  showLoading();

  setTimeout(() => {
    hideLoading();
    
    // Simulating File Fact-Checking
    const isTrue = Math.random() > 0.5;
    const resultText = isTrue 
      ? `<strong>Result:</strong> ✅ The contents of the file are likely TRUE.` 
      : `<strong>Result:</strong> ❌ The contents of the file are likely FALSE.`;

    document.getElementById("result").innerHTML = resultText;
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
