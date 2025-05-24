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

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');				//タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});