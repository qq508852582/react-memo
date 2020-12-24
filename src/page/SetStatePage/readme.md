# setState
* setState performs as async in React life cycle
React 

```js
                <button onClick={() => {
                    console.log('print state before setState:', this.state.value)
                    this.setState(state => ({value: state.value + 1}),
                        () => {
                            console.log('print state in setState callback:', this.state.value)
                        })
                    console.log('print state after setState:', this.state.value)
                }}>add 1
                </button>
```

* setState performs as sync out of  React life cycle,eg in Promise/setTimeout
```js
                <button onClick={() => {
                    setTimeout(() => {
                        console.log('print state before setState:', this.state.value)
                        this.setState(state => ({value: state.value + 1}),
                            () => {
                                console.log('print state in setState callback:', this.state.value)
                            })
                        console.log('print state after setState:', this.state.value)
                    })
                }}>add 1 in setTimeout
                </button>
                <button onClick={() => {
                    const p = new Promise(resolve => resolve())
                    p.then(() => {
                        console.log('print state before setState:', this.state.value)
                        this.setState(state => ({value: state.value + 1}),
                            () => {
                                console.log('print state in setState callback:', this.state.value)
                            })
                        console.log('print state after setState:', this.state.value)
                    })
                }}>add 1 in Promise
                </button>
```
