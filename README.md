[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Computer Science: An introduction

[Computer science](https://en.wikipedia.org/wiki/Computer_science) as an area of
study comprises everything necessary for the design, construction, and use of
computers.

What does computer science have to do with modern web development? Not much, on
the surface. As application developers, we can do our job well by following best
practices, guided by our experience. There will rarely be a time when you are
interested in the time-complexity of a method you write. Complexity and data
structures are something language designers worry about, not developers, right?

Well, no. While it is true that we don't usually care much about optimization,
there are a few reasons why developers should care a bit about classic topics in
introductory computer science (CS). First, classic problems allow us to practice
our problem solving skills; in fact, most of our lesson today can be completed
without coding. Second, being familiar with the tradeoffs inherent in choosing
an algorithm or a data structure have direct parallels in choices you make
writing your application code. Lastly, some of your colleagues will have CS
degrees, and being able to understand the jargon and figures of speech they use
will help you communicate with them. Perhaps most importantly, these colleagues
will probably have a say in hiring you! Nearly every technical interview touches
on these topics.

We'll focus on one area of theoretical computer science, algorithms and data
structures, and begin with abstract data types.

## Prerequisites

-   Familiarity with a high-level programming language implementing dynamic
    arrays.

## Objectives

By the end of this, developers should be able to:

-   Define abstract data type (ADT).
-   Create stacks and queues from dynamic arrays.
-   Describe a few basic data structures by listing three traits of each
-   Identify the time-complexity of basic operations on each data structure

## Preparation

1.  [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install depenencies with `npm install` and `bundle install`.

## Abstract data type (ADT)

An [ADT](https://en.wikipedia.org/wiki/Abstract_data_type) is a type defined by
what it does, rather than how it is implemented.  Specific implementations have
limitations not found in the ADT and must be able to create instances of the
type.

## Stack

A stack implements a last in, first out data store (LIFO).

### Discussion: Stack

Stack operations:

-   `empty?` - check to see if there are any items on a stack.
-   `push` - add an item onto the top of a stack.
-   `pop` - remove and return an item from the top of a stack.

Visualizing stack implementations:

-   As an [array](http://www.cs.usfca.edu/~galles/visualization/StackArray.html).
-   As a [list](http://www.cs.usfca.edu/~galles/visualization/StackLL.html).

### Demonstration: Implementing a stack in JavaScript

### Code along: Annotating a stack implementation in JavaScript

### Lab: Implementing a stack in Ruby

## Queue

A queue implements a first in, first out data store (FIFO).

### Discussion: Queue

Queue operations:

-   `empty?` - check to see if there are any items in a queue.
-   `enqueue` - add an item to the tail of a queue.
-   `dequeue` - remove an item from the head of a queue.

Visualizing queue implementations:

-   As an [array](http://www.cs.usfca.edu/~galles/visualization/QueueArray.html)
-   As a [list](http://www.cs.usfca.edu/~galles/visualization/QueueLL.html)

### Demonstration: Implementing a queue in Ruby

### Code along: Annotating a queue implementation in Ruby

### Lab: Implementing a queue in JavaScript

### Discussion: Implementation Details and Applications

Do we need `empty?` (or `isEmpty` or `isempty`) when implementing either ADT in
a language that has a "nothing" type  (`nil` in Ruby, `undefined` in JavaScript,
or `None` in Python)?  Why or why not?

How should we handle the limitations of concrete implementations of either ADT?

What kinds of algorithms or applications would be well-suited to
stacks or queues?

## Data Structures

In high-level languages such as Ruby and JavaScript, we don't have to think
about exactly where and how to allocate memory for storing things like arrays
and hashes, or what algorithms are used to traverse these data structures when
we need to find or change a value. These low-level concerns are usually not
relevant to modern web development, but knowing the basics is considered a
hallmark of a good programmer, and the concepts frequently come up in interview
questions.

Since Ruby and JavaScript are the two languages you know best right now, we will
be implementing some low-level data structures and algorithms in these
languages, even though normally there would be no practical reason to do this.
It's important to understand that we are re-inventing the wheel to an extreme
degree here.

## Research Common Data Structures

For learning about data structures, we'll break into groups, each assigned a
particular data structure and set of guiding questions. After group research is
complete, we'll compile our notes into a single study guide. Accompanying
diagrams may be made on the whiteboard.

### Linked Lists

1.  What is a linked list?
1.  What is the time-complexity to search a linked list?
1.  Does it matter whether the list is sorted or not? Why?
1.  **Bonus:** What is a doubly linked list?
1.  **Bonus:** What is the time-complexity of insertion? Deletion?

### Dictionary

1.  What is an dictionary? When would you use one?
1.  What is the time-complexity to search a dictionary?
1.  What is a hash function?
1.  What is a hash collision?
1.  **Bonus:** What is the time-complexity of insertion? Deletion?

### Tree

1.  What is a tree? When would you use one?
1.  What is a binary search tree?
1.  What is the time-complexity to search a binary tree?
1.  What are some applications of recursion to trees?
1.  **Bonus:** What is the time-complexity of insertion? Deletion?

### Graph

1.  What is a graph? When would you use one?
1.  What is depth-first search? Breadth-first search?
1.  What is the time-complexity to search a graph?
1.  How is a graph different from a tree?
1.  **Bonus:** What is the time-complexity of insertion? Deletion?

## Lab: Implement a Linked List

Low-level arrays (as implemented in C or C++) are contiguous blocks of memory
made up of many "cells", each of which contains a value. The one-block-of-memory
approach makes accessing arbitrary values fast and easy, but it means that you
have to know in advance how many array elements you want. Expanding arrays is an
expensive operation that involves reserving a new block of memory and copying
all the existing elements into it.

To solve this problem, the **linked list** was created. Each "value" within a
linked list is actually an object that contains two things: the value itself,
and a reference to the "next" element in the list. Adding a new element is as
simple as reserving the memory space for that element, and pointing the "next"
reference of what was previously the last element to the new element.

Implement a `LinkedList` class in Ruby or JavaScript. **Do not implement the
list as an array or hash,** or any built-in data type. We have provided you some
starter code in the form of a `LinkedList` class and a `Node` class. The `Node`
class represents one "link": an object with a value and a pointer to the next
object.

You must implement the following methods:

-   `append`, which adds new value to the end of the list
-   `prepend`, which adds a value to the beginning of the list
-   `search`, which returns the first node whose value is equal to the "search
     term" (in other words, the arguement passed to `search`)
-   `insertAfter` or `insert_after`, which adds a new node after a given value
    in the   list
-   `remove`, which removes the first node containing the target value
-   `length`, which returns the length of the list
-   `to_s` or `toString`, which returns a string representing all the values in
    the list, formatted however you like

There are thorough tests for all of these methods. Run them often! If you're
working in Ruby, it will be `bin/rake test`. If you're working in JS it will be
`grunt test`. **For the tests to work you must open up the relevant spec file in
Atom and replace any instances of `xdescribe` with `describe`.** Otherwise the
tests will be listed as pending.

### Linked List Bonus Challenges

These can be attempted in any order; they are not dependent on each other. Note:
You will almost certianly not have time to finish these during this training,
but they would be excellent practice for job interviews.

-   If you implemented your linked list in JavaScript, implement it in Ruby, or
    vice-versa.
-   Create a method to iterate through each value in the list. In Ruby you'll
    need to accept a block and use `yield`; in JavaScript you'll need to accept
    a callback function like `forEach` does on arrays.
-   Create a method that reverses the list. It can either return a new reversed
    list and leave the existing one alone, or reverse the existing list
    in-place. Or try doing both!
-   Upgrade your linked list to a **doubly-linked list**. In this variant of the
    linked list, each element holds references to both the "next" element and
    the "previous" element. You may find that it's much easier to remove a
    specific value from this kind of list.
-   Done-to-death interview question: Suppose you have a linked list that has
    been "corrupted" such that the links form a loop: if you tried to iterate
    through it, you'd keep going forever. Devise an algorithm that, given the
    first element of a linked list, would detect whether the list contains a
    loop.
-   Revisit your stack and queue implementation, and refactor them to use linked
    lists (your linked list implementation) instead of arrays.

## Optional Lab: Implement a Binary Tree

Both arrays and linked lists suffer from poor lookup and insertion performance:
Finding a specific value, or inserting a new value at an arbitrary position,
require O(n) time. **Tree** data structures, of which the **binary tree** is
one, can improve the performance of these operations (at the expense of others).

Each "value" within a binary tree is actually an object that contains three
things: The value itself, and references to a "left" node and a "right" node.
The first value inserted into the tree becomes the "root" node. The second value
is inserted either to the "left" or the "right" of the root node, depending on
how its value compares to the root node's value. Subsequent values are likewise
inserted to the left or right of some existing node in the tree based on value
comparisons.

Note that this algorithm requires all values inserted into the tree to be
**unique** and **comparable**: for any given value, you should be able to say
for sure that it is either "less than" or "greater than" any other value. If you
have duplicate values, or your values are of different types (e.g. strings and
integers) or otherwise cannot be compared, they cannot be stored in a binary
tree.

Implement a `BinaryTree` class in Ruby or JavaScript. As before, do not use any
of the built-in data types. Your class should be capable of the following:

-   Add a new value to the tree
-   Find whether a given value is in the tree
-   Remove a given value from the tree (warning: tricky!)
-   Implement `to_s` or `toString` to return all values in the tree

### Binary Tree Bonus Challenges

These can be attempted in any order; they are not dependent on each other.

-   Create a method to iterate through each value in the tree. In Ruby you'll
    need to accept a block and use `yield`; in JavaScript you'll need to accept
    a callback function like `forEach` does on arrays.
-   Upgrade your binary tree to a **hash tree**: instead of storing only a value
    for each node, store a *key* as well. Perform insertions and deletions based
    on the key, and add a method to retrieve the value associated with a key.
    (This might remind you of the built-in `Hash` class in Ruby. This is how
    some other languages implement hashes, but Ruby does it using a non-tree
    data structure called a **hash table**.)
-   Note that if the values inserted into the tree go in one "direction" much
    more frequently than another (e.g. they all go to the "left"), the tree can
    become "unbalanced". A completely unbalanced tree performs no better than a
    linked list. In this case we want to "rebalance" the tree, that is,
    rearrange its nodes to minimize the number of connections needed to access
    any given node. How might we do this?

## Additional Resources

-   [Data Structure Visualization](http://www.cs.usfca.edu/~galles/visualization/Algorithms.html)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
