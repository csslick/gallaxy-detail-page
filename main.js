// main.js
$(function(){

  // 색상 버튼을 클릭하면 이미지 변경
  var imgUrl = [
    'images/black.webp',
    'images/green.webp',
    'images/gray.webp',
  ]

  // 해당 버튼 클릭시 imgUrl 배열번호로 img태그 src를 변경
  $('.colorOption .color').on('click', function(){
    var i = $(this).index();
    console.log(i)
    $('#product-detail > figure > img').attr('src', imgUrl[i]);
  })

  // 메모리
  const price = 1998700; // 기본가격

  $('#memory').on('change', function(){
    var value = $(this).val();    
    $('.memoryOption .memory').text(value);

    var memoryPrice = 100000;
    if(value == 512) {
      var totalPrice = (price + memoryPrice).toLocaleString();
      $('.total-price').text(totalPrice);
    } else if(value == 256) {
      $('.total-price').text(price);
    }

  })
  
  // 수량
  $('.numberOption .count').on('change', function(){
    var value = $(this).val();
    var totalPrice = (price * value).toLocaleString();
    $('.total-price').text(totalPrice);
  })


}); // end $