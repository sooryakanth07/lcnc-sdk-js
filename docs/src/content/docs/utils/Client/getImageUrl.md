---
title: Get image URL
description: Resolve a Kissflow image field value to a base64 data URL
sidebar:
  order: 9
---

Resolves a Kissflow image field value to a base64 data URL.

Custom components cannot load Kissflow-hosted images directly due to CORS restrictions and 302 redirects to signed URLs This method fetches the image in the parent window (which has the required session cookies) and returns a self-contained `data:image/...;base64,...` URL that can be used as an `<img>` `src` without any CORS issues.

### Parameters

| Parameters | Type   | Description                                                                                                                          |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| imageValue | Object | The image field value. Must contain a `key` property and optionally a `photos` array. Uses `photos[1]` (preview) when available, otherwise falls back to `key`. |

### Syntax

```js
const dataUrl = await kf.client.getImageUrl(imageValue);
```

### Returns

Returns a promise that resolves with the base64 data URL string.

### Example

```js
const dataUrl = await kf.client.getImageUrl(imageFieldValue);
document.querySelector("#avatar").src = dataUrl;
```
