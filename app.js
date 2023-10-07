var icon = document.getElementById('icon1');

icon.onclick = function () {
  document.body.classList.toggle('light-theme');
  if (document.body.classList.contains('light-theme')) {
    icon.src = 'img/sun.svg';
  } else {
    icon.src = 'img/moon.png';
  }
};
