class Events::PlaysController < ApplicationController
  before_action :set_play, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]
  before_action :correct_user, only: [:show, :edit, :update, :destroy] 


  respond_to :html

  def type_update
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('play_type', params[:play][:play_type])
    respond_to do |format|
      format.js    
    end  
  end

  def hash_update
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('hash_mark', params[:play][:hash_mark])
    respond_to do |format|
      format.js    
    end 
  end

  def toggle1
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('period1', params[:play][:period1])
    
    respond_to do |format|
      @period1_count = @event.plays.where(:period1 => true).count
      format.js
    end
  end

  def toggle2
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('period2', params[:play][:period2])
    
    respond_to do |format|
      @period2_count = @event.plays.where(:period2 => true).count
      format.js
    end
  end

  def toggle3
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('period3', params[:play][:period3])
    
    respond_to do |format|
      @period3_count = @event.plays.where(:period3 => true).count
      format.js
    end
  end
  
  def toggle4
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('period4', params[:play][:period4])
    
    respond_to do |format|
      @period4_count = @event.plays.where(:period4 => true).count
      format.js
    end
  end
  
  def situation1_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation1', params[:play][:situation1])
    
    render :nothing => true
  end

  def situation2_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation2', params[:play][:situation2])
    
    render :nothing => true
  end

  def situation3_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation3', params[:play][:situation3])
    
    render :nothing => true
  end

  def situation4_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation4', params[:play][:situation4])
    
    render :nothing => true
  end

  def situation5_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation5', params[:play][:situation5])
    
    render :nothing => true
  end

  def situation6_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation6', params[:play][:situation6])
    
    render :nothing => true
  end

  def situation7_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation7', params[:play][:situation7])
    
    render :nothing => true
  end

  def situation8_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation8', params[:play][:situation8])
    
    render :nothing => true
  end

  def situation9_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation9', params[:play][:situation9])
    
    render :nothing => true
  end

  def situation10_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation10', params[:play][:situation10])
    
    render :nothing => true
  end

  def situation11_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation11', params[:play][:situation11])
    
    render :nothing => true
  end  

  def situation12_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation12', params[:play][:situation12])
    
    render :nothing => true
  end

  def situation13_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation13', params[:play][:situation13])
    
    render :nothing => true
  end

  def situation14_toggle
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])
    @play.update_attribute('situation14', params[:play][:situation14])
    
    render :nothing => true
  end

  def sort
    params[:order].each do |key,value|
      Play.find(value[:id]).update_attribute(:priority,value[:position])
    end
    render :nothing => true
  end

  def destroy_multiple 
    @event = Event.find(params[:event_id])   

    Play.destroy(params[:play_ids])

    respond_to do |format|
      format.html { redirect_to @event }
    end
  end

  def update_multiple
    @event = Event.find(params[:event_id])
    @plays = Play.find(params[:play_ids])

    if params[:periods] == '1'
      @plays.each do |play|
        play.update_attribute('period1', params[:play][:period1]) 
        play.update_attribute('period2', params[:play][:period2])
        play.update_attribute('period3', params[:play][:period3])
        play.update_attribute('period4', params[:play][:period4])
      end
    end

    if params[:types] == '1'
      @plays.each do |play|
        play.update_attribute('play_type', params[:play][:play_type])
      end
    end

    if params[:hashes] == '1'
      @plays.each do |play|
        play.update_attribute('hash_mark', params[:play][:hash_mark])
      end
    end

    if params[:situation_1] == '1'
      @plays.each do |play|
        play.update_attribute('situation1', params[:play][:situation1])
      end
    end

    if params[:situation_2] == '1'
      @plays.each do |play|
        play.update_attribute('situation2', params[:play][:situation2])
      end
    end   

    if params[:situation_3] == '1'
      @plays.each do |play|
        play.update_attribute('situation3', params[:play][:situation3])
      end
    end

    if params[:situation_4] == '1'
      @plays.each do |play|
        play.update_attribute('situation4', params[:play][:situation4])
      end
    end

    if params[:situation_5] == '1'
      @plays.each do |play|
        play.update_attribute('situation5', params[:play][:situation5])
      end
    end 

     if params[:situation_6] == '1'
      @plays.each do |play|
        play.update_attribute('situation6', params[:play][:situation6])
      end
    end

    if params[:situation_7] == '1'
      @plays.each do |play|
        play.update_attribute('situation7', params[:play][:situation7])
      end
    end   

    if params[:situation_8] == '1'
      @plays.each do |play|
        play.update_attribute('situation8', params[:play][:situation8])
      end
    end

    if params[:situation_9] == '1'
      @plays.each do |play|
        play.update_attribute('situation9', params[:play][:situation9])
      end
    end

    if params[:situation_10] == '1'
      @plays.each do |play|
        play.update_attribute('situation10', params[:play][:situation10])
      end
    end                

    if params[:situation_11] == '1'
      @plays.each do |play|
        play.update_attribute('situation11', params[:play][:situation11])
      end
    end 
    
    if params[:situation_12] == '1'
      @plays.each do |play|
        play.update_attribute('situation12', params[:play][:situation12])
      end
    end 
    
    if params[:situation_13] == '1'
      @plays.each do |play|
        play.update_attribute('situation13', params[:play][:situation13])
      end
    end 

    if params[:situation_14] == '1'
      @plays.each do |play|
        play.update_attribute('situation14', params[:play][:situation14])
      end
    end 
    
    respond_to do |format|
      format.html { redirect_to @event }
    end
  end

  def edit
    @event = Event.includes(:scripts).find(params[:event_id])
  end

  def create
    @event = Event.find(params[:event_id])
    @play = Play.new(play_params)
    @play.user = current_user
    @play.event = @event

    respond_to do |format|
      if @play.save
        @period1_count = @event.plays.where(:period1 => true).count
        @period2_count = @event.plays.where(:period2 => true).count
        @period3_count = @event.plays.where(:period3 => true).count
        @period4_count = @event.plays.where(:period4 => true).count
        format.html { redirect_to @event, notice: 'The play was successfully created.' }
        format.json { render :show, status: :created, location: @play }
        format.js
      else
        format.html { render :new }
        format.json { render json: @play.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end

  def update
    @event = Event.find(params[:event_id])
    @play.update(play_params)
    
    respond_to do |format|
      if @play.update(play_params)
        format.html { redirect_to edit_event_play_path(@event, @play), info: 'The play was successfully updated.' }
        format.json { render :show, status: :ok, location: @event }
        format.js 
      else
        format.html { render :edit }
        format.json { render json: @event.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end

  def destroy
    @event = Event.find(params[:event_id])
    @play = Play.find(params[:id])

    respond_to do |format|
      if @play.destroy
        format.html { redirect_to @event, info: "The play was deleted successfully." }
        format.js
      else
        format.html { render :show, flash[:error] = "There was an error deleting the play." }
        format.js
      end
    end  
  end

  private
    def set_play
      @play = Play.find(params[:id])
    end

    def play_params
      params.require(:play).permit(:piece1, :piece2, :priority, :event_id, :user_id, :period1, :period2, :period3, :period4, :situation1, :situation2, :situation3, :situation4, :situation5, :situation6, :situation7, :situation8, :situation9, :situation10, :situation11, :situation12, :situation13, :situation14, :play_type, :hash_mark)
    end

    def correct_user
      redirect_to root_path, notice: "Not authorized" if @play.user != current_user   
    end  
end
