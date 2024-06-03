// 요소의 넓이와 높이
//width(), height ()
//innerwidth(), innerheight()  여백을 포함한 넓이와 높이
//outerwidth(), outerheight() 여백 및 선을 포함한 높이와 넓이

console.log($('.p1').width());  // 100
console.log($('.p1').innerWidth());  //패딩을 포함하여 140
console.log($('.p1').outerWidth());  //패딩을 포함하여 140

$('.p2').outerWidth(100).outerHeight(100)

//요소의 위치를 알아내는 법
//offset() 어떤 요소가 문서에서 가로, 세로로 얼마나 떨어져 있는지에 대한 값을 반환
//position은 기준이되는 부모요소의 위치에서의 가로세로 위치 값
console.log($('.box').offset().top);
console.log($('.box').offset().left);
console.log($('.box').position().top);
console.log($('.box').position().left);

// 스크롤바 위치
$(window).on('scroll', function(){
    console.log($(window).scrollTop());
})