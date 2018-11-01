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

def dominant_octopus(arr)

  return arr if arr.length <= 1

  mid = arr.length / 2

  left = dominant_octopus(arr[0...mid])
  right = dominant_octopus(arr[mid .. -1])

  merge(left,right)

end

def merge(left, right)
  result = []

  until left.empty? || right.empty?
    if left[0].length < right[0].length
      result << left.shift
    else
      result << right.shift
    end
  end
  result + left + right
end

def clever_octopus(arr)
  arr.reduce("") {|biggest_fish, fish| fish.length > biggest_fish.length ? fish : biggest_fish}
end

def slow_dance(str, arr)
  arr.each_with_index do |el, idx|
    return idx if str == el
  end
end

def constan_dance(str, hash)
  hash[str]
end

if __FILE__ == $PROGRAM_NAME
  fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

  puts sluggish_octopus(fishes)
  puts dominant_octopus(fishes).last
  puts clever_octopus(fishes)

  tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

  puts slow_dance("up", tiles_array)
  puts slow_dance("right-down", tiles_array)

  tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right" => 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
  }

  puts constan_dance("up", tiles_hash)
  puts constan_dance("right-down", tiles_hash)
end
