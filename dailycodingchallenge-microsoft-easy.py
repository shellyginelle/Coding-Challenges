"""
Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.
Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.
Recall that the median of an even-numbered list is the average of the two middle numbers.
For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

2
1.5
2
3.5
2
2
2

Thinking out loud, it would be like:
index(0) / 1 = 2 
[index(0) + index(1)] / 2 = 1.5
[index(0) + index(1) + index(2)] / 3 = 2
continued

"""

numbers = [2, 1, 5, 7, 2, 0, 5]
"""
Note: In simple terms, index() method finds the given element in a list and returns its position. However, if the same element is present more than once, index() method returns its smallest/first position.
index = numbers.index(x) 
"""
total = 0
median = 0
count = 1 

for x in numbers:
    total = total + x
    median = total / count 
    print(total, "/", count, "=", median)
    count = count + 1






