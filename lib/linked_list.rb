# frozen_string_literal: true

# A LinkedList class
class LinkedList
  attr_accessor :head

  def initialize
    @head = nil
  end

  def append(value)
  end

  def prepend(value)
  end

  def search(value)
  end

  def last
  end

  def length
  end

  def insert_after(target, value)
  end

  def remove(target)
  end

  def to_s
  end
end

# a class resprenting a single "link" or node in a linked list
class Node
  attr_accessor :value, :next_node

  def initialize(value, next_node)
    @value = value
    @next_node = next_node
  end
end
