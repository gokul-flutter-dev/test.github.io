var sendBtn = document.getElementById("sendBtn");
var output = document.getElementById("output");
var playVideo = document.getElementById("playVideo");

sendBtn.addEventListener("click", async function () {
  try {
   const response = await webf.methodChannel.invokeMethod("pong", ["Ping from JS"]);
    console.log(response)
    output.textContent = "Access Token " + response +"token";
  } catch (e) {
    output.innerText = "Error: " + e;
  }
});

playVideo.addEventListener("click",async function(){
 try {
      const response = await webf.methodChannel.invokeMethod("playVideo", [
        "https://videos.pexels.com/video-files/28952496/12526868_1920_1080_30fps.mp4"
      ]);
      output.textContent = "Video playing: " + response;
    } catch (e) {
      output.innerText = "Error: " + e;
    }
});