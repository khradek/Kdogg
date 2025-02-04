class Play < ActiveRecord::Base

  belongs_to :event
  belongs_to :user

  validate :piece1_or_piece2 

  title_regex = /\A[a-zA-Z\d\s\-_@#&\/\$]*\z/
  validates :piece1, format: { with: title_regex }
  validates :piece2, format: { with: title_regex }

  after_create :set_priority

	default_scope { order(priority: :asc, created_at: :asc) }	

  #----------Openers----------
  scope :openers, -> { where('situation1 = ?', true)}
  scope :openers_left, -> { openers.where('hash_mark = ?', 'Left')}
  scope :openers_right, -> { openers.where('hash_mark = ?', 'Right')}

  #----------1st/2nd & 10----------
  scope :first_tens, -> { where('situation2 = ?', true)}
  scope :run_first_tens, -> { first_tens.where('play_type = ?', 'Run')}
  scope :run_left_first_tens, -> { run_first_tens.where('hash_mark = ?', 'Left')}
  scope :run_right_first_tens, -> { run_first_tens.where('hash_mark = ?', 'Right')}
  scope :pass_first_tens, -> { first_tens.where('play_type = ?', 'Pass')}
  scope :pass_left_first_tens, -> { pass_first_tens.where('hash_mark = ?', 'Left')}
  scope :pass_right_first_tens, -> { pass_first_tens.where('hash_mark = ?', 'Right')}

  #----------2nd & Long----------
  scope :second_longs, -> { where('situation3 = ?', true)}
  scope :run_second_longs, -> { second_longs.where('play_type = ?', 'Run')}
  scope :run_left_second_longs, -> { run_second_longs.where('hash_mark = ?', 'Left')}
  scope :run_right_second_longs, -> { run_second_longs.where('hash_mark = ?', 'Right')}
  scope :pass_second_longs, -> { second_longs.where('play_type = ?', 'Pass')}
  scope :pass_left_second_longs, -> { pass_second_longs.where('hash_mark = ?', 'Left')}
  scope :pass_right_second_longs, -> { pass_second_longs.where('hash_mark = ?', 'Right')}

  #----------3rd & Long----------
  scope :third_longs, -> { where('situation6 = ?', true)}
  scope :run_third_longs, -> { third_longs.where('play_type = ?', 'Run')}
  scope :run_left_third_longs, -> { run_third_longs.where('hash_mark = ?', 'Left')}
  scope :run_right_third_longs, -> { run_third_longs.where('hash_mark = ?', 'Right')}
  scope :pass_third_longs, -> { third_longs.where('play_type = ?', 'Pass')}
  scope :pass_left_third_longs, -> { pass_third_longs.where('hash_mark = ?', 'Left')}
  scope :pass_right_third_longs, -> { pass_third_longs.where('hash_mark = ?', 'Right')}

  #----------2nd & Medium----------
  scope :second_mediums, -> { where('situation4 = ?', true)}
  scope :run_second_mediums, -> { second_mediums.where('play_type = ?', 'Run')}
  scope :run_left_second_mediums, -> { run_second_mediums.where('hash_mark = ?', 'Left')}
  scope :run_right_second_mediums, -> { run_second_mediums.where('hash_mark = ?', 'Right')}
  scope :pass_second_mediums, -> { second_mediums.where('play_type = ?', 'Pass')}
  scope :pass_left_second_mediums, -> { pass_second_mediums.where('hash_mark = ?', 'Left')}
  scope :pass_right_second_mediums, -> { pass_second_mediums.where('hash_mark = ?', 'Right')}
 
  #----------3rd & Medium----------
  scope :third_mediums, -> { where('situation7 = ?', true)}
  scope :run_third_mediums, -> { third_mediums.where('play_type = ?', 'Run')}
  scope :run_left_third_mediums, -> { run_third_mediums.where('hash_mark = ?', 'Left')}
  scope :run_right_third_mediums, -> { run_third_mediums.where('hash_mark = ?', 'Right')}
  scope :pass_third_mediums, -> { third_mediums.where('play_type = ?', 'Pass')}
  scope :pass_left_third_mediums, -> { pass_third_mediums.where('hash_mark = ?', 'Left')}
  scope :pass_right_third_mediums, -> { pass_third_mediums.where('hash_mark = ?', 'Right')}

  #----------2nd & Short----------
  scope :second_shorts, -> { where('situation5 = ?', true)}
  scope :run_second_shorts, -> { second_shorts.where('play_type = ?', 'Run')}
  scope :run_left_second_shorts, -> { run_second_shorts.where('hash_mark = ?', 'Left')}
  scope :run_right_second_shorts, -> { run_second_shorts.where('hash_mark = ?', 'Right')}
  scope :pass_second_shorts, -> { second_shorts.where('play_type = ?', 'Pass')}
  scope :pass_left_second_shorts, -> { pass_second_shorts.where('hash_mark = ?', 'Left')}
  scope :pass_right_second_shorts, -> { pass_second_shorts.where('hash_mark = ?', 'Right')}

  #----------3rd & Short----------
  scope :third_shorts, -> { where('situation8 = ?', true)}
  scope :run_third_shorts, -> { third_shorts.where('play_type = ?', 'Run')}
  scope :run_left_third_shorts, -> { run_third_shorts.where('hash_mark = ?', 'Left')}
  scope :run_right_third_shorts, -> { run_third_shorts.where('hash_mark = ?', 'Right')}
  scope :pass_third_shorts, -> { third_shorts.where('play_type = ?', 'Pass')}
  scope :pass_left_third_shorts, -> { pass_third_shorts.where('hash_mark = ?', 'Left')}
  scope :pass_right_third_shorts, -> { pass_third_shorts.where('hash_mark = ?', 'Right')}

  #----------Redzone----------
  scope :redzones, -> { where('situation9 = ?', true)}
  scope :run_redzones, -> { redzones.where('play_type = ?', 'Run')}
  scope :run_left_redzones, -> { run_redzones.where('hash_mark = ?', 'Left')}
  scope :run_right_redzones, -> { run_redzones.where('hash_mark = ?', 'Right')}
  scope :pass_redzones, -> { redzones.where('play_type = ?', 'Pass')}
  scope :pass_left_redzones, -> { pass_redzones.where('hash_mark = ?', 'Left')}
  scope :pass_right_redzones, -> { pass_redzones.where('hash_mark = ?', 'Right')}

  #----------Goal Line----------
  scope :goalines, -> { where('situation10 = ?', true)}
  scope :run_goalines, -> { goalines.where('play_type = ?', 'Run')}
  scope :run_left_goalines, -> { run_goalines.where('hash_mark = ?', 'Left')}
  scope :run_right_goalines, -> { run_goalines.where('hash_mark = ?', 'Right')}
  scope :pass_goalines, -> { goalines.where('play_type = ?', 'Pass')}
  scope :pass_left_goalines, -> { pass_goalines.where('hash_mark = ?', 'Left')}
  scope :pass_right_goalines, -> { pass_goalines.where('hash_mark = ?', 'Right')}

  #----------Coming Out----------
  scope :coming_outs, -> { where('situation11 = ?', true)}
  scope :run_coming_outs, -> { coming_outs.where('play_type = ?', 'Run')}
  scope :run_left_coming_outs, -> { run_coming_outs.where('hash_mark = ?', 'Left')}
  scope :run_right_coming_outs, -> { run_coming_outs.where('hash_mark = ?', 'Right')}
  scope :pass_coming_outs, -> { coming_outs.where('play_type = ?', 'Pass')}
  scope :pass_left_coming_outs, -> { pass_coming_outs.where('hash_mark = ?', 'Left')}
  scope :pass_right_coming_outs, -> { pass_coming_outs.where('hash_mark = ?', 'Right')}

  #----------Custom 1----------
  scope :custom_ones, -> { where('situation12 = ?', true)}
  scope :run_custom_ones, -> { custom_ones.where('play_type = ?', 'Run')}
  scope :run_left_custom_ones, -> { run_custom_ones.where('hash_mark = ?', 'Left')}
  scope :run_right_custom_ones, -> { run_custom_ones.where('hash_mark = ?', 'Right')}
  scope :pass_custom_ones, -> { custom_ones.where('play_type = ?', 'Pass')}
  scope :pass_left_custom_ones, -> { pass_custom_ones.where('hash_mark = ?', 'Left')}
  scope :pass_right_custom_ones, -> { pass_custom_ones.where('hash_mark = ?', 'Right')}

  #----------Custom 2----------
  scope :custom_twos, -> { where('situation13 = ?', true)}
  scope :run_custom_twos, -> { custom_twos.where('play_type = ?', 'Run')}
  scope :run_left_custom_twos, -> { run_custom_twos.where('hash_mark = ?', 'Left')}
  scope :run_right_custom_twos, -> { run_custom_twos.where('hash_mark = ?', 'Right')}
  scope :pass_custom_twos, -> { custom_twos.where('play_type = ?', 'Pass')}
  scope :pass_left_custom_twos, -> { pass_custom_twos.where('hash_mark = ?', 'Left')}
  scope :pass_right_custom_twos, -> { pass_custom_twos.where('hash_mark = ?', 'Right')}

  #----------Custom 3----------
  scope :custom_threes, -> { where('situation14 = ?', true)}
  scope :custom_three_lefts, -> { custom_threes.where('hash_mark = ?', 'Left')}
  scope :custom_three_rights, -> { custom_threes.where('hash_mark = ?', 'Right')}

	def fullname
  	fullname = "#{piece1} #{piece2}"
  end

  #Sets the priority to 1,000 after create (needed to avoid nil for production/to have most recently created at bottom of list)
	def set_priority
		self.update_attribute(:priority, 1000)
	end
  
	#Counts the number of times play is shown in the install's scripts
	def play_count(scripts)
		s_string = ""
		scripts.each do |script|
			tring = script.sdata.to_s
			s_string << tring
		end

		def count_em(string, substring)
  		string.scan(/(?=#{substring})/).count
		end

		play_count = count_em(s_string, self.fullname)
	end	
  
  private
    def piece1_or_piece2
      if piece1.blank? && piece2.blank?
        errors[:base] << "You must enter at least a formation or play name."
      end
    end
end
