// 제이쿼리에서는 로그로 검색할때도 객체로 검색해줘야함

// console.log($('li'));
$('li:first').css('border', '5px solid red') //첫번째 요소
//          ===
$('li').first().css('border', '5px solid blue')//첫번째 요소 선택의 다른 방법.

$('li:last').css('border', '5px solid red') //마지막 요소
//          ===
$('li').last().css('border', '5px solid blue')//마지막 요소 선택의 다른 방법.

$('li:odd').css('border', '5px solid green') //홀수 index 선택 0, 1, 3 , 5 , 7, 9...
$('li:even').css('border', '5px solid red') //짝수 index 선택 0, 2, 4, 6, 8

$('li:first-of-type').css('border', '5px solid blue')//한 무리 중 첫번째 요소만 선택
$('li:last-of-type').css('border', '5px solid blue')//무리들 중 마지막 요소만 선택
$('li:nth-child(2)').css('fontSize', 30) //무리들 중 n 번째 요소만 선택
$('li:nth-child(3n)').css('backgroundColor', '#ccc') //무리들 중 3배수 요소만 선택

$('li:eq(1)').css('border','5px solid black') // 모든 요소 중 인덱스 페이지로 선택
//  ===
$('li').eq(8).css('border','5px solid black') // 모든 요소 중 선택한  인덱스 페이지 선택

$('li:gt(5)').css('border', '5px solid pink') //모든 요소 중 인덱스 5보다 큰 요소들을 전부 변경
$('li:lt(4)').css('border', '5px solid pink') //모든 요소 중 인덱스 4보다 작은 요소들을 전부 변경
$('li').slice(7).css('border', '10px solid #ccc') //모든 요소 중 인덱스 7보다 작은건 잘라내고, 7부터 전부선택
