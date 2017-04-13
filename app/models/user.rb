class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :masqueradable

  has_many :events  
  has_many :scripts 
  has_many :gamecalls
  has_many :practice_schedules
  has_many :plays  
  has_many :saved_formations
  has_many :saved_plays
  has_many :charges
  has_one :default_practice

  validates :first_name, :last_name, :team, :presence => true

  after_create :set_default_s_names, :create_default_practice

  #Sets default situation names and number of run plays
  def set_default_s_names
    self.update :s_name1 => "Openers", :s_name2 => "1st/2nd & 10", :s_name3 => "2nd & Long", :s_name4 => "2nd & Medium", :s_name5 => "2nd & Short", :s_name6 => "3rd & Long", :s_name7 => "3rd & Medium", :s_name8 => "3rd & Short", :s_name9 => "Redzone", :s_name10 => "Goal Line", :s_name11 => "Coming Out", :s_name12 => "Custom 1", :s_name13 => "Custom 2", :s_name14 => "Custom 3", :s_name2_num_run => 7, :s_name3_num_run => 5, :s_name4_num_run => 5, :s_name5_num_run => 5, :s_name6_num_run => 3, :s_name7_num_run => 5, :s_name8_num_run => 7, :s_name9_num_run => 7, :s_name10_num_run => 7, :s_name11_num_run => 7, :s_name12_num_run => 7, :s_name13_num_run => 7, :s_name14_num_run => 7, :sit1_color => "htlightwhite", :sit2_color => "lightgreen", :sit3_color => "htorange", :sit4_color => "htblue", :sit5_color => "ulshade", :sit6_color => "htred", :sit7_color => "htgold", :sit8_color => "htyellow", :sit9_color => "htred", :sit10_color => "lightgreen", :sit11_color => "htblue", :sit12_color => "htgold", :sit13_color => "htorange", :sit14_color => "htlightwhite"  
  end

  #Create default_practice for user
  def create_default_practice
    DefaultPractice.create :user_id => self.id
  end

  def subscribed?
    stripe_subscription_id?
  end
  
end
