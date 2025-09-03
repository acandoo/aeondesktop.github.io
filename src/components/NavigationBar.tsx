import { type Component, type JSX } from 'solid-js'
import { createScrollPosition } from '@solid-primitives/scroll'
import './NavigationBar.css'

const NavigationBar: Component<{ children: JSX.Element }> = (props) => {
  const windowScroll = createScrollPosition()
  const isScrolled = () => windowScroll.y > 0
  return (
    <header
      classList={{
        header: true,
        scrolled: isScrolled(),
        notscrolled: !isScrolled()
      }}
    >
      <div class="header-container">
        <a href="/" class="header-logo" aria-label="Aeon logo">
          {props.children}
        </a>
        <nav class="nav">
          <ul>
            <li>
              <a href="/#features">Features</a>
            </li>
            <li>
              <a href="/#who-is-aeon-for">Who is Aeon For?</a>
            </li>
            <li>
              <a href="/#community">Community</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavigationBar
