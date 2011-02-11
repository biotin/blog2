class CommentsController < ApplicationController
 before_filter :load_article
 before_filter :authenticate, :only => :destroy


  def create
    @comment = @article.comments.new(params[:comment])
    if @comment.save
      render :action => "thanks", :notice => 'Thanks for your comment'
    else
      render :action => "unable", :alert => 'Unable to add comment'
    end
  end
  
  def destroy
    @comment = @article.comments.find(params[:id])
    @comment.destroy
    render :action => "destroy", :notice => 'Comment deleted'
  end
  
  private
    def load_article
      @article = Article.find(params[:article_id])
    end
    
    def authenticate
    	authenticate_or_request_with_http_basic('Administrator') do |username, password|
    	username == 'comment' && password = 'comment'
    	end
    end
end
