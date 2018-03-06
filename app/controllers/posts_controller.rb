class PostsController < ApplicationController
  def index
    posts = Post.all.order(:id)
    render json: posts.as_json
  end
  
end
