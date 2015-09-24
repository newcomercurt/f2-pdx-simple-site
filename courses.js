var course = {
  "level": 201,
  "name": "Foundations 2: JavaScript",
  "lectures": [{
    "topic": "Intro, JavaScript Basics 1",
    "notes": ["There are many console methods available other than log. Node allows you to use JavaScript in your own terminal rather than the browser",
      "JavaScript is used make sites interactive",
      "JavaScript can help streamline tasks so similar code does not have to be written multiple times"
    ]
  }, {
    "topic": "JavaScript Basics 2 & Intro to Node",
    "notes": ["logial operators can be used to check multiple conditions",
      "almost everything in JavaScript is an object with key/value pairs, arrays contain lists of values",
      "jshint and jscs check your code for errors and can help in cleaning up your code"
    ]
  }, {
    "topic": "Array Methods, Functions & Scope/Hoisting",
    "notes": ["methods are functions within an an object",
      "callbacks are functions we pass as arugments to use later",
      "local vs global variables, local variables are declared inside a function and are only accessible to code within that function, global functions are accesible to all of the code within the script file"
    ]
  }, {
    "topic": "OOP in JavaScript and Classes/Inheritance",
    "notes": ["object oriented programming allows programmers to organize data in a way that makes sense to them.",
      "this is a reserved word in JavaScript that is used to refer to a specifc property of an object at the time of a function call.",
      "Constructor functions are used to create object prototypes that can be used to create other objects that will inherit the properties of the prototype."
    ]
  }, {
    "topic": "JavaScript in the Browser & Intro to jQuery",
    "notes": ["jquery is a JavaScript library that makes performing interactive tasks on a webpage much easier",
      "listeners can be used to respond to an action the user takes, there are many types of listeners",
      "jquery can use different selectors to access parts of the dom"
    ]
  }, {
    "topic": "Building a Server & Using Ajax",
    "notes": ["Ajax is an asynchronous JavaScript that can be used to request and retrieve data without havint to reload a web page",
      "npm stands for node package manager which has many different packages that are useful, examples are jshint, grunt, and expressjs",
      " we can use express to build a server that can use request and respond with query selectors and Ajax udpate our page"
    ]
  }, {
    "topic": "Build & Deploy an App",
    "notes": ["During this lecture we made code used to search through these notes",
      "We worked with Ajax more and had our page respond to our server"
    ]
  }, {
    "topic": "Functional Programming with lodash",
    "notes": ["lodash is another library for JavaScript that streamlines writing code",
      "we only scratched the surface of lodash, but it is quite intriguing."
    ]
  }],
  "labs": [{
    "topic": "Beginning Loops, Arrays, and Functions",
    "notes": ["in this lab we looped through an array to decide which animal to see at the zoo next",
      "we also translated some meerkats"
    ]
  }, {
    "topic": "Prototypes, more loops, functions, and Arrays",
    "notes": ["in this lab we used a loop to calculate how long a town would be eaten by the blob",
      "we also made a language translator for Romlulans, Klingons, and Humans"
    ]
  }, {
    "topic": "Final Project",
    "notes": ["figuring this one out",
      "gonna do some searching"
    ]
  }]
};
module.exports=course;
