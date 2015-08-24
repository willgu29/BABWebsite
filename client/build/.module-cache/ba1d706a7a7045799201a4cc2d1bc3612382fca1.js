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
		alert(name);
	},

	render: function() {
		return(
			React.createElement("div", null, 
				React.createElement("ul", null, 
					React.createElement("li", {onClick: this.handleClick, name: "whatIs"}, "What is BAB?"), 
					React.createElement("li", null, React.createElement("a", {onClick: this.handleClick}, "What does BAB do?")), 
					React.createElement("li", null, React.createElement("a", {onClick: this.handleClick}, "Does BAB accept beginners?")), 
					React.createElement("li", null, React.createElement("a", {onClick: this.handleClick}, "Is BAB just for coders?")), 
					React.createElement("li", null, React.createElement("a", {onClick: this.handleClick}, "What is iGrouply.com?")), 
					React.createElement("li", null, React.createElement("a", {onClick: this.handleClick}, "How can I help BAB?"))
				), 

				React.createElement(DescriptionView, {content: this.state.content})
			)
		);
	}

})

React.render(React.createElement(FAQWidget, null), document.getElementById("faqWidget"));
