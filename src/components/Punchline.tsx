import { createSignal } from 'solid-js'
import './Punchline.css'

const Punchline = () => {
  const [punchlineNum, setPunchlineNum] = createSignal(0)
  const punchlines = [
    // These can be adjusted as needed
    'get stuff done.',
    'just work, every time.',
    'work reliably, every day.',
    'upgrade without worries.',
    'stay current without compromise.',
    'stay secure and up to date.',
    'test the future, today.'
  ]

  const [className, setClassName] = createSignal<'text-show' | 'text-fade'>(
    'text-show'
  )

  const changePunchline = () => {
    setClassName('text-fade')
    setTimeout(() => {
      setPunchlineNum((prev) => (prev + 1) % punchlines.length)
      setClassName('text-show')
    }, 200)
  }

  setInterval(changePunchline, 7000) // Change punchline every 7 seconds

  return (
    <h1 class="jumbotron-title">
      Aeon is the Linux desktop to{' '}
      <strong class={className()}>{punchlines[punchlineNum()]}</strong>
    </h1>
  )
}
export default Punchline
