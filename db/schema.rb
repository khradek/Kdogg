# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170723133324) do

  create_table "charges", force: true do |t|
    t.integer  "user_id"
    t.string   "stripe_id"
    t.integer  "amount"
    t.string   "card_last4"
    t.string   "card_brand"
    t.string   "card_exp_month"
    t.string   "card_exp_year"
    t.datetime "charge_date"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "charges", ["stripe_id"], name: "index_charges_on_stripe_id", unique: true

  create_table "default_gamecalls", force: true do |t|
    t.string   "title"
    t.integer  "user_id"
    t.text     "gc_data1"
    t.text     "gc_format1"
    t.text     "gc_class1"
    t.text     "gc_data2"
    t.text     "gc_format2"
    t.text     "gc_class2"
    t.text     "col_widths1"
    t.text     "col_widths2"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "default_practices", force: true do |t|
    t.text     "up_data"
    t.text     "up_format"
    t.text     "up_class"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text     "col_widths"
  end

  create_table "default_script2s", force: true do |t|
    t.integer  "user_id"
    t.text     "us_data2"
    t.text     "us_format2"
    t.text     "us_class2"
    t.string   "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text     "col_widths"
  end

  create_table "default_script3s", force: true do |t|
    t.integer  "user_id"
    t.text     "us_data3"
    t.text     "us_format3"
    t.text     "us_class3"
    t.string   "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text     "col_widths"
  end

  create_table "default_scripts", force: true do |t|
    t.integer  "user_id"
    t.text     "us_data"
    t.text     "us_format"
    t.text     "us_class"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "title"
    t.text     "col_widths"
  end

  create_table "events", force: true do |t|
    t.integer  "user_id"
    t.string   "title"
    t.text     "description"
    t.datetime "start_time"
    t.datetime "end_time"
    t.string   "event_type"
    t.integer  "script_tag"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "gamecall_tag"
    t.integer  "install_event_id"
    t.integer  "installgc_event_id"
    t.integer  "practice_tag"
    t.integer  "installps_event_id"
  end

  add_index "events", ["user_id"], name: "index_events_on_user_id"

  create_table "gamecalls", force: true do |t|
    t.string   "title"
    t.text     "gdata"
    t.integer  "event_id"
    t.integer  "user_id"
    t.datetime "start_time"
    t.datetime "end_time"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.text     "gdata2"
    t.string   "sit_title1"
    t.string   "sit_title2"
    t.string   "sit_title3"
    t.string   "sit_title4"
    t.string   "sit_title5"
    t.string   "sit_title6"
    t.string   "sit_title7"
    t.string   "sit_title8"
    t.string   "sit_title9"
    t.string   "sit_title10"
    t.string   "sit_title11"
    t.string   "sit_title12"
    t.string   "sit_title13"
    t.string   "sit_title14"
    t.string   "sit_color1"
    t.string   "sit_color2"
    t.string   "sit_color3"
    t.string   "sit_color4"
    t.string   "sit_color5"
    t.string   "sit_color6"
    t.string   "sit_color7"
    t.string   "sit_color8"
    t.string   "sit_color9"
    t.string   "sit_color10"
    t.string   "sit_color11"
    t.string   "sit_color12"
    t.string   "sit_color13"
    t.string   "sit_color14"
    t.string   "gamecall_template"
    t.text     "col_widths1"
    t.text     "col_widths2"
    t.text     "orig_col_widths1"
    t.text     "orig_col_widths2"
    t.text     "g_format1"
    t.text     "g_format2"
    t.text     "g_class1"
    t.text     "g_class2"
  end

  create_table "plays", force: true do |t|
    t.string   "piece1"
    t.integer  "event_id"
    t.integer  "user_id"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "period1",     default: false, null: false
    t.boolean  "period2",     default: false, null: false
    t.boolean  "period3",     default: false, null: false
    t.boolean  "period4",     default: false, null: false
    t.integer  "priority"
    t.string   "play_type"
    t.string   "hash_mark"
    t.string   "piece2"
    t.boolean  "situation1",  default: false, null: false
    t.boolean  "situation2",  default: false, null: false
    t.boolean  "situation3",  default: false, null: false
    t.boolean  "situation4",  default: false, null: false
    t.boolean  "situation5",  default: false, null: false
    t.boolean  "situation6",  default: false, null: false
    t.boolean  "situation7",  default: false, null: false
    t.boolean  "situation8",  default: false, null: false
    t.boolean  "situation9",  default: false, null: false
    t.boolean  "situation10", default: false, null: false
    t.boolean  "situation11", default: false, null: false
    t.boolean  "situation12", default: false, null: false
    t.boolean  "situation13", default: false, null: false
    t.boolean  "situation14", default: false, null: false
  end

  add_index "plays", ["event_id"], name: "index_plays_on_event_id"
  add_index "plays", ["user_id"], name: "index_plays_on_user_id"

  create_table "practice_schedules", force: true do |t|
    t.string   "title"
    t.integer  "event_id"
    t.integer  "user_id"
    t.datetime "start_time"
    t.text     "p_data"
    t.text     "p_format"
    t.text     "p_class"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.text     "col_widths"
    t.text     "orig_col_widths"
  end

  add_index "practice_schedules", ["event_id"], name: "index_practice_schedules_on_event_id"
  add_index "practice_schedules", ["user_id"], name: "index_practice_schedules_on_user_id"

  create_table "saved_formations", force: true do |t|
    t.string   "title"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "priority"
  end

  create_table "saved_plays", force: true do |t|
    t.string   "title"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "priority"
  end

  create_table "scripts", force: true do |t|
    t.string   "title"
    t.text     "sdata"
    t.integer  "event_id"
    t.integer  "user_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.datetime "start_time"
    t.datetime "end_time"
    t.text     "s_format"
    t.text     "s_class"
    t.string   "script_template"
    t.text     "col_widths"
    t.text     "orig_col_widths"
  end

  add_index "scripts", ["event_id"], name: "index_scripts_on_event_id"
  add_index "scripts", ["user_id"], name: "index_scripts_on_user_id"

  create_table "unsubscribes", force: true do |t|
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.boolean  "admin",                  default: false, null: false
    t.string   "stripe_id"
    t.string   "stripe_subscription_id"
    t.string   "card_last4"
    t.integer  "card_exp_month"
    t.integer  "card_exp_year"
    t.string   "card_brand"
    t.datetime "subscription_end"
    t.boolean  "cancelled",              default: false, null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "team"
    t.string   "s_name1"
    t.string   "s_name2"
    t.string   "s_name3"
    t.string   "s_name4"
    t.string   "s_name5"
    t.string   "s_name6"
    t.string   "s_name7"
    t.string   "s_name8"
    t.string   "s_name9"
    t.string   "s_name10"
    t.string   "s_name11"
    t.string   "s_name12"
    t.string   "s_name13"
    t.string   "s_name14"
    t.integer  "s_name2_num_run"
    t.integer  "s_name3_num_run"
    t.integer  "s_name4_num_run"
    t.integer  "s_name5_num_run"
    t.integer  "s_name6_num_run"
    t.integer  "s_name7_num_run"
    t.integer  "s_name8_num_run"
    t.integer  "s_name9_num_run"
    t.integer  "s_name10_num_run"
    t.integer  "s_name11_num_run"
    t.integer  "s_name12_num_run"
    t.integer  "s_name13_num_run"
    t.integer  "s_name14_num_run"
    t.string   "sit1_color"
    t.string   "sit2_color"
    t.string   "sit3_color"
    t.string   "sit4_color"
    t.string   "sit5_color"
    t.string   "sit6_color"
    t.string   "sit7_color"
    t.string   "sit8_color"
    t.string   "sit9_color"
    t.string   "sit10_color"
    t.string   "sit11_color"
    t.string   "sit12_color"
    t.string   "sit13_color"
    t.string   "sit14_color"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
