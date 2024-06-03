// html(), text()


var result = $('#box1').html()  //문자열로 가져옴

//html은 하위요소를 문자열로 반환한다.

$('#box2').text(result)  //텍스트 로 표기

$('#box1 p').html('<a href="#">안녕</a>')
//하위요소를 제거하고 새 요소로 변경

$('#box3 h2').text($('#box1 h2').text())
$('#box3 p').text($('#box1 p').text())

//요소의 텍스트를 가져오거나 생성한다.

//attr(문자열)   attribute     ,   removeAttr()
var srcValue = $('#box4 img').attr('src')
var altValue = $('#box4 img').attr('alt')
var borderValue = $('#box4 img').attr('border')
console.log(srcValue);
console.log(altValue);
console.log(borderValue);


$('#box4 img')
    .attr({
        src: '../image/card_02.jpg',
        width: 150,
        alt: 'card2'
    })
    .removeAttr('border')

    

//var() 폼 요소의 속성값을 가져오거나 적용.

console.log($('#user_name').val());
console.log($('#user_id').val());

$('#user_name').val('임꺽정')
$('#user_id').val('picasso')

//prop() property 폼 요소의 상태 속성값을 가져오거나 적용시킴.
console.log($('#chk_1').prop('checked'));
console.log($('#chk_2').prop('checked'));
$('#chk_3').prop('checked', true)
console.log($('#books').prop('selectedIndex'));