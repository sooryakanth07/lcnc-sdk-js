---
title: About
description: Usage of dataform methods
sidebar:
  order: 23
---

In Kissflow apps, dataforms gather and store data, enabling users to submit data into an app.

Get a dataform instance using the `getDataform` method from the app's interface.

### Parameter

| Parameter  | Type   | Description                     |
| ---------- | ------ | ------------------------------- |
| dataformId | String | Unique Id of the dataform flow. |

### Syntax

```js
let dataformInstance = kf.app.getDataform(dataformId);
```

Once you have the dataform instance, you can execute the following methods:

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
