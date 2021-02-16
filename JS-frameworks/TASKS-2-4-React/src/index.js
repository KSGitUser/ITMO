import React, { Component as C } from 'react';
import { render as r } from 'react-dom';
import Degs from "./components/Degs"


class App extends C {
    constructor() {
        super()
        this.state = {
            exps: 5
        }
    }

    click() {
        this.setState(({ exps }) => ({ exps: +exps + 1 }));
    }

    change(v) {
        this.setState(({ exps }) => ({ exps: v }));
    }

    render() {
        return (<div>
            <button onClick={() => this.click()}>Add exp</button>
            <input value={this.state.exps} onChange={({ target: { value: v } }) => this.change(v)} />
            <Degs a={Array.from({ length: this.state.exps }, (v, i) => 10 + i)} />
        </div>)
    }

}
r(<App />, document.querySelector('.cont'));