class Article < ActiveRecord::Base
 validates :title, :presence =>true
 validates :body, :presence => true
 has_many :comments
 cattr_reader :per_page
  @@per_page = 10
end
