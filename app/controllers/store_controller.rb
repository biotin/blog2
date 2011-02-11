class StoreController < ApplicationController
  def index
  @articles = Article.paginate(:page => params[:page],:per_page => 5, :order => "published_at DESC")
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @articles }
    end
  end

  def show
    @article = Article.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @article }
    end
  end

end
