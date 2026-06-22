---
title: About
description: Usage of Decision table
sidebar:
  order: 57
---

A decision table is a systematic and structured representation of complex
business logic or decision-making processes.

Get a decision table instance using the `getDecisionTable` method from the app's interface.

### Parameter

| Parameter       | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| decisionTableId | String | Unique Id of the decision table flow.|

### Syntax

```js
let decisionTableInstance = kf.app.getDecisionTable(decisionTableId);
```

Once you have the decision table instance, you can execute the following methods:

1. evaluate()
