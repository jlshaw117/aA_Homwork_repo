class Map

  def initialize
    @map = []
  end

  def set(key, value)
    if @map.none? {|k,v| k == key}
      @map << [key, value]
    else
      @map.map! do |k,v|
        if k == key
          [k, value]
        else
          [k,v]
        end
      end
    end
  end

  def get(key)
    @map.each {|k,v| return [k,v] if key == k}
  end

  def delete(key)
    @map.map! do |k,v|
      if k == key
        nil
      else
        [k,v]
      end
    end.compact
  end

  def show
    p @map
  end

end
