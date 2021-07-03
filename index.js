function route() {
  let number = window.location.hash.substr(1)
  let app = document.querySelector('#app');

  number = number || 1;

  // 获取界面
  let div = document.querySelector(`#div${number}`);
  if (!div) {
    div = document.querySelector(`#error_route`);
  }
  div.style.display = 'block'

    // 展示界面
  if (app.children.length > 0) {
    app.children[0].style.display = 'none'
    console.log(app.children[0]);
    document.body.appendChild(app.children[0]);
  }
  app.appendChild(div);
}

route();
window.addEventListener('hashchange', () => {
  route();
});

