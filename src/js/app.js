function genPosition() {
  return Math.floor(Math.random() * (15 - 0 + 1)) + 0;
}

const parentDiv = document.getElementsByClassName('wrapper')[0];
const img = document.images[0];
img.parentElement.removeChild(img);

for (let i = 0; i < 4 * 4; i += 1) {
  const div = document.createElement('div');
  parentDiv.appendChild(div);
}

function setActive() {
  if (document.images[0]) {
    const activeDiv = document.images[0].parentElement;
    activeDiv.removeChild(img);
  }

  const childDivs = parentDiv.children;
  const index = genPosition();
  childDivs[index].appendChild(img);
}

const timerId = setInterval(setActive, 500);
setTimeout(() => { clearInterval(timerId); }, 10000);
