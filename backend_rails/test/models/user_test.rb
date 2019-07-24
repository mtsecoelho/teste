require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user1 = User.new
    @user1.username = 'user1'
    @user1.name = 'User1'
    @user1.email = 'user1@gmail.com'
    @user1.password = 'asdasd'
    
    @user2 = User.new
    @user2.username = 'user2'
    @user2.name = 'User2'
    @user2.email = 'user2@gmail.com'
    @user2.password = 'asdasd'
  end

  test "should not save user without name" do
    @user1.name = ''

    assert_not @user1.save
  end

  test "should not save user without username" do
    @user1.username = ''

    assert_not @user1.save
  end

  test "should not save user without email" do
    @user1.email = ''

    assert_not @user1.save
  end

  test "should not save user without password" do
    @user1.password = nil

    assert_not @user1.save
  end

  test "should save correct user" do
    assert @user1.save
  end

  test "should not save duplicated username" do
    @user1.save
    @user2.username = 'user1'

    assert_not @user2.save
  end

  test "should not save duplicated email" do
    @user1.save
    @user2.email = 'user1@gmail.com'
    
    assert_not @user2.save
  end
end