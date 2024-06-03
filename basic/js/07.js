//before(), insertBefore(), after(), insertAfter()
$('.wrap p:eq(1)').before('<p>Before</p>') //eq 1번의 이전에 적어놓은 p 태그가 들어간다.
$('<p>insertBefore</P>').insertBefore('.wrap p:eq(0)')//목적어의 순서가 바뀜
$('.wrap p:eq(4)').after('<p>After</p>') //eq4번의 뒤에 p태그가 들어감
$('<p>insertAfter</p>').insertAfter('.wrap p:last')//목적어와 순서가 바뀜

//append() , appendTo(), prepend(), prependTo

$('.list').append('<li>리스트 2</li>') // 뒤로 추가
$('<li>리스트3</li>').appendTo('.list') //목적어가 먼저 오고 뒤에 위치를 적어줌.
$('.list').prepend('<li>리스트 0</li>') //앞쪽으로 추가

//clone() 복제 , empty() 텅 비게, remove() 삭제

var cloneList = $('.list').children().clone()

console.log(cloneList);


$('.list2').append(cloneList) 
$('.list2').empty() //텅비게 함
$('.list').remove()  //내용을 싹 삭제

//replaceAll(), replacewith()

$('h1').replaceWith('<h3>replace</h3>')  // 적은 내용으로 대체
$('<p>replaceAll</p>').replaceAll('.box2 div')  

//unwrap(), wrap(), wrapAll(), wrapInner()

// $('span').unwrap()  //부모요소를 삭제
$('.p1').wrap('<div></div>') //요소를 div로 감싼다.
$('.p3').wrapAll('<div></div>') //요소 전부를 div로 감싼다
$('.box3 ul li').wrapInner('<h3></h3>') //요소의 하위요소를 h3로 감싼다.

