---
id: xp-tdd
title: Test-Driven Development - TDD
tags:
  - TDD
  - Tests
  - eXtreme Programming
---

*"I’m not an excellent programmer; I’m just a good programmer with excellent habits." - Kent Beck*

**TDD** is a technique for software construction that guides development through writing tests.

<img
  src="https://github.com/minortypo/garden/blob/gh-pages/img/tdd.png?raw=true"
  alt="Refactoring, tech debt cost over time"
  height="350"
  width="350"
/>

**In TDD,** automated tests are written before the production code, and the XP team adopts this approach to ensure that functionalities are continuously tested as they are developed. This promotes code quality, predictability, and responsiveness to changing requirements, making TDD a valuable practice for XP teams aiming to deliver high-quality software and customer satisfaction.

- TDD follows an iterative cycle and consists of **three main steps:**

**Write a Test (Red):** Start by writing an automated test that defines the desired behavior of a functionality or component of the software. This initial test will generally fail, as the functionality has not yet been implemented.

**Write the Production Code (Green):** Next, write the production code necessary to make the test pass. The goal is to implement the functionality in a simple and direct way that meets the test’s requirements.

**Refactor the Code (Refactor):** After the test passes, it’s time to refactor the code, if necessary, to ensure that it is clean, efficient, and adheres to good coding practices. The code should be maintained in a way that makes it easy to understand and maintain.

**The TDD cycle** is repeated continuously, with the team writing tests for each small functionality or part of the software as development progresses. This ensures that the code is always tested and that the tests serve as living documentation of the functionalities.

**All these factors** make TDD a practice that promotes software quality, helps avoid regressions, provides immediate feedback on the code, and makes changes and adaptations to the software easier and safer to perform.


