---
title: Open form
description: Open the form UI for a board item
sidebar:
  order: 20
---

Opens the form UI for a board item.

### Parameters

| Parameters | Type   | Description                                                  |
| ---------- | ------ | ------------------------------------------------------------ |
| item       | Object | An object with `_id` (required) and an optional `_view_id`. |

### Syntax

```js
boardInstance.openForm({ _id: "item_123", _view_id: "AllItems_View" });
```
