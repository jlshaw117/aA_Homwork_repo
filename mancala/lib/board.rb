require 'byebug'
class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1, @name2 = name1, name2
    @cups = Array.new(14) {Array.new}
    @cups.map!.with_index do |cup, i|
      if i == 6 || i == 13
        cup
      else
        place_stones
      end
    end
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    result = []
    4.times {result << :stone}
    result
  end

  def valid_move?(start_pos)
    raise 'Invalid starting cup' unless (0..12).include?(start_pos)
    raise 'Starting cup is empty' if cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    stones, cups[start_pos] = cups[start_pos], []
    current_cup = start_pos
    until stones.empty?
      current_cup == 13 ? current_cup = 0 : current_cup += 1

      if current_cup == 13 && current_player_name == @name2
        drop = true
      elsif current_cup == 6 && current_player_name == @name1
        drop = true
      elsif (0..5).include?(current_cup) || (7 .. 12).include?(current_cup)
        drop = true
      else
        drop = false
      end

      if drop
        @cups[current_cup] << stones.pop
      end
    end
    # render
    next_turn(current_cup)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx

    if ending_cup_idx ==  13 || ending_cup_idx == 6
      :prompt
    elsif cups[ending_cup_idx].count == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    if cups[0..5].all? {|cup| cup.empty?} || cups[7..12].all? {|cup| cup.empty?}
      true
    else
      false
    end
  end

  def winner
  end
end
