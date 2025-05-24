//ロード画面
$(window).on("load", function () {
  $("#splash").delay(1500).fadeOut("slow"); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut("slow"); //ロゴを1.2秒（1200ms）待機してからフェードアウト
});

/*ハンバーガーボタンのアイコン.hamburger-btn*をクリックするたびに.menu-listと.hamburger-btn-lineにクラス名openを付けたり、無くしたりできるようにjsで命令を書いています*/
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  const button = document.querySelector('.openbtn');
  menu.classList.toggle('active');
  button.classList.toggle('active');
}

// フェードイン
window.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".fadein");
  const triggerHeight = window.innerHeight * 0.8; // ウィンドウの80%の高さで発火

  images.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top;

    if (imageTop < triggerHeight) {
      image.style.opacity = 1;
      image.style.transform = "translateY(0)";
    }
  });
});
