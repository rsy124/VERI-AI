function checkData() {
  const inputText = document.getElementById("inputText").value;

  if (!inputText.trim()) {
    alert("Please enter some text to check.");
    return;
  }

  showLoading();

  setTimeout(() => {
    hideLoading();
    document.getElementById("result").innerHTML = `<strong>Result:</strong> Fact check completed! ✅`;
    document.getElementById("result").classList.remove("hidden");
  }, 3000); // Simulate 3-second processing time
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
    document.getElementById("result").innerHTML = `<strong>Result:</strong> File processed successfully! 📁`;
    document.getElementById("result").classList.remove("hidden");
  }, 3000); // Simulate 3-second processing time
}

function showLoading() {
  document.getElementById("loading").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
}

function hideLoading() {
  document.getElementById("loading").classList.add("hidden");
}
