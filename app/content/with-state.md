# `withState`

- Store and react to change in a component's internal state.
- Opinion about where to put state
- Very composable

```js
var ToggleButton = flight.component(
    // Use `withState` before your component definition.
    withState,
    function toggleButton() {
        // Define an instance's initialize-time state
        this.initialState({
            active: false
        });

        this.after('initialize', function () {
            // Track changes to the state using advice
            this.after('stateChanged', this.update);
            this.on('click', this.toggle);
        });

        this.toggle = function () {
            this.mergeState({
                active: !this.state.active
            });
        };

        this.update = function () {
            this.$node.toggleClass('is-active', this.state.active);
        };
    }
);
```
