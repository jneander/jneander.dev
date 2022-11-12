---
title: == vs. eql vs. equals
description: Thoughts on the subtle differences between these three similar operators
slug: ==-vs-eql-vs-equals
date: '2012-07-21'
---

It was suggested to me that it is common for Ruby developers to default to _==_ when testing
comparisons in their spec tests. This seemed odd to me, but it merited a little research in any
case.

The operators act as follows

- **==** returns true if two objects are equivalent, without regard for type or identity.
- **.eql?** returns true if two objects have both equivalent value and type, regardless of identity
- **.equals?** returns true if two objects are the same instance, having the same identity

```ruby
1.0 == 1
# => true

1.0.eql? 1
# => false

a = 1.0
b = 1.0
a.equals? a
# => true

a.equals? b
# => false
```

In testing, the operators differ only visually

- **==** defers to the _==_ method
- **eql** uses the _.eql?_ method
- **equals** uses the _.equals?_ method

As a rule of thumb: the longer the operator, the more restrictive the test it performs.

It may be true that programmers tend to use the _==_ operator. For me, the information being
compared - not personal style or preference - should be the deciding factor for the choice between
one operator or another. After all, I want to be absolutely certain that my tests are passing for
the right reasons.
