---
title: Withdraw item
description: Withdraw a process instance
sidebar:
  order: 46
---

Withdraws a process instance. Available to the initiator only.

### Parameters

| Parameters | Type   | Description                                  |
| ---------- | ------ | -------------------------------------------- |
| instanceId | String | Required. The `_id` of the instance.        |
| comment    | String | Optional. A comment to attach to the action. |

### Syntax

```js
await processInstance.withdrawItem({
  instanceId: "item_123",
  comment: "Withdrawing request",
});
```
