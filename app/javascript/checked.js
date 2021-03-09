function check(){
  // querySelectorAllメソッドで、postをクラス名にもつ要素を取得できます。postというクラス名を持つ要素はメモの数だけ存在
  const posts = document.querySelectorAll(".post");
}
window.addEventListener("load",check);