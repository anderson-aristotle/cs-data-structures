'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const Stack = require('../lib/stack')

describe('Stack - JS', function () {
  let stack = new Stack()

  it('has an `isEmpty` method', function () {
    expect(stack).to.respondTo('isEmpty')
  })

  it('is empty when newly created', function () {
    expect(stack.isEmpty()).to.be.true
  })

  it('has a `push` method', function () {
    expect(stack).to.respondTo('push')
  })

  it('has a `pop` method', function () {
    expect(stack).to.respondTo('pop')
  })

  it('`pop` method returns the last pushed value', function () {
    stack = new Stack()

    stack.push(100)
    stack.push(200)
    expect(stack.pop()).to.eq(200)
  })

  it('`pop` method removes the last value from the store', function () {
    stack = new Stack()

    stack.push(100)
    stack.push(200)
    stack.pop()
    expect(stack.pop()).to.eq(100)
    expect(stack.pop()).to.be.undefined
  })
})
