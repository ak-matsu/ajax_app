class PostsController < ApplicationController
  def index
    #すべてのレコードを@postsに代入
    #.orderメソッド(id:"DESC）でメモの順番を降順へ表示
    @posts = Post.all.order(id:"DESC")
  end
  
  def create
    Post.create(content: params[:content])
    redirect_to action: :index
  end
end

# コントローラー