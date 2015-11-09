export class Dispatcher{
  constructor(){
    this.events = []
  }
  on(name, callback, scope = this){
    if(!this.events[name])
      this.events[name] = []
    this.events[name].push({scope, callback})
  }
  off(scope, name){
    if(this.events[name]){
      this.events[name].filter(e => e.scope != scope)
    }
  }
  fire(name, data){
    this.events[name].forEach(e => {
      e.callback.call(e.scope, data)
    })
  }
}
