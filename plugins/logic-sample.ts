import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $logicSample(message: string): void
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $logicSample(message: string): void
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $logicSample(message: string): void
  }
}

const myPlugin: Plugin = (_context, inject) => {
  inject('logicSample', (message: string) => console.log(message))
}

export default myPlugin
