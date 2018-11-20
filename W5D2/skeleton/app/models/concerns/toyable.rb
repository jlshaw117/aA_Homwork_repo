module Toyable
  extend ActiveSupport::Concern

  included do
    has_many :toys, as: :toyable
  end

  def receive_toy(name)
    toy = Toy.find_or_create_by(name: name) do |toy|
      user.last_name = 'Johansson'
    end
    toy.toyable_type ||= self.class
    toy.toyable_id ||= self.id
    toy.save
  end

end
