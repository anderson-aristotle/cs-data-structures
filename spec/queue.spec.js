'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const Queue = require('../lib/queue')

describe('Queue - JS', function () {
  let queue = new Queue()

  it('has an `isEmpty` method', function () {
    expect(queue).to.respondTo('isEmpty')
  })

  it('is empty when newly created', function () {
    expect(queue.isEmpty()).to.be.true
  })

  it('has a `enqueue` method', function () {
    expect(queue).to.respondTo('enqueue')
  })

  it('has a `dequeue` method', function () {
    expect(queue).to.respondTo('dequeue')
  })

  it('`dequeue` method returns the first enqueued value', function () {
    queue = new Queue()

    queue.enqueue(100)
    queue.enqueue(200)
    expect(queue.dequeue()).to.eq(100)
  })

  it('`dequeue` method removes the first value from the store', function () {
    queue = new Queue()

    queue.enqueue(100)
    queue.enqueue(200)
    queue.dequeue()
    expect(queue.dequeue()).to.eq(200)
    expect(queue.dequeue()).to.be.undefined
  })
})
