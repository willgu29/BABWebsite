var Email = React.createClass({
    getInitialState: function() {
        return {value: 'Email'};
    },
    
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    
    render: function() {
        var value = this.state.value;
        return (
            <input className="sign-up" type="email" value={value} onChange={this.handleChange} />
        );
    }
});

var Name = React.createClass({
        getInitialState: function() {
        return {value: 'Name'};
    },
    
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    
    render: function() {
        var value = this.state.value;
        return (
            <input className="sign-up" type="text" value={value} onChange={this.handleChange} />
        );
    }
});

var Form = React.createClass({
    render: function() {
        return (
            <form>
                <Name />
                <Email />
            </form>
        );
    }
});

React.render(
    <div>
        <Form />
    </div>, document.getElementById('sign-up-form'));