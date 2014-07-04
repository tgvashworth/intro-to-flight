# How TweetDeck uses Flight

- ~15k lines of Flight code
    - ~110 Components
    - ~140 Mixins
- Three types of Component: UI, UI Controller and data.
    - Events are named accordingly: `uiSelectDefaultAccount`, `dataAccount`
    - ~200 `uiX`
    - ~40 `dataX`
- Lots of Mixins!
    - templating
    - lifecycle management
    - showing dropdowns
    - popping modals
    - and everything in between!
- UI controllers and data components attched to document, sometimes elsewhere.
    - They can intercept bubbling events from Components attached further down
- UI controllers:
    - Tie together many UI components
    - Manage global state that a single component could not
- We nest components using a mixin called `withTeardown`
    - This has now been open-sourced as `withChildComponents`. It's [on Github](https://github.com/flightjs/flight-with-child-components).

