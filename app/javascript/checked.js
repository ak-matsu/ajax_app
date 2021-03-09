function check() {
  // querySelectorAllメソッドで、postをクラス名にもつ要素を取得できます。postというクラス名を持つ要素はメモの数だけ存在
  const posts = document.querySelectorAll(".post");

  // 要素1つずつに対して「クリック」した際、動作する処理を記述
  posts.forEach(function (post) {

    // 処理としてaddEventListenerメソッドを使用、引数にclickの指定をする
    post.addEventListener("click", () => {

      // ここにクリックした時に行う「何らかの処理」を記述していく
      // getAttributeで属性値を取得、メモのidを取得
      const postId = post.getAttribute("data-id");

      // エンドポイントを呼び出すためXMLHttpRequestをしゆしてHTTPリクエストを送る。
      // オブジェクトを生成
      const XHR = new XMLHttpRequest();

      // httpメソッド:GET,path指定:/posts/${postId},非同期通信のON/OFF:true
      XHR.open("GET", `/posts/${postId}`, true);

      // リクエストを送る際に予め、レスポンスしてほしい情報の形式を指定する。
      // レスポンスの形式はjsonとする。
      XHR.responseType = "json";

      // .sendメソッドを記述することで初めてリクエストが行える。
      XHR.send();

      // checked.jsに、レスポンスがあった場合の処理
      // XHR.responseでレスポンスされてきたJSONにアクセスできる。
      XHR.onload = () => {
        // レスポンスがエラーだった場合の処理
        // ステータスコードの200は処理成功であるが、!=であるので、処理が成功しない場合を表している
        if(XHR.status != 200){
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          // javascriptから抜け出す
          return null;
        }
        const item = XHR.response.post;
        if  (item.checked === true) {
          post.setAttribute("date-check", "true");
        }else if  (item.checked === false){
          post.removeAttribute("data-check");
        }
      };
    });
  });
}
// ページを読み込んだらcheckを実行するのではなく、
// window.addEventListener("load", check);

// 一定時間ごとに、自動でcheckを実行する仕様にする。
setInterval(check,1000);