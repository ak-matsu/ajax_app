function check(){
  // querySelectorAllメソッドで、postをクラス名にもつ要素を取得できます。postというクラス名を持つ要素はメモの数だけ存在
  const posts = document.querySelectorAll(".post");
  // 要素1つずつに対して「クリック」した際、動作する処理を記述
  posts.forEach(function(post){
    // 処理としてaddEventListenerメソッドを使用、引数にclickの指定をする
    post.addEventListener("click",() => {});
  });
}
window.addEventListener("load",check);