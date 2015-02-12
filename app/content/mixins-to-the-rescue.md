# Mixins to the resuce

- `withChildComponents`
    - Nest components, automatically managing component lifecycles to avoid memory leaks and hard-to-maintain code
    - Wrote a blog post about it ([blog.twitter.com/2014/celebrating-over-a-year-of-flightjs][year-of-flight])
    - Open source


- `withState`
    - React-like API for managing and reacting to changes in component state
    - Radically simplifies components by providing an centralized place to manage state
    - Open source


- `withObservableState`, `withObserveState` and `withResources`
    - Propagate state changes through trees of components
    - Uses RxJS for its powerful observable streams
    - Inspired by functional reactive programming
    - Nearly open source (ironing out the kinks)

[with-child-components]: //github.com/flightjs/flight-with-child-components
[with-state]: //github.com/flightjs/flight-with-state
[year-of-flight]: //blog.twitter.com/2014/celebrating-over-a-year-of-flightjs
