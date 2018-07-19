# frozen_string_literal: true

require_relative '../lib/stack.rb'

RSpec.describe 'Stack - Ruby' do
  stack = Stack.new

  it 'has an `empty?` method' do
    expect(stack).to respond_to(:empty?)
  end

  it 'is empty when newly created' do
    expect(stack.empty?).to be true
  end

  it 'has a `push` method' do
    expect(stack).to respond_to(:push)
  end

  it 'has a `pop` method' do
    expect(stack).to respond_to(:pop)
  end

  it '`pop` method returns the last pushed value' do
    stack = Stack.new

    stack.push(40)
    stack.push(50)
    expect(stack.pop).to eq(50)
  end

  it '`pop` method removes the last value from the store' do
    stack = Stack.new

    stack.push(40)
    stack.push(50)
    stack.pop
    expect(stack.pop).to eq(40)
  end
end
