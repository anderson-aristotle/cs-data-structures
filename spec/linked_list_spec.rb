# frozen_string_literal: true

require_relative '../lib/linked_list.rb'
require 'pry'

RSpec.describe LinkedList do
  before(:each) do
    @list = LinkedList.new
  end

  describe 'append' do
    it 'adds a node to the end of the list when list is empty' do
      @list.append '🦀'
      expect(@list.head).to be_a(Node)
    end

    it 'adds a node to the end of the list when list is not empty' do
      @list.append '🦀'
      @list.append '🦀'
      expect(@list.head.next_node).to be_a(Node)
    end

    it 'adds the correct value to the end of the list' do
      @list.append '🦀'
      @list.append '🦋'
      expect(@list.head.next_node.value).to eq('🦋')
    end
  end

  describe 'prepend' do
    it 'adds a node at the head when list is empty' do
      @list.prepend '🦀'
      expect(@list.head).to be_a(Node)
    end

    it 'adds a node to the head when list is not empty' do
      @list.prepend '🦀'
      @list.prepend '🦀'
      expect(@list.head).to be_a(Node)
    end

    it 'adds the correct value to the head' do
      @list.prepend '🦀'
      @list.prepend '🦈'
      expect(@list.head.value).to eq('🦈')
    end
  end

  describe 'search' do
    it 'returns a node' do
      @list.append '🐷'
      @list.append '🐒'
      @list.append '🦐'

      expect(@list.search('🐒')).to be_a(Node)
    end

    it 'the returned node contains the correct value' do
      @list.append '🐷'
      @list.append '🐒'
      @list.append '🦐'

      expect(@list.search('🐒').value).to eq('🐒')
    end

    it 'can find the first node' do
      @list.append '🐷'

      expect(@list.search('🐷').value).to eq('🐷')
    end
  end

  describe 'last' do
    it 'returns head when there is only one node' do
      @list.append('🐴')
      expect(@list.last.value).to eq('🐴')
    end

    it 'returns the last node when there are multiple' do
      @list.append('🐴')
      @list.append('🐝')
      expect(@list.last.value).to eq('🐝')
    end
  end

  describe 'length' do
    it 'returns 0 for an empty @list' do
      expect(@list.length).to eq(0)
    end

    it 'returns the correct number' do
      @list.append '🐷'
      @list.append '🐒'
      @list.append '🦐'

      expect(@list.length).to eq(3)
    end
  end

  describe 'insert_after' do
    it 'inserts the right node in the right place' do
      @list.append('🐴')
      @list.append('🐝')

      @list.insert_after('🐴', '🐟')
      expect(@list.head.value).to eq('🐴')
      expect(@list.head.next_node.value).to eq('🐟')
    end

    it 'the inserted node has a reference to the .next_node node' do
      @list.append('🐴')
      @list.append('🐝')

      @list.insert_after('🐴', '🐟')
      expect(@list.head.next_node.next_node.value).to eq('🐝')
    end
  end

  describe 'remove' do
    it 'removes the correct node' do
      @list.append '🐷'
      @list.append '🐒'
      @list.append '🦐'

      @list.remove('🐒')
      expect(@list.head.value).to eq('🐷')
      expect(@list.head.next_node.value).to eq('🦐')
    end
  end

  describe 'to_s' do
    it 'returns a string' do
      @list.append('🐴')
      @list.append('🐝')

      expect(@list.to_s).to be_a(String)
    end
  end
end
