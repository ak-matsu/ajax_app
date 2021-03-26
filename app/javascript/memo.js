function memo(){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);

    // レスポンスがあった場合の処理
    XHR.onload = () => {
      if (XHR.status != 200) {
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
      // メモとして描画する部分のHTMLを定義
      const HTML = `
      <div class="post" data-id=${item.id}>
        <div class="post-date">
          投稿日時：${item.created_at}
        </div>
        <div class="post-content">
        ${item.content}
        </div>
      </div>`;
        // listという要素に対して、insertAdjacentHTMLでHTMLを追加します。
        // 第一引数にafterendを指定することで、要素listの直後に挿入
       list.insertAdjacentHTML("afterend", HTML);
        // 空の文字列を上書きすることでメモの入力フォームをリセットさせている。
        formText.value = "";
    };
    e.preventDefault();
  });
}
// Windowを読み込んだ時に実行
window.addEventListener("load",memo);