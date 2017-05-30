import styles from './scss/app.scss'
import React from 'react';
import { render } from 'react-dom';

import { Link } from './link';

const Main = ({ name }) => {
    return <div>
        {name}
        <Link />
    </div>;
}

render(<Main name="John" />, document.getElementById('app'));
