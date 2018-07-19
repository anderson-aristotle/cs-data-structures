# frozen_string_literal: true

require_relative '../lib/queue.rb'

RSpec.describe 'Queue - Ruby' do
  queue = Fifo.new

  it 'has an `empty?` method' do
    expect(queue).to respond_to(:empty?)
  end

  it 'is empty when newly created' do
    expect(queue.empty?).to be true
  end

  it 'has a `enqueue` method' do
    expect(queue).to respond_to(:enqueue)
  end

  it 'has a `dequeue` method' do
    expect(queue).to respond_to(:dequeue)
  end

  it '`dequeue` method returns the first enqueued value' do
    queue = Fifo.new

    queue.enqueue(40)
    queue.enqueue(50)
    expect(queue.dequeue).to eq(40)
  end

  it '`dequeue` method removes the first value from the store' do
    queue = Fifo.new

    queue.enqueue(40)
    queue.enqueue(50)
    queue.dequeue
    expect(queue.dequeue).to eq(50)
  end
end
