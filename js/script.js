//gnb 메뉴 
$(function() {
    $('header .menuOpen').on('click', function(){
      $('.gnb').addClass('on');//선택한 요소에 클래스 속성값을 추가
    });
    $('.gnb .close, section').on('click', function() { //닫기버튼과 섹션영역 클릭시 제거
      $('.gnb').removeClass('on');//선택한 요소의 클래스 속성에서 지정한 값만 제거
    });
  });

$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: true //스크롤시 딱 한번만 하고싶을땐 true 왔다갔다 마다 할땐 false
	});    
}); 

//js.slick 슬라이드

$(function(){
  $('.visual .slide').slick({
     arrows: true,  //화살표
     dots: false, //인디케이트 해제 
     fade: true,//페이드효과
     autoplay:true, //자동재생
     autoplaySpeed: 4000, //재생시간
     pauseOnHover: false,
     pauseOnFocus: false   
 });
});

