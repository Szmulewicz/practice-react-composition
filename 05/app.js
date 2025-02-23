import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }
    setText = (value) => {
        this.setState({
            text: value
        })
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea handleChange={this.setText} content={text} />
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />)