# Coming soon...

- `withObservableState`, `withObserveState` and `withResources`
    - Propagate state changes through trees of components
    - Uses RxJS for its powerful observable streams
    - Inspired by functional reactive programming

```js
// Data component
this.initialState({
   tweets: [ ... ],
   user: { ... }
});

this.provideResource('appState', this.observableState.shareValue());

// ...

// UI component
this.requestResource('appState', { keys: ['user'] })
    .map(pluck('screenName'))
    .subscribe(this.renderScreenName)
```
