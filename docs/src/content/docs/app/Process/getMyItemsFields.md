---
title: Get my items fields
description: Get field definitions for the my-items view
sidebar:
  order: 55
---

Returns the field definitions for the my-items view, filtered by status.

### Parameters

| Parameters | Type   | Description                                               |
| ---------- | ------ | --------------------------------------------------------- |
| status     | String | Required. The status filter (e.g. `draft`, `inprogress`). |

### Syntax

```js
const fields = await processInstance.getMyItemsFields({ status: "inprogress" });
```
