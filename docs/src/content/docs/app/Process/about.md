---
title: About
description: Usage of process methods
sidebar:
  order: 34
---

Kissflow Process automates structured, multi-step workflows that move items through approvals and tasks until completion.

Get a process instance using the `getProcess` method from the app's interface.

### Parameter

| Parameters | Type   | Description                    |
| ---------- | ------ | ------------------------------ |
| flowId     | String | Unique Id of the process flow. |

### Syntax

```js
const processInstance = kf.app.getProcess("flow_id");
```

Once you have the process instance, you can execute the following methods:

**Querying items**

1. getMyItems()
2. getMyTasksItems()
3. getParticipatedItems()
4. getAdminItems()
5. getItem()

**Managing items**

6. createItem()
7. updateItem()
8. deleteItem()
9. openForm()

**Acting on tasks**

10. submitItem()
11. rejectItem()
12. withdrawItem()
13. sendbackItem()
14. reassignItem()
15. getReassignees()
16. restartItem()
17. discardItem()

**Fields and progress**

18. getFields()
19. getMyTaskFields()
20. getParticipatedFields()
21. getMyItemsFields()
22. getProgress()
