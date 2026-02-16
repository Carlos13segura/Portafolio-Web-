import { onMounted, onUnmounted, type Ref } from 'vue'

export function useIntersectionObserver(
  target: Ref<HTMLElement | null>,
  callback: () => void,
  options: IntersectionObserverInit = { threshold: 0.1 },
) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (target.value) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback()
            if (observer) observer.disconnect()
          }
        })
      }, options)
      observer.observe(target.value)
    }
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
