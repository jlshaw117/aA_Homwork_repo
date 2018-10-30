class Board
  attr_accessor :cups

  def initialize(name1, name2)
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
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
