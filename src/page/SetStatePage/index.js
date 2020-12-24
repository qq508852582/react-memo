import React, {Component} from 'react';


export default class extends Component {

    state = {
        value: 1
    }

    render() {

        return (
            <div>
                <div>
                    value = {this.state.value}
                </div>
                <button onClick={() => {
                    console.log('print state before setState:', this.state.value)
                    this.setState(state => ({value: state.value + 1}),
                        () => {
                            console.log('print state in setState callback:', this.state.value)
                        })
                    console.log('print state after setState:', this.state.value)
                }}>add 1
                </button>
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
            </div>
        )
    }
}