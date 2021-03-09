Rails.application.routes.draw do
  root to: 'posts#index' # 簡単にアクセス出来るように変更。
  post 'posts' , to: 'posts#create'
  # queryパラメーターを使用した場合、/posts/?id=1とリクエストを行うと
  # params[:id]にてパラメーターを取得する
  # get 'posts' , to: 'posts#checked'

  # pathパラメーターはリソースを識別する場合に使う
  # postのidであれば'posts/:id'のように記載するpathパラメーターの方が認識もしやすい。
  get 'posts/:id', to: 'posts#checked'
end