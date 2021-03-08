Rails.application.routes.draw do
  root to: 'posts#index' # 簡単にアクセス出来るように変更。
  # get 'posts', to: 'posts#index'
  get 'posts/new' , to: 'posts#new'
  post 'posts' , to: 'posts#create'
end

# ルーティング