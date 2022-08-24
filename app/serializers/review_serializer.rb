class ReviewSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :content, :id, :image
  has_one :climber
  has_one :gym

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

end
