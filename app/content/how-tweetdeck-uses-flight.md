# How TweetDeck uses Flight

- 20k+ lines of Flight code
    - 120+ Components
    - Even more mixins
- Informally, three kinds of component: UI, UI controller and data.
    - Events are named accordingly: `uiSelectDefaultAccount`, `dataAccount`
- Lots of Mixins!
    - templating
    - lifecycle management
    - showing dropdowns
    - popping modals
    - state management
    - and everything in between!
- UI controllers and data components attched to document, sometimes elsewhere.
    - They can intercept bubbling events from Components attached further down
- UI controllers
    - Tie together many UI components
    - Manage higher-level flow that a single component could not
