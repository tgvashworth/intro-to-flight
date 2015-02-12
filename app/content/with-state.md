# `withState`

- Storing and reacting to change in a component's internal state.
- Super-simple opinion about where to put state
- Very composable

```js
var ToggleButton = flight.component(
    // Use `withState` before your component definition.
    withState,
    function toggleButton() {
        // Define an instance's state at initialize time
        this.initialState({
            active: false
        });

        this.after('initialize', function () {
            // Track changes to the state using advice
            this.after('stateChanged', this.update);

            this.on('click', this.toggle);
        });

        this.toggle = function () {
            // Merge changes into the state
            this.mergeState({
                // Access the current state using `this.state`
                active: !this.state.active
            });
        };

        this.update = function () {
            this.$node.toggleClass('is-active', this.state.active);
        };
    }
);
```
