function openAndClose() {
  let tab = event.target.id
  console.log(tab)
  switch (tab) {
    case "image1":
    case "tab1":
    case "tab11":
    case "tab111":
    case "tab1111":
      if (document.getElementById("answer1").style.display === "none") {
        document.getElementById("answer1").style.display = "initial"
        document.getElementById("image1").src = "/imgs/downArrow.svg"
      } else {
        document.getElementById("answer1").style.display = "none"
        document.getElementById("image1").src = "/imgs/upArrow.svg"
      }
      break
    case "image2":
    case "tab2":
    case "tab22":
    case "tab222":
    case "tab2222":
      if (document.getElementById("answer2").style.display === "none") {
        document.getElementById("image2").src = "/imgs/downArrow.svg"
        document.getElementById("answer2").style.display = "initial"
      } else {
        document.getElementById("answer2").style.display = "none"
        document.getElementById("image2").src = "/imgs/upArrow.svg"
      }
      break
    case "image3":
    case "tab3":
    case "tab33":
    case "tab333":
    case "tab3333":
      if (document.getElementById("answer3").style.display === "none") {
        document.getElementById("answer3").style.display = "initial"
        document.getElementById("image3").src = "/imgs/downArrow.svg"
      } else {
        document.getElementById("answer3").style.display = "none"
        document.getElementById("image3").src = "/imgs/upArrow.svg"
      }
      break
    default:
      break
  }
}

