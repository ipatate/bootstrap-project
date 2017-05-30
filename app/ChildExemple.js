// @flow
import React, { Component } from 'react';

class ChildExemple extends Component {
    state: { count: number };
    sub;
    add;
    myfunction;
    constructor(props: {}) {
      super(props);
      this.state = {
        count: 0
      };
      this.sub = this.sub.bind(this);
      this.add = this.add.bind(this);
      this.myfunction = this.myfunction.bind(this);
    }
    add(e: Event) {
      e.preventDefault();
      const n = this.state.count + 1;
      this.myfunction(n);
    }
    sub(e: Event) {
      e.preventDefault();
      const n = this.state.count - 1;
      this.myfunction(n);
    }
    myfunction(num: number): void {
      if (num < 0) {
        return this.setState({ count: 0 });
      }
      return this.setState({ count: num });
    }
    render(): ReactElement {
      return (
        <div>
          <button onClick={this.sub}>{'-'}</button>
            <strong>{this.state.count}</strong>
          <button onClick={this.add}>{'+'}</button>
        </div>);
    }
}

export default ChildExemple;
