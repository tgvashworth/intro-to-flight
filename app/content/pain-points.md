# Pain points

- **Nesting components**
    - TweetDeck is a single-page app, so long term lifecyle management is important
    - We were building complex UI without a simple, automatic to tear them down


- **State management**
    - Components need internal state, but there's no official way to manage it
    - `this.someStateThing` or, worse, `this.attr.anotherStateThing`


- **State sharing**
    - Flowing data around with fire-and-forget events *sucks*
    - State should be kept at the highest possible level and not duplicated
    - UI components should just be a view onto state from a parent


- **No opinions**
    - Good design decision of Flight core
    - Sorely lacking follow-up
