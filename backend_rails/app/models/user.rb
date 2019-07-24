class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
    validates :password,
            length: { minimum: 6 },
            if: -> { new_record? || !password.nil? }

    def to_s
        "Name: #{self.name} Email: #{self.email} Username: #{self.email} Password: #{self.password}"
    end
end
