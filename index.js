var audio = new Audio("./music/David_Hilowitz_-_Equilibrium_I_Cello_version.mp3");
audio.playbackRate = 1;
audio.loop = true
function init(){
  e = document.getElementById("input-server")
  e.value= "http://ucsales/xphoneconnect/restapi/anybell/read?channel=CC4BWAL3"
  e.readOnly=true
  reloadDevices()
  // startPolling()
}
function reloadDevices() {
  var mediaDevices = navigator.mediaDevices.enumerateDevices().then((devices) => {
    console.log(devices)
    outputdevices = devices.filter(x => { return x.kind == "audiooutput" && x.deviceId != "communications" && x.deviceId != "default" })
    console.log(outputdevices)
    e = document.getElementById("device-selector")
    e.innerHTML = ""
    for (let index = 0; index < outputdevices.length; index++) {
      const x = outputdevices[index];
      x.kind == "audiooutput" && x.deviceId != "communications" && x.deviceId != "default"
      opt = document.createElement("option")
      opt.value = x.deviceId
      opt.text = x.label
      e.append(opt)
    }
  });
  console.log("Devices Updated")
}
function startSound() {
  e = document.getElementById("device-selector")
  output = e.value
  var mediaDevices = navigator.mediaDevices.enumerateDevices();
  // console.log(mediaDevices);
  audio.setSinkId(output)
  audio.play()
  console.log("Started Playback")
}
function stopSound() {
  audio.pause();
  audio.currentTime = 0;
  console.log("Stopped playback")
}
function changeSound() {

}


//https://stackoverflow.com/questions/31061838/how-do-i-cancel-an-http-fetch-request
const startPolling = async () => {
  e = document.getElementById("input-server")
  lbl = document.getElementById("last-received")
  link=e.value
  console.log(link)
  while (true) {
    await fetch(link).then(x => x.text()).then(text => {
      console.log(text)
      lbl.text=text
      if (text == "Ringing" || text == "Connected" || text == "Dropped") {
        window.myAPI.send("toMain", text)
      }
      if (text == "Ringing") {
        startSound()
      }
      if (text == "Connected" || text == "Dropped") {
        stopSound()
      }

    })
  }
}