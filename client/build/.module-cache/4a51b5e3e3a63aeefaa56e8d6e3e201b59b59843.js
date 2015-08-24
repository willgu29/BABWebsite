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
					React.createElement("li", {handleClick: this.handleClick, name: "whatIs"}, "What is BAB?"), 
					React.createElement("li", null, "What does BAB do?"), 
					React.createElement("li", null, "Does BAB accept beginners?"), 
					React.createElement("li", null, "Is BAB just for coders?"), 
					React.createElement("li", null, "What is iGrouply.com?"), 
					React.createElement("li", null, "How can I help BAB?")
				), 

				React.createElement(DescriptionView, {content: this.state.content})
			)
		);
	}

})

React.render(React.createElement(FAQWidget, null), document.getElementById("faqWidget"));
