var contentData = {

	"whatIs" : "blah blah",
	"whatDoes" : "blah",
	"beginners" : "Help them",
	"isCoders" : "No.",
	"igrouply" : "A repository of BAB members. Use it to meet new people.",
	"howHelp" : "what"
};


var DescriptionView = React.createClass({displayName: "DescriptionView",

	render: function() {
		return(
			React.createElement("p", null, this.props.content)
		);
	}
});

var FAQWidget = React.createClass({displayName: "FAQWidget",
	getInitialState: function() {
		return ({content: ""});
	},
	handleClick: function(name, e) {
		console.log("Handle click");
		this.setState({content:contentData[name]});
	},

	render: function() {
		return(
			React.createElement("div", null, 
				React.createElement("ul", null, 
					React.createElement("li", {onClick: this.handleClick.bind(this, "whatIs")}, "What is BAB?"), 
					React.createElement("li", null, React.createElement("a", {onClick: this.handleClick.bind(this, "whatDoes")}, "What does BAB do?")), 
					React.createElement("li", null, React.createElement("a", {onClick: this.handleClick.bind(this, "beginners")}, "Does BAB accept beginners?")), 
					React.createElement("li", null, React.createElement("a", {onClick: this.handleClick.bind(this, "isCoders")}, "Is BAB just for coders?")), 
					React.createElement("li", null, React.createElement("a", {onClick: this.handleClick.bind(this, "igrouply")}, "What is iGrouply.com?")), 
					React.createElement("li", null, React.createElement("a", {onClick: this.handleClick.bind(this, "howHelp")}, "How can I help BAB?"))
				), 

				React.createElement(DescriptionView, {content: this.state.content})
			)
		);
	}

})

React.render(React.createElement(FAQWidget, null), document.getElementById("faqWidget"));
