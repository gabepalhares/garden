---
id: xp-continuous-integration
title: Continuous Integration - CI
tags:
  - CI
  - Development
  - eXtreme Programming
---

*"Continuous integration doesn’t eliminate bugs, but it makes them dramatically easier to find and remove." - Martin Fowler*

**Continuous Integration (CI)** is a practice where the code being developed by the team is integrated, versioned, built, and verified multiple times a day in a dedicated environment. CI involves frequent integration of the code developed by the team into a shared repository, automated testing, and the generation of builds of the software in an isolated environment.

**XP programmers should** integrate and commit only one version to the code repository. Each integration is verified by a build with automated tests, detecting errors as early as possible.

**This practice generates** synergy with other XP practices. The builds of small deliveries are created through CI. It will automatically verify the build with each commit made to the repository. In each, the coding standard can be automatically checked, and acceptance tests can also be executed.

**When someone** from the team is responsible for breaking the build, they should buy a package of sweets to fill the team's candy jar. This is a light-hearted and relaxed way to prevent the build from being broken by careless mistakes.