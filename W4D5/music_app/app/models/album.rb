# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  band_id    :integer          not null
#  title      :string           not null
#  yr         :integer          not null
#  live       :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord

  validates :title, presence: true
  validates :band_id, uniqueness: true
  validates :yr, presence: true

  belongs_to :band,
    foreign_key: :band_id,
    class_name: :Band
end
