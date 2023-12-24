let imgBox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");

function generateQR() {
  if (qrText.value.length > 0) {
    //   imgBox.style.display = "block"; one way to do qr code hiding and showing but has no animation of 0 height to 100 height instead it's glitchy
    imgBox.classList.add("show-img");
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

document.querySelector("button").addEventListener("click", () => {
  generateQR();
});

qrText.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    generateQR();
  }
});
