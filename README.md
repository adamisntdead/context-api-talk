# Context API Lightning Talk

> Slides from my lightning talk at ReactJS Dublin ⚡

For the code sample, check out [this repo](https://github.com/adamisntdead/context-api-demo)

![Code Sample](https://i.imgur.com/9XuymAK.png)

## So What's This Context Thing?

Context is a way to provide data to
the component tree, without having to
pass it down manually using props (prop drilling).

> With context you can share values without explicitly using props.

## So When Do I Use This Context Thing?

Context is best used to share data that is global for a tree of components.
Things like themes, current user ect.

Also the demo here is very simple, and is actually somewhere where you wouldn't use context.
You should only use it when you need to access down multiple levels.

> Use context to share data that needs to be accessed down multiple levels.

## So How Do I Use This Context Thing?

First, you should check out the [docs](https://reactjs.org/docs/context.html), most of this has come from there!

Then, check out this repository, it should be a fairly good example of the basic usage!

One thing to keep in mind is (and this is done in the demo), context can sometimes unintentionally cause a render in the consumers, when the providers parent re-renders.
The docs gives this example, which will re-render every time provider re-renders:

```js
const Context = React.createContext()

class Parent extends React.Component {
  render() {
    return (
      <Context.Provider value={{ name: 'Sarah' }}>
        <Child />
      </Context.Provider>
    )
  }
}
```

The children using consumers will re-render because a new object `{ name: 'Sarah' }` is created each time.
This is avoided by moving the value to the parents state.

```js
const Context = React.createContext()

class Parent extends React.Component {
  state = {
    value: { name: 'Sarah' }
  }

  render() {
    return (
      <Context.Provider value={this.state.value}>
        <Child />
      </Context.Provider>
    )
  }
}
```

## Goodbye Redux?

Context is designed for passing data down deeply nested components.
If you only use redux to avoid prop drilling, you probably didn't need redux.
Redux also has things like middlewear, great devtools, a large ecosystem, it provides features that context doesn't.

If you use redux to do things like:

- State persistance/hydration
- Automated bug reports
- Passing actions across things like websockets
- Undo functionality
- Alternate UIs

You should probably keep using redux.
That being said, you don't need to stop using a redux like pattern!

You can do things like actions and reducers and still use context! Also, if you need a more lightweight way to do state management thats a little bit higher level, have a look at [unstated](https://github.com/jamiebuilds/unstated)

> Context isn't a redux killer, it just replaces a small part of it (and what do you think redux uses internally!)

## View The Slides

First, you have to install the dependencies with `yarn`.
Then, you can run the start script using `yarn present`
