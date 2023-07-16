import gsap from 'gsap'
import { useTransitionComposable } from './transition'

const { toggleTransitionComplete } = useTransitionComposable()

const pageTransition = {
  name: 'page-transiton',
  mode: 'out-in',
  onEnter: (el, done) => {
    gsap.set(el, { autoAlpha: 0, xPercent: 100 })
    gsap
      .timeline({
        paused: true,
        onComplete() {
          toggleTransitionComplete(true)
          done()
        },
      })
      .to(el, { xPercent: 0, duration: 0.3 })
      .to(el, { autoAlpha: 1, duration: 0.5 })
      .play()
  },
  onLeave: (el, done) => {
    toggleTransitionComplete(false)
    gsap
      .timeline({ paused: true, onComplete: done })
      .to(el, { xPercent: 100, duration: 0.3 })
      .to(el, { autoAlpha: 0, duration: 0.5 })
      .play()
  },
}

export default pageTransition
