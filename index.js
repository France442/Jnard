// dynamic text
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const phrases = ["Making your ideas Happen!"];
const el = document.getElementById("typing");
  
  let sleepTime = 80;
  
  let curPhraseIndex = 0;
  
  const writeLoop = async () => {
    while (true) {
      let curWord = phrases[curPhraseIndex];
  
      for (let i = 0; i < curWord.length; i++) {
        el.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime);
      }
  
      await sleep(sleepTime * 10);
  
      for (let i = curWord.length; i > 0; i--) {
        el.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime);
      }
      
      await sleep(sleepTime * 5);
  
      if (curPhraseIndex === phrases.length - 1) {
        curPhraseIndex = 0;
      } else {
        curPhraseIndex++;
      }
    }
  };
  
  writeLoop();
  // dynamic text end
  
  // Dynamic copyright Year
  const year = new Date().getFullYear();
  document.querySelectorAll('.right').forEach(element => {
    element.innerHTML = year;
  });
  // Dynamic copyright Year end
