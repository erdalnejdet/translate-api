const fromLang = document.querySelector("#from-lang");
const toLang = document.querySelector("#to-lang");
const btnTranslate = document.querySelector("#btnTranslate");
const fromtext = document.querySelector("#from-text");
const totext = document.querySelector("#to-text");
const btnclear = document.querySelector(".btn");
const clear = document.querySelector(".text-controls")

for(let lang in languages) {
    let option = `<option value="${lang}">${languages[lang]}</option>`;
    fromLang.insertAdjacentHTML("beforeend", option);
    toLang.insertAdjacentHTML("beforeend", option);

    fromLang.value = "tr-TR";
    toLang.value = "en-GB";
}

btnTranslate.addEventListener("click", () => {
let text =fromtext.value;
let from =fromLang.value;
let to =toLang.value;
const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`;
fetch(url)
.then(res=> res.json())
.then(data => {
  
    totext.value =data.responseData.translatedText;
    if(totext.value.length > 0){
        btnclear.removeAttribute("disabled");
        console.log(totext);
      
    }
});
 


});

btnclear.addEventListener("click", () =>{
   
    if(totext.value.length ==0){
        alert("içerik giriniz");
    }
    else{
        fromtext.value="";
        totext.value="";
    }
    });