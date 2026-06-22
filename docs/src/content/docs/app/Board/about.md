---
title: About
description: Usage of board methods
sidebar:
  order: 12
---

With Kissflow Board, you can create highly adaptable workflows that let you keep track of information and manage work efficiently.

Get a board instance using the `getBoard` method from the app's interface.

### Parameter

| Parameters | Type   | Description                  |
| ---------- | ------ | ---------------------------- |
| flowId     | String | Unique Id of the board flow. |

### Syntax

```js
const boardInstance = kf.app.getBoard("flow_id");
```

Once you have the board instance, you can execute the following methods:

1. getItems()
2. getItem()
3. createItem()
4. updateItem()
5. deleteItem()
6. submitItem()
7. discardItem()
8. openForm()
9. getFields()
10. importCSV()
