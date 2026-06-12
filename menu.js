// 모바일 햄버거 메뉴 열기/닫기
(function () {
  var toggle = document.getElementById("nav-toggle");
  var gnb = document.querySelector(".gnb");
  if (!toggle || !gnb) return;
  toggle.addEventListener("click", function () {
    var open = gnb.classList.toggle("open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
