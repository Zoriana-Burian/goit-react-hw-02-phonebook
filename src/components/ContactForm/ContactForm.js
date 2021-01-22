import React from 'react';

class ContactForm extends React.Component {
    state = {
     name: '',
     number: ''
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState( {[name]: value,})
    }

    handleSubmit = e => {
        e.preventDefault();
        
        this.props.onSubmit({ ...this.state })

        this.setState({ name: '', number: '' });
     }

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>Name
                <input
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}> 
                </input>
            </label>
            <label>Number
                <input
                    type='text'
                    name='number'
                    value={this.state.number} onChange={this.handleChange}> 
                </input>
            </label>
            <button type='submit'>Add contact</button>
        </form>
    )
    }
}

export default ContactForm;