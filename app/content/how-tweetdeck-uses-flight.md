# How TweetDeck uses Flight

- Three types of Component: UI, UI Controller and data.
- Mixins for templating, lifecycle management, showing dropdowns, popping modals and everything in between.
- UI controllers and data components attched to document, sometimes elsewhere
- UI controllers:
    - Tie together many UI components
    - Manage global state that a single component could not
- We nest components using a mixin called `withTeardown`
    - This has now been open-sourced as `withChildComponents`
