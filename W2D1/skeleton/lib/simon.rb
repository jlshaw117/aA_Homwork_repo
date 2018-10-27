require "byebug"
class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until game_over
      take_turn
    end

    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    unless @game_over
      round_success_message
      @sequence_length += 1
      sleep(2)
    end
  end

  def show_sequence
    system "clear"
    add_random_color
    seq.each do |color|
      puts color
      sleep(1)
      system "clear"
    end
  end

  def require_sequence
    # debugger
    puts "What was the sequence. ex: =>red yellow"
    print "=>"
    guessed_seq = gets.chomp.split
    @game_over = true unless guessed_seq == seq
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "You guessed right, moving on to next round"
  end

  def game_over_message
    puts "That was the wrong sequence. Game over"
    puts "The last correct sequence length was #{sequence_length - 1}."
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
