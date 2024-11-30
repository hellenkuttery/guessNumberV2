// 1-Öncelikle bir rastgele sayı tutturacağız.
let rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);
let message = document.querySelector(".msg");
let check = document.querySelector(".check");
const guess = document.querySelector(".guess");
let myScore = document.querySelector(".hak");
const body=document.querySelector("body")
const img=document.querySelector(".img")

let hak = 10;
let enYuksekSkor = 0;
img.style.display="none"

//* her check butonuna basınca olacaklar

//    document.querySelector(".check").onclick=()=>{}

check.addEventListener("click", () => {
  const tahmin = guess.value; // inputtan alınan değer
  console.log(tahmin);
  /* -------------------------------------------------------------------------- */
  // Tahminde 3 durum ortaya çıkabilir

  // -YA doğru bulmuşsunuzdur
  // -YA yanlıştır
  // -YA Canı sıkılana boş boş basmıştır.
  /* -------------------------------------------------------------------------- */
  //?tahmin girilmeden check e basılmasın. Boş boş basını engelleme
  if (!tahmin) {
    message.textContent = "lütfen bir tahmin giriniz";
    
  }
  //? Tahmin doğruysa
  else if (tahmin == rastgeleSayi) {

    document.querySelector(".container").style.display="none";
    img.style.display="block"
    // message.textContent = "🌻Tebrikler Bildiniz🌻";
    // document.querySelector("body").style.backgroundColor = "green";
    // //? Tahmininiz bu sayı diye belirtmek için
    // document.querySelector(".number").textContent = rastgeleSayi;
    // check.disabled = true;

    // if (hak>enYuksekSkor) {
    //     enYuksekSkor=hak;
    //     document.querySelector(".top-score").textContent=enYuksekSkor
    // }
    
  } else {
    if (hak > 1) {
      hak--;
      myScore.textContent = hak;

      tahmin > rastgeleSayi
        ? (message.textContent = "Azalt")
        : (message.textContent = "Arttır");
    }
    else{
        document.querySelector("body").style.backgroundColor = "red";
        message.textContent="Oyunu Kaybettiniz."
        check.disabled = true;
        myScore.textContent=0;

    }
  
  }

});


//* Again butonuna basınca olacaklar
document.querySelector(".again").onclick = () => {
    rastgeleSayi = Math.ceil(Math.random() * 20);
    console.log(rastgeleSayi);
    message.textContent = "Oyun yeni oyuncu için tekrar başlıyor";
  
    document.querySelector("body").style.backgroundColor = "#2d3436";
  
    document.querySelector(".number").textContent = "?";
  
    document.querySelector(".guess").value = "";
  
    myScore = 10;
  
    document.querySelector(".my-score").textContent = myScore;
    document.querySelector(".check").disabled = false;
  };
  