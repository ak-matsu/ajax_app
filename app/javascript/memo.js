function memo(){
  const submit = document.getElementById("submit");
  submit.addEventListener("click",(e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST","/posts",true);
    XHR.responseType = "json";
    XHR.send(formData);

    // レスポンスがあった場合の処理
    XHR.onload = () => {
      if (XHR.status != 200){
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      // itemはレスポンスとして返されたメモのレコードデータを取得
      const item = XHR.response.post;
      // listはHTMLを描画する場所を指定する際に使用する「描画する親要素」のlist要素を取得
      const list = document.getElementById("list");
      // formTextはメモの入力フォームを取得
      // 送信後に入力フォームを削除する必要があるため
      const formText = document.getElementById("content");
      const HTML = `
        <div  class="post" date-id=${item.id}>
          <div class="post-date">
            投稿日時:${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
        list.insertAdjacentHTML("afterend",HTML);
        formText.value = "";
    };
  });
}
// Windowを読み込んだ時に実行
window.addEventListener("load",memo);