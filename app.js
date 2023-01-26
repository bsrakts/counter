let outputEl = document.querySelector(".outputEl");

let output = 0;
let timeout;


function started(x) {
  if (x == 1) {
    clearTimeout(timeout);
    outputEl.innerHTML = 0;
    output = 0;
  }
  else{
  timeout = setInterval(() => {
    output++;
    outputEl.textContent = output;
  }, 1000);
  }
}
