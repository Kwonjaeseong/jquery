// jquery 적용시 먼저 jquery 홈페이지에서 버전을 따온 후, node.js를 쳐서 프로그램을 설
// 치하고,  npm 사이트에서 jquery 복사 후 터미널에서 복붙해주면 적용됌. 그다음 vs code를 껐다가 
// 켜면 사용할 수 있는데 github 올릴 때 자동으로 생긴 프로그램중에 node_modules는 제외시키고 싶으므로
// 파일에 .gitignore 를 만들어주고 그 안에 node_modules/  쳐서 저장하면
//github에는 뜨지않게 된다.


$(function(){
    //전체선택자
    $('*').css('color', 'red') //전체
    // id선택자
    $('#title').css('color', 'green') //아이디
    $('.sub_title').css(
        {
            color: 'blue',
            border: '4px solid red'
        }
    ) //클래스로 할때 여러가지 정할때는 객체형태로 해야함.
    
    $('h3').css('fontSize', 40) // 요소만 잡을 때
    $('h1, #title').css('backgroundColor', '#ccc') //동시에 여러 요소를 잡을때. 그룹선택자
    $('h1.logo').css('color', '#fff')    //종속 선택자. h1이면서 logo


    //인접 관계 선택자(parents,next, next all...)
    $('h2').parent().css('border', '4px solid #ccc') //부모 요소. parent는 h2의 부모를 따라가므로 여기선 wrap이 해당됌.
    $('section h2').css('color', 'blue') //하위 요소 선택
    $('#list > li').css('border', '2px solid red') // 자식 요소 선택
    $('.section h2').prev().css({
        color: 'yellow',
        backgroundColor: 'lightgreen'
    }) // 이전 요소. prev는 이전이라는 뜻이므로 h2 바로 이전의 h1에 적용이 된다.
    $('.section h2').next().css('color', 'blue',) //다음 요소
    $('.section h3').prevAll().css('fontSize', 40) //이전모든요소. class section안에서 h3 아래의 모든 요소 선택됌.
    $('.section h3').nextAll().css({
        fontSize: '20px',
        color: 'orange'
    })//다음 요소 전부. 즉 h3 아래의 p들이 변경 됌.

    $('.text_1').prevUntil('.title_1').css('border', '2px solid green')//text_1 에서 title_1이전까지. 즉 2,3 타이틀
    $('.text_1').nextUntil('.text_5').css('backgroundColor', '#666') //다음~text4까지

    $('.section h3').siblings().css('color', 'red') //h3는 제외한 자신의 형제들을 전부 바꿔줌.
    $('.sub_item_1').parents().css('border','3px dotted green')//자신을 제외한 상위 보모요소 전부 선택
    $('.sub_item_1').parents('#list').css('border','3px solid blue')//상위요소중에서 #list까지만 선택
    $('.sub_item_1').closest('ul').css('border', '10px solid red')//가장 가까운 상위요소 중 선택한 요소

})


