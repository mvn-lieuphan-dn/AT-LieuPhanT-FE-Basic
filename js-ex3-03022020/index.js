var arrComment = [];
if(!localStorage.getItem('COMMENT')) {
  localStorage.setItem('COMMENT', JSON.stringify(arrComment));
}
else arrComment = JSON.parse(localStorage.getItem('COMMENT'));

var $itemComment = document.getElementById('js-comment-list');
 function listComment() {
   console.log(arrComment);
   for(var i = 0, leng = arrComment.length; i < leng; i++) {
    $itemComment.innerHTML += '<li class="comment-item">' +
    '<a href=""><img class="comment-item-img" src="images/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png" alt=""></a>' + 
    '<div class="comment-item-content">' +
    '<h4 class="comment-item-name">Lieu phan</h4>' +
    '<span class="comment-item-description">'+ arrComment[i] +'</span>' +
    '</div><button id="js-btn-del-' + i + '" class="btn-del"><img class="comment-item-btn" src="images/dele.jpg" alt=""></button>' +
    '</li>' 
  }
 }
listComment();

function clickAddComment() {
  var $createComment = document.getElementById('js-create-comment');
  $createComment.addEventListener('click', function() {
  console.log(arrComment);
  if(document.getElementById('js-comment-news-input').value) {
  arrComment.push(document.getElementById('js-comment-news-input').value);
  console.log(arrComment);
  console.log(document.getElementById('js-comment-news-input').value);
  localStorage.setItem('COMMENT', JSON.stringify(arrComment));
  listComment();
  document.getElementById('js-comment-news-input').value = '';
  }
})
}
clickAddComment();

function clickDelComment() {
  var idDel;
  var $delComment = document.getElementsByClassName('btn-del');
  for(var l = 0, leng = $delComment.length; l < leng; l++){
    $delComment[l].addEventListener('click', function(event) {
      idDel = event.currentTarget.id;
      for(var k = 0, leng = arrComment.length; k < leng; k++) {
        if(idDel === 'js-btn-del-' + k) {
          arrComment.splice(k, 1);
          localStorage.setItem('COMMENT', JSON.stringify(arrComment));
          $itemComment.innerHTML = '';          
        }
      }
      listComment();
      clickDelComment();
    })
  }
}
clickDelComment();
