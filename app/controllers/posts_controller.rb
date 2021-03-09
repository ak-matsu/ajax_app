class PostsController < ApplicationController
  def index
    #すべてのレコードを@postsに代入
    #.orderメソッド(id:"DESC）でメモの順番を降順へ表示
    @posts = Post.all.order(id: "DESC")
  end
  def create
    Post.create(content: params[:content])
    redirect_to action: :index
  end

  # 既読の操作を行ったときに実行されるアクション

  def checked
    binding.pry
    post = Post.find(params[:id])
    # 既読であるか否かを判別
    if post.checked
      post.update(checked: false)
    else
      post.update(checked: true)
    end
    # 更新したレコードをitem = Post.find(params[:id])で取得し直し、
    # render json:{ post: item }でJSON形式（データ）としてchecked.jsに返却
    item = Post.find(params[:id])
    render json: { post: item }
  end

end