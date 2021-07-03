const div1 = document.createElement('duv')
div1.innerHTML = '1'
const div2 = document.createElement('duv')
div2.innerHTML = '2'
const div3 = document.createElement('duv')
div3.innerHTML = '3'
const div4 = document.createElement('duv')
div4.innerHTML = '4'

const routeTable = {
  '1':div1,
  '2':div2,
  '3':div3,
  '4':div4
}

function route() {
  let number = window.location.hash.substr(1)
  let app = document.querySelector('#app');

  number = number || 1;

  // 获取界面
  let div = routeTable[number.toString()]
  if (!div) {
    div = document.querySelector(`#error_route`);
  }
  div.style.display = 'block'

    // 展示界面
  app.innerHTML = '';
  app.appendChild(div);
}

route();
window.addEventListener('hashchange', () => {
  route();
});

