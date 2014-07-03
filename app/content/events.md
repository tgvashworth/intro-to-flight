# Events

- Components communicate via events
- This is good for many reasons:
    - *Testable*. The events are the interface.
    - *Modular*. A Component does not need to be aware of any other Component - only the events it produces and consumes.
    - *Extensible*. You can add new event consumers to the system easily without touching the producer.
    - *Reusable*. It's simple to hook into an existing event to use it for new purposes.
- Use the document as a global hook
- Take advantage of bubbling!
