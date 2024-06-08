function addFunction(menuName){
  //선택된 메뉴 리스트 요소를 가져옴.
  const selectedMenuList = document.getElementById('selected-menu-list')

  //새로운 리스트 아이템을 생성함.
  const listItem = document.createElement('li')

  //리스트 아이템의 택스트를 전달된 메뉴 이름으로 설정
  listItem.textContent = menuName
  //리스트 아이템을 선택된 메뉴 리스트에 추가함.
  selectedMenuList.appendChild(listItem)

  // //줄바꿈
  const lineBreak = document.createElement('br')
  selectedMenuList.appendChild(lineBreak)

}