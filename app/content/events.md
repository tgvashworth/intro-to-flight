# Events

- Components communicate via events
    - Names like `uiModalShowing` or `dataDefaultAccountChanged`
    - Try to be declarative, not imperative
- This is good for many reasons:
    - *Testable*. The events are the component's interface.
    - *Modular*. A Component does not need to be aware of any other Component - only the events it produces and consumes.
    - *Extensible*. You can add new event consumers to the system easily without touching a producer.
    - *Reusable*. It's simple to hook into an existing event to use it for new purposes.
- Use the document as a global hook

```js
this.on(document, 'somethingImportantChanged', this.reactToIt);
```

- Take advantage of bubbling!
