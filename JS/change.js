// 메뉴를 보여주는 함수
function showCategory(category) {
  var categories = document.querySelectorAll('.category');
  var items = document.querySelectorAll('.item');

  categories.forEach(function (cat) {
    cat.classList.remove('active');
  });

  items.forEach(function (item) {
    item.classList.remove('active');
  });

  document.querySelector('.category.' + category).classList.add('active');
  document.querySelector('.item.' + category).classList.add('active');
}

// 페이지 로드 시 추천 메뉴를 기본으로 표시
document.addEventListener('DOMContentLoaded', function () {
  showCategory('decaf');
});
