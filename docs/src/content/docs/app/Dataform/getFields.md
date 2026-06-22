---
title: Get fields
description: Get the field definitions for a dataform
sidebar:
  order: 32
---

Returns the field definitions for the dataform.

### Parameters

| Parameters | Type   | Description                                     |
| ---------- | ------ | ----------------------------------------------- |
| viewId     | String | Optional. Scopes the fields to a specific view. |

### Syntax

```js
const fields = await dataformInstance.getFields();
```

### Returns

Returns the list of field definitions.
