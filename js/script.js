// ドロワー
$(".drawer_icon").on("click", function (e) {
  e.preventDefault();
  $(".drawer_icon").addClass("is_active");
  $(".drawer_icon_cross").addClass("is_active");
  $(".drawer_content").addClass("is_active");
});

$(".drawer_icon_cross").on("click", function (e) {
  e.preventDefault();
  $(".drawer_icon").removeClass("is_active");
  $(".drawer_icon_cross").removeClass("is_active");
  $(".drawer_content").removeClass("is_active");
});

// アコーディオン
$(".question_q").on("click", function () {
  $(this).next().slideToggle();
});

// スムーススクロール
$('a[href^="#"]').on("click", function () {
  let header = $(".header").innerHeight();
  let speed = 500;
  let id = $(this).attr("href");
  let target = $("#" == id ? "html" : id);
  let position = $(target).offset().top - header;
  $("html, body").animate({ scrollTop: position }, speed);
  $(".drawer_icon").removeClass("is_active");
  $(".drawer_icon_cross").removeClass("is_active");
  $(".drawer_content").removeClass("is_active");
});
