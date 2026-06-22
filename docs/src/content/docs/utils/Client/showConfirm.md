---
title: Show confirm
description: Display a confirmation dialog to the client
sidebar:
  order: 7
---

Displays the confirmation dialog to the client and returns the client's response as an output.

### Syntax

```js
kf.client.showConfirm({ title, content }).then((action) => {
  if (action === "OK") {
    // user clicked ok button
  } else {
    // user clicked cancel button or clicked outside the popup
  }
});
```

### Example

To configure a confirmation dialog for every form submission:

```js
kf.client
  .showConfirm({
    title: "Submit form",
    content: "Are you sure you want to submit the form",
    okText: "Continue",
    cancelText: "Cancel",
  })
  .then(function (result) {
    if (result === "OK") {
      //code block to be executed if the user confirmed
    } else {
      //code block to be executed if the user cancelled
    }
  });
```
