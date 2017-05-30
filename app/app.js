// @flow
import styles from './scss/app.scss'
import React from 'react';
import { render } from 'react-dom';

import ChildExemple from './ChildExemple';

const Main = ({ name }: { name: string }): ReactElement => {
    return <div>
        {name}
        <ChildExemple />
    </div>;
}

render(<Main name="John" />, document.getElementById('app'));
