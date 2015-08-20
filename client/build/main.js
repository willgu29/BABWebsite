var Email = React.createClass({displayName: "Email",
    getInitialState: function() {
        return {value: 'Email'};
    },
    
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    
    render: function() {
        var value = this.state.value;
        return (
            React.createElement("input", {className: "sign-up", type: "email", value: value, onChange: this.handleChange})
        );
    }
});

var Name = React.createClass({displayName: "Name",
        getInitialState: function() {
        return {value: 'Name'};
    },
    
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    
    render: function() {
        var value = this.state.value;
        return (
            React.createElement("input", {className: "sign-up", type: "text", value: value, onChange: this.handleChange})
        );
    }
});

var Form = React.createClass({displayName: "Form",
    render: function() {
        return (
            React.createElement("form", null, 
                React.createElement(Name, null), 
                React.createElement(Email, null)
            )
        );
    }
});

React.render(
    React.createElement("div", null, 
        React.createElement(Form, null)
    ), document.getElementById('sign-up-form'));