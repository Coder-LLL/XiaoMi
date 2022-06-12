// 搜索框获取焦点事件
let searchInput = document.getElementById("search")
searchInput.addEventListener("focus", function () {
  // 拿到form表单 添加激活类
  document.getElementById("J_searchForm").classList.add("search-form-active")
})
searchInput.addEventListener("blur", function () {
  // 拿到form表单 添加激活类
  document.getElementById("J_searchForm").classList.remove("search-form-active")
})