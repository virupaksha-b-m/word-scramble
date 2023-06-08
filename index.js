const wordText = document.querySelector("h1"),
hintText = document.querySelector("p span"),
inputFiled = document.querySelector("input"),
timeText = document.querySelector("b"),
refreshBtn = document.querySelectorAll("button")[0],
checkBtn = document.querySelectorAll("button")[1];

let currectWord,timer;

const intiTimer = maxTime =>{
    clearInterval(timer);
    timer = setInterval(()=>{
        if (maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        
        clearInterval(timer);
        alert(`Time off! ${currectWord.toUpperCase()} wzs the currect word`);
        initGame();
        
    },1000);
}

const initGame = () =>{

    intiTimer(30);
    var randomObj = words[Math.floor(Math.random() * words.length)];
    var wordArray = randomObj.word.split("");
    // console.log(wordArray);


    for (let i = wordArray.length-1; i >0 ; i--){
            let j = Math.floor(Math.random() * (i+1));

            [wordArray[i],wordArray[j] ]=[ wordArray[j],wordArray[i]];
            
    }
    // console.log(wordArray, randomObj.word);
    wordText.innerHTML = wordArray.join(" ");
    hintText.innerHTML = randomObj.hint;
    currectWord = randomObj.word.toLowerCase();
    inputFiled.value="";
    inputFiled.setAttribute("maxlength", currectWord.length);
    // console.log(randomObj);

}


const checkWord = () =>{
    let userWord = inputFiled.value.toLowerCase();
    if(!userWord) return alert("please a word to check");
    if(userWord !== currectWord) return alert(`Oop's ${userWord} is not currect`);
    alert(`congrats ${userWord.toUpperCase()} is  a currect word`);
    initGame();
}

refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);   




initGame();

