'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const lab = require('../lib/linked-list')

const LinkedList = lab.LinkedList
const Node = lab.Node

xdescribe('LinkedList - JS', function () {
  describe('append', function () {
    const list = new LinkedList()

    it('adds a node to the end of the list when list is empty', function () {
      list.append('🥓')
      expect(list.head).to.be.an.instanceOf(Node)
    })

    it('adds a node to the end of the list when list is not empty', function () {
      list.append('🥓')
      expect(list.head.next).to.be.an.instanceOf(Node)
    })

    it('adds the correct value to the end of the list', function () {
      list.append('🌭')
      expect(list.head.next.next.value).to.eq('🌭')
    })
  })

  describe('prepend', function () {
    const list = new LinkedList()

    it('adds a node at the head when list is empty', function () {
      list.prepend('🍔')
      expect(list.head).to.be.an.instanceOf(Node)
    })

    it('adds a node to the head when list is not empty', function () {
      list.prepend('🍔')
      expect(list.head).to.be.an.instanceOf(Node)
    })

    it('adds the correct value to the head', function () {
      list.prepend('🌮')
      expect(list.head.value).to.eq('🌮')
    })
  })

  describe('search', function () {
    const list = new LinkedList()

    list.append('🧀')
    list.append('🥩')
    list.append('🥙')

    it('returns a node', function () {
      expect(list.search('🥩')).to.be.an.instanceOf(Node)
    })

    it('the returned node contains the correct value', function () {
      expect(list.search('🥩').value).to.eq('🥩')
    })

    it('can find the first node', function () {
      expect(list.search('🧀').value).to.eq('🧀')
    })
  })

  describe('last', function () {
    const list = new LinkedList()

    it('returns head when there is only one node', function () {
      list.append('🥧')

      expect(list.last()).to.be.an.instanceOf(Node)
      expect(list.last().value).to.eq('🥧')
    })

    it('returns the last node when there are multiple', function () {
      list.append('🥩')
      list.append('🍕')

      expect(list.last()).to.be.an.instanceOf(Node)
      expect(list.last().value).to.eq('🍕')
    })
  })

  describe('length', function () {
    const list = new LinkedList()

    it('returns 0 for an empty list', function () {
      expect(list.length()).to.eq(0)
    })

    it('returns the correct number', function () {
      list.append('🧀')
      list.append('🥩')
      list.append('🥙')

      expect(list.length()).to.eq(3)
    })
  })

  describe('insertAfter', function () {
    const list = new LinkedList()

    list.append('🧀')
    list.append('🥩')

    it('inserts the right node in the right place', function () {
      list.insertAfter('🧀', '🍿')

      expect(list.head.value).to.eq('🧀')
      expect(list.head.next.value).to.eq('🍿')
    })

    it('the inserted node has a reference to the next node', function () {
      expect(list.head.next.next.value).to.eq('🥩')
    })
  })

  describe('remove', function () {
    const list = new LinkedList()

    list.append('🥙')
    list.append('🧀')
    list.append('🥩')

    list.remove('🧀')

    it('removes the correct node', function () {
      expect(list.head.value).to.eq('🥙')
      expect(list.head.next.value).to.eq('🥩')
    })
  })

  describe('toString', function () {
    const list = new LinkedList()

    list.append('🍭')
    list.append('🍪')
    list.append('🍍')

    it('returns a string', function () {
      expect(list.toString()).to.be.a('string')
    })
  })
})
