/* eslint-disable */


/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  elements.forEach(function (element, i, elements) {
    return cb(element, i);
  });
};

const map = (elements, cb) => {
  // Produces a new array of values. By mapping each value in list through a transformation function.
  // Return the new array.
  arr = [];
  elements.map(function (element) {
    arr.push(cb(element));
  })
  return arr;
};

/* ======================== Closure Practice ============================ */
// No test needed here, just run the newCounter(); and make sure it's counting up
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let f = 0;
  let newCounter = function () {
    console.log(b)
    return ++f;

  }
  return newCounter();


};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;

  return (...args) => {
    ++count;
    if (count <= n) {
      return cb(...args);
    }
    else {
      return null;
    }
  }



};

/* ======================== Prototype Practice ============================ */

// ***Prototypes do NOT have test cases built for them.  You must use the console logs provided at the end of this section.***

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. 

// Create a CuboidMaker constructor function that accepts properties for length, width, and height

// Create a seperate function property of CuboidMaker that returns the volume of a given cuboid's length, width, and height
// Formula for cuboid volume: length * width * height

// Create a seperate function property of CuboidMaker that returns the surface area of a given cuboid's length, width, and height. 
// Formula for cuboid surface area of a cube: 2(length * width + length * height + width * height)

// Create a cuboid object that inherits from CuboidMaker. 
// The cuboid object must contain keys for length, width, and height.

// To test your formulas, pass these key/value pairs into your constructor: length: 4, width: 5, and height: 5. When running your logs, you should get Volume: 100 with a Surface Area of 130. 

function CuboidMaker(obj) {
  this.length = obj.length;
  this.width = obj.width;
  this.height = obj.height;
}

CuboidMaker.prototype.surfaceArea = function () {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
};
CuboidMaker.prototype.volume = function () {
  return this.length * this.width * this.height;
};

 hilal = new CuboidMaker({
  length: 30,
  width: 20,
  height: 30,
});
console.log(hilal.surfaceArea());
console.log(hilal.volume());












// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* ======================== Class Practice ============================ */

// ***Class Practice does NOT have test cases built.  You must use the console logs provided at the end of this section.***

// Task 1: Copy and paste your prototype CuboidMaker here and proceed to convert it into ES6 Class syntax

// Task 2: Create a new class called Cube. Extend the Cube class with the CuboidMaker class.

// Create two new methods on the Cube class to calculate the volume and surface area of a cube given the same values passed in from CuboidMaker.

// The volume of a cube is: length * width * height
// The surface area of a cube is: 6 * (length + width)

// Create a new cube object that has equal values for length, width, and height 

// To test your formulas, pass these key/value pairs into your constructor: length: 2, width: 2, and height: 2. You should get Volume: 8 with a Surface Area of 24. 


class CuboidMaker {
  constructor(obj) {
    this.length = obj.length;
    this.width = obj.width;
    this.height = obj.height;
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
  volume() {
    return this.length * this.width * this.height;
  }
}

 hilal = new CuboidMaker({
  length: 10,
  width: 20,
  height: 30,
});
console.log(hilal.surfaceArea());
console.log(hilal.volume());


class Cube extends CuboidMaker {
  constructor(obj) {
    super(obj);
  }
  cubeVolume() {
    return this.length * this.width * this.height;
  }

  cubeSurfaceArea() {
    return 6*(this.length + this.width);
  }
}

 aissani = new Cube({
  length: 30,
  width: 30,
  height: 30,
});
console.log(aissani.cubeSurfaceArea());
console.log(aissani.cubeVolume());
console.log(aissani.volume());
console.log(aissani.surfaceArea());



// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// console.log(cube.volume()); // 8
// console.log(cube.surfaceArea()); // 24

/* ======================== Stretch Challenges ============================ */


// Challenge 1: Go back to your prototype CuboidMaker and extend Cube using psuedo-classical inheritance to achiveve the same results you built using the ES6 class syntax
function CuboidMaker(obj) {
  this.length = obj.length;
  this.width = obj.width;
  this.height = obj.height;
}

CuboidMaker.prototype.surfaceArea = function () {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
};
CuboidMaker.prototype.volume = function () {
  return this.length * this.width * this.height;
};

 hilal = new CuboidMaker({
  length: 30,
  width: 20,
  height: 30,
});
console.log(hilal.surfaceArea());
console.log(hilal.volume());


function Cube(obj) {
  CuboidMaker.call(this, obj);
}

Cube.prototype = Object.create(CuboidMaker.prototype);

Cube.prototype.cubeVolume = function () {
  return this.length * this.width * this.height;
};


Cube.prototype.CubeSurfaceArea = function () {
  return 6 * (this.length + this.width);
};

let aissani = new Cube({
  length: 30,
  width: 30,
  height: 30,
});
console.log(aissani.CubeSurfaceArea());
console.log(aissani.cubeVolume());
console.log(aissani.volume());
console.log(aissani.surfaceArea());



// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// console.log(cube.volume()); // 8
// console.log(cube.surfaceArea()); // 24

// Challenge 2: Go back to your class Cube and add the following property: isCube.
// Create a method inside of Cube that checks for isCube and if it's true, returns a string 'We have a cube!';
class Cube extends CuboidMaker {
  constructor(obj) {
    super(obj);
    this.shape = obj.shape;
  }
  cubeVolume() {
    return this.length * this.width * this.height;
  }

  cubSurfaceArea() {
    return 6 * (this.length + this.width);
  }

  cube() {
    if (this.shape === 'cube') {
      return 'we have a cube!';
    }
    else {
      return false;
    }
  }
}
aissani = new Cube({
  length: 30,
  width: 30,
  height: 30,
  shape: 'cube'
});
console.log(aissani.CubeSurfaceArea());
console.log(aissani.cubeVolume());
console.log(aissani.volume())
console.log(aissani.surfaceArea())
console.log(aissani.cube())
// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// console.log(cube.volume()); // 8
// console.log(cube.surfaceArea()); // 24
// console.log(cube.checkIfCube());  // "We have a cube!"

// Challenge 3: Recursion
const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
};


module.exports = {
  each,
  map,
  limitFunctionCallCount,
  checkMatchingLeaves,
};


module.exports = {
  each,
  map,
  limitFunctionCallCount,
  checkMatchingLeaves,
};