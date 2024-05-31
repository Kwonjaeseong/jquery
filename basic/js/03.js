$('#list a[target]').css('color', 'red') // 타겟 속성이 있는 A

$('#list a[href^=https]').css('border','5px solid green')
//href 중 https로 시작하는 #요소 선택

$('#list a[href$=net]').css('border', '5px solid blue')
//herf 속성 중 net으로 끝나는 a요소 선택

$('#list a[href*=google]').css('border', '5px solid blue')
//herf 속성 중 google 문자열이 있는 요소 검색

$('li:hidden').css('display', 'block')

$('input:text').css('background','red') 
//input 타입이 text인 요소

$('input:password').css('backgroundColor','green') 
//input 타입이 text인 요소

var v1 = $('#f3 :selected').val()  
console.log(v1);

var v2 = $('#f4 :checked').val()
console.log(v2);

var v3 = $('#f5 :checked').val()
console.log(v3);

$('li:contains("구글")').css('background', 'orange') //li에서 '구글'을 포함한 요소를 선택

$('#f2').contents().filter('input').css('background', 'blue')
// //선택한 요소 전체를 반환

$('li a').has('span').css('border', '2px solid green')
// // a 중에서 span을 가진 요소

$('li').not(':first').css('border', '4px solid aqua')
// 첫번째 요소가 아닌 전체

$('form section').filter('#f5').css('background', 'red') //섹선 중에서 id가 f5인 요소 선택

// $('form').find('#f4').css('background', 'pink') // form안에서 id가 f4인 요소


// //is() method
// console.log($('#list li').eq(3).is());
// console.log($('#sel').is(':selected'));