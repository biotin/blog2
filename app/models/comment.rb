class Comment < ActiveRecord::Base
 belongs_to :article
 validates :name, :email, :body, :presence => true
end
