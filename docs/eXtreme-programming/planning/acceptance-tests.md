---
id: xp-acceptance-tests
title: Acceptance Tests
tags:
  - Acceptance Tests
  - Validation
  - eXtreme Programming
---

*'Acceptance tests are road maps for the iteration, telling the team where to go and what landmarks to look for.' - Lisa Crispin*

**When developers,** testers, and the client agree on the acceptance criteria, everyone understands the plan for the system's behavior.

**Acceptance tests validate** how the client will accept the finished functionalities, as they are functional tests that guide the team in development and then help put into production what has been decided the system should contain.

**Acceptance tests must always** be automated for a simple reason: cost. To facilitate frequent small deliveries, acceptance tests need to be automated.

### Validating with Acceptance Criteria

**Each user story has one** or more acceptance criteria, which are also created by the client. The tester helps in thinking of good test scenarios, which are written with automation in mind.

#### Gherkin Writing Model (BDD - Behavior Driven Development)

- Given that ...
- When ...
- Then ...