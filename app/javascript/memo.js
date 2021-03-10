function memo(){
  const submit = document.getElementById("submit");
  submit.addEventListener("click",(e) => {
    const XHR = new XMLHttpRequest();
    XHR.open("POST","/posts",true);
  });
}
// Windowを読み込んだ時に実行
window.addEventListener("load",memo);