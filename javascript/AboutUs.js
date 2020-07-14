function updateTab() {
  tab = event.target.id
  if (tab === "tab1") {
    document.getElementById("vision").style.display = "flex"
    document.getElementById("tab1").style.color = "#707070"
    document.getElementById("tab2").style.color = "white"
    document.getElementById("tab3").style.color = "white"
    document.getElementById("content").innerHTML =
      "  We are an online platform that operates across the healthcare continuum connecting patients to healthcare professionals anytime and anywhere, while incentivising all to stay active."
  } else if (tab === "tab2") {
    document.getElementById("tab2").style.color = "#707070"
    document.getElementById("tab1").style.color = "white"
    document.getElementById("tab3").style.color = "white"
    document.getElementById("vision").style.display = "none"
    document.getElementById("content").innerHTML =
      "BookDoc, with presence in Malaysia, Singapore, Indonesia, Hong Kong and Thailand, is an online platform that operates across the healthcare continuum connecting patients to healthcare professionals anytime and anywhere, while incentivizing all to stay active. BookDoc has established an integrated online ecosystem for local and overseas health travelers. The ecosystem allows users to search and book healthcare professionals anytime and anywhere, and integrates seamlessly with navigation (Google Map, Waze), transport (Grab, Uber, AirAsia), accommodation (Agoda, Airbnb) and recommended restaurants & attractions (TripAdvisor) for a hassle-free and enjoyable experience to healthcare appointments. In addition, through BookDoc Activ, users can earn rewards and discounts from our major retail partners and service providers for maintaining a healthy and active lifestyle. The company is backed by a diverse group of investors from entrepreneurs to seasoned healthcare and insurance professionals, banker, regulators as well as ICT professionals. It has made records in achieving the highest pre-seed and seed valuation in Asia Technology Start-up history. It is available online at www.bookdoc.com, App Store and Google Play Store."
  } else if (tab === "tab3") {
    document.getElementById("tab3").style.color = "#707070"
    document.getElementById("tab2").style.color = "white"
    document.getElementById("tab1").style.color = "white"
    document.getElementById("vision").style.display = "none"
    document.getElementById("content").innerHTML =
      "Our founder, Dato’ Chevy Beh, first came up with the idea for BookDoc after his good friend Wayne’s near-death experience with Dengue Fever. When Wayne first began to feel ill, he underwent blood testing at his doctor’s office and was sent home with negative results. His fever receded, leading him to believe that he was on the road to recovery, but three days later his condition suddenly took a turn for the worse. When he went to see his usual General Practitioner, Wayne was told that he had to go to the hospital immediately. \n While enduring the long wait at the hospital to be admitted, Wayne noticed that his gums started bleeding and he began to feel drastically ill. Panicked, Wayne gave Beh a call and luckily Beh was able to arrange for Wayne’s immediate admission. The attending physician mentioned that had Wayne been admitted any later, his life would have been at risk. \n Inspired by his close friend’s near-death experience and being a seasoned player in the healthcare industry, Beh pledged to do something to address the inefficiencies and information asymmetries in healthcare. He founded BookDoc with the goal of improving the timeliness of diagnosis and helping patients to find appropriate care."
  }
}
document.getElementById("tab1").style.color = "#707070"
