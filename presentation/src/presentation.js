import React from 'react'
import { Deck, Heading, Slide } from 'spectacle'
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
          <Heading fit textColor="secondary">
            Context?
          </Heading>
        </Slide>
        <CodeSlide
          lang="jsx"
          // textSize="0.8em"
          bgColor="primary"
          code={require('./codesamples/example1.js.sample')}
          ranges={[
            { loc: [0, 21], title: '🔥' },
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
      </Deck>
    )
  }
}
