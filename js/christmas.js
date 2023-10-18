$(function () {
  let i = 0;
  let total = $(".slideblack li").length;
  //console.log(total)

  //자동넘김

  // let timer = setInterval(start, 5000);

  // 앞으로 슬라이드 함수
  function start() {
    i++;

    if (i == total - 1) {
      $(".slideblack ul")
        .stop()
        .animate({ marginLeft: "-300%" }, function () {
          $(".slideblack ul").css({ marginLeft: "0" });
        });
      i = 0;
    } else {
      $(".slideblack ul")
        .stop()
        .animate({ marginLeft: `${-i * 100}%` });
    }
  }

  // 다음버튼 클릭시 이벤트
  $(".slidecon .next").click(function () {
    //clearInterval(timer);
    start();
    // timer = setInterval(start, 3000);
  });

  function back() {
    i--;

    if (i < 0) {
      $(".slideblack ul").css({ marginLeft: "-300%" });
      $(".slideblack ul").stop().animate({ marginLeft: "-200%" });
      i = 3;
    } else {
      $(".slideblack ul").animate({ marginLeft: `${-i * 100}%` });
    }
  }

  // 이전버튼 클릭시 이벤트
  $(".slidecon  .prev").click(function () {
    //clearInterval(timer);
    back();
    // timer = setInterval(start, 3000);
  });
});

/*스크롤*/

window.addEventListener("scroll", function () {
  let a = window.scrollY;

  if (a >= 480) {
    $(".con2 h2").addClass("on");
    $(".con2 li").addClass("on");
    $(".con2 .moree").addClass("on");
  }

  if (a >= 2600) {
    $(".con3_3").addClass("on");
    $(".con3_2 h2:nth-of-type(1)").addClass("on");
    $(".con3_2 h2:nth-of-type(2)").addClass("on");
    $(".con3_2 h2:nth-of-type(3)").addClass("on");
    $(".con3 .moree").addClass("on");
    $(".con3_1").addClass("on");
  }

  if (a >= 3200) {
    $(".con4_1 img").addClass("on");
    $(".con4_1 p:nth-of-type(1)").addClass("on");
    $(".con4_1 p:nth-of-type(2)").addClass("on");
  }

  if (a >= 4100) {
    $(".con5_2 ul").addClass("on");
  }

  if (a >= 5000) {
    $(".t1").addClass("on");
    $(".t2").addClass("on");
    $(".t3").addClass("on");
  }
  if (a >= 5200) {
    $(".con6 .videoimg").addClass("on");
  }
});
