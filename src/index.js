export default class Dispatcher{
  constructor(){
    this.events = []
  }
  on(scope, name, callback){
    this.events[name].push({scope, callback})
  }
  off(scope, name){
    if(this.events[name]){
      this.events[name].filter(e => e.scope != scope)
    }
  }
  fire(name, data, arrayOfData = false){
    this.events[name].forEach(e => {
      e.callback.call(e.scope, ...data)
    })
  }
}
