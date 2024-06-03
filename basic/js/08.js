//단독 이벤트 등록
$('.btn1').click(function(){
    $(this).next().text('hello')
})

//on
$('.btn2').on('click', function(){
    $(this).next().text('querty')
})


$('.btn2').on(
    {
        'mouseover focus': function(){
            $(this).next().text('안녕하세요')
        }, 
        'mouseleave blur' : function(){
            $(this).next().text('안녕하 가세요')
        }
    }
)

//마우스, 키보드 탭키로 포커스 이벤트 둘다 가능.