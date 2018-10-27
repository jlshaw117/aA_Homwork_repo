def sum_to(num)
  if num < 1
    return nil
  elsif num == 1
    return 1
  end
  num + sum_to(num - 1)
end

def add_numbers(nums)
  return nil if nums.empty?
  return nums[0] if nums.length ==1
  nums.pop + add_numbers(nums)
end

def gamma_fnc(num)
  return nil if num < 1
  return num if num == 1
  (num-1) * gamma_fnc(num-1)
end

def ice_cream_shop(flavors, favorite)
  return false if flavors.empty?
  return true if flavors.pop == favorite
  ice_cream_shop(flavors, favorite)
end

def reverse(string)
  return string if string.length == 1 || string.length == 0
  "#{string.slice!(-1)}#{reverse(string)}"
end
