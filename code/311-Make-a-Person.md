## 311. Make a Person

用下面给定的方法构造一个对象.

方法有 getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

```javascript
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(' ')[0];
  };

  this.getLastName = function() {
    return fullName.split(' ')[1];
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(first) {
    fullName = first + ' ' + fullName.split(' ')[1];
  };
  this.setLastName = function(last) {
    fullName = fullName.split(' ')[0] + ' ' + last;
  };
  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
```
