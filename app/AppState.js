import { snacks } from "./snacks.js"


class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */

  snacks = [
    new snacks('Mountain Sprite', 2.50),
    new snacks('Root Dew', 5.75)
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
