var sendBtn = document.getElementById("sendBtn");
var output = document.getElementById("output");

sendBtn.addEventListener("click", async function () {
  try {
   const response = await webf.methodChannel.invokeMethod("pong", ["Ping from JS"]);
    console.log(response)
    output.textContent = "Access Token " + response +"token";
  } catch (e) {
    output.innerText = "Error: " + e;
  }
});