import React from 'react'
import { Deck, Heading, Slide, Notes } from 'spectacle'
import CodeSlide from 'spectacle-code-slide/src/CodeSlide'
import theme from './theme'

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        progress="none"
        theme={theme}
      >
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Context
          </Heading>
          <Heading size={3} fit lineHeight={1} textColor="comment">
            ReactJS Dublin{' '}
            <span role="img" aria-label="Lightning">
              ⚡️
            </span>
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading textColor="secondary">What Is It?</Heading>
          <Notes>
            <ul>
              <li>Provide data and state down then component tree</li>
              <li>Don't have to manually do it through props</li>
              <li>
                Avoid <emph>Prop Drilling</emph>
              </li>
              <li>Available 16.3, pollyfillable from 16.0</li>
            </ul>
            <blockquote>
              With context you can share values without explicitly using props.
            </blockquote>
          </Notes>
        </Slide>
        <CodeSlide
          lang="jsx"
          // textSize="0.8em"
          bgColor="primary"
          code={require('./codesamples/context.js.sample')}
          ranges={[
            { loc: [0, 21], title: 'How Do I Use It?' },
            {
              loc: [0, 1],
              note: 'Importing `createContext` along with the normal stuff'
            },
            {
              loc: [2, 4],
              note:
                'Calling `createContext`, which returns a Consumer and Provider'
            }
          ]}
        />
        <Slide bgColor="palevioletred">
          <Heading textColor="white">Hello World!</Heading>
          <Notes>
            <p>
              Let's take a look at this sample app - it's just a heading with
              some text
            </p>
            <p>Let's add some context to it</p>
          </Notes>
        </Slide>
        <CodeSlide
          lang="jsx"
          // textSize="0.8em"
          bgColor="primary"
          code={require('./codesamples/app.js.sample')}
          ranges={[
            { loc: [0, 12], title: 'Sample App Source Code' },
            { loc: [4, 9] }
          ]}
        />
        <CodeSlide
          lang="jsx"
          // textSize="0.8em"
          bgColor="primary"
          code={require('./codesamples/context.js.sample')}
          ranges={[
            { loc: [0, 0], title: 'The Provider' },
            { loc: [5, 18] },
            {
              loc: [12, 13],
              note: 'Here we use the provider from `createContext`'
            },
            {
              loc: [12, 15],
              note:
                'Then we pass in all child components, providing data to them'
            },
            {
              loc: [6, 9],
              note:
                'We need to provide data, this is coming from the state. The reason for using state is in the docs'
            }
          ]}
        />
        <CodeSlide
          lang="jsx"
          // textSize="0.8em"
          bgColor="primary"
          code={require('./codesamples/app-with-provider.js.sample')}
          ranges={[
            { loc: [0, 0], title: 'Add The Provider' },
            { loc: [1, 2], note: 'Importing the Provider we just created' },
            {
              loc: [6, 9],
              note:
                'Wrapping our app with the Provider, now the state of that provider component is available to all child components'
            }
          ]}
        />
        <Slide bgColor="primary">
          <Heading textColor="secondary">
            How Do You Access The Provided Data?
          </Heading>
          <Notes>
            <ul>
              <li>So how do you access this provided data</li>
              <li>
                Done (as you will see) with the 'function as a child' or render
                props pattern
              </li>
            </ul>
          </Notes>
        </Slide>
        <CodeSlide
          lang="jsx"
          // textSize="0.8em"
          bgColor="primary"
          code={require('./codesamples/context.js.sample')}
          ranges={[
            {
              loc: [19, 20],
              note:
                'First we export the Consumer from the `createContext` function'
            }
          ]}
        />
        <CodeSlide
          lang="jsx"
          // textSize="0.8em"
          bgColor="primary"
          code={require('./codesamples/app-with-consumer.js.sample')}
          ranges={[
            {
              loc: [1, 2],
              note: 'Then we import `Consumer`'
            },
            { loc: [7, 12], note: 'In some child, we use `Consumer`' },
            { loc: [8, 9], note: 'This gives a render prop with the data!' },
            { loc: [8, 11], note: 'We can then go use this data' }
          ]}
        />
        <CodeSlide
          lang="jsx"
          // textSize="0.8em"
          bgColor="primary"
          code={require('./codesamples/context.js.sample')}
          ranges={[
            {
              loc: [6, 9],
              note: 'Remember that data we provided?'
            }
          ]}
        />
        <Slide bgColor="palevioletred">
          <Heading textColor="white">Hello ReactJS Dublin Members!</Heading>
          <Notes>
            <p>Thats now in our app!</p>
          </Notes>
        </Slide>
        <Slide bgColor="primary">
          <Heading textColor="secondary">That's The Context API!</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading textColor="secondary">When Should I Use It?</Heading>
          <Notes>
            <ul>
              <li>
                Best used to share data/state global for a tree of components
              </li>
              <li>
                Things like themes, the current user, I am using it for forms
              </li>
              <li>
                The demo here is very simple, and actually a great example of
                where not to use it
              </li>
              <li>
                You should only really use it when you need to give data down
                multiple levels
              </li>
            </ul>

            <blockquote>
              Use context to share data that needs to be accessed down multiple
              levels.
            </blockquote>
          </Notes>
        </Slide>
        <Slide bgColor="primary">
          <Heading textColor="secondary">Goodbye Redux?</Heading>
          <Notes>
            <p>
              Context is designed for passing data down deeply nested
              components. If you only use redux to avoid prop drilling, you
              probably didn't need redux. Redux also has things like middleware,
              great devtools, a large ecosystem, it provides features that
              context doesn't.
            </p>
            <p>
              Context is designed for passing data down deeply nested
              components. If you only use redux to avoid prop drilling, you
              probably didn't need redux. Redux also has things like middleware,
              great devtools, a large ecosystem, it provides features that
              context doesn't.
            </p>
            <ul>
              <li>State persistance/hydration</li>
              <li>Automated bug reports</li>
              <li>Passing actions across things like websockets</li>
              <li>Undo functionality</li>
              <li>Alternate UIs</li>
            </ul>
            <p>
              You should probably keep using redux. That being said, you don't
              need to stop using a redux like pattern!
            </p>
            <p>
              You can do things like actions and reducers and still use context!
              Also, if you need a more lightweight way to do state management
              thats a little bit higher level, have a look at unstated
            </p>
            <blockquote>
              Context isn't a redux killer, it just replaces a small part of it
              (and what do you think redux uses internally!)
            </blockquote>
          </Notes>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Thank You!
          </Heading>
          <Heading size={3} fit lineHeight={1} textColor="comment">
            @adamisntdead
          </Heading>
        </Slide>
      </Deck>
    )
  }
}
