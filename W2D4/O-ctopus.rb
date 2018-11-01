def sluggish_octopus(arr)
  biggest_fish = nil
  arr.each_with_index do |str_1, idx_1|
    biggest = true
    arr.each_with_index do |str_2, idx_2|
      next if idx_2 <= idx_1
      biggest = false if str_1.length < str_2.length

    end
    biggest_fish = str_1 if biggest
  end
  biggest_fish
end

if __FILE__ == $PROGRAM_NAME
  fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

  puts sluggish_octopus(fishes)
end
