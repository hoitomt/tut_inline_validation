class Person < ActiveRecord::Base
  validates :first_name, :presence => true,
                         :length => { :within => 3..30 }

  validates :last_name, :presence => true,
                        :uniqueness => { :case_sensitive => false }
                        
end
