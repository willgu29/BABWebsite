/*var whatIsContent = "BAB is a community centered around helping people
learn practical skills and using them to create products and services. /n We
welcome all skills levels and encourage bringing value to the  people and
communities around you. /n Coders, graphic designers, leaders,  dancers,
artists, are all are welcome to participate in the expression of humanity."
*/
var whatIs = "BAB is a community centered around helping people learn practical skills \
and using them to create products and services. \
\
We welcome all skills levels and encourage bringing value to the people and communities around you.\
\
Coders, graphic designers, leaders, dancers, artists, are all are welcome to participate \
in the expression of humanity.";
var whatDoes = "BAB is a community and resource to help you towards your goals. We do this by \
offering events, mentorship, and opportunities to meet people who can help guide you in the right \
direction. Ask individual members what they're up to!";
var beginners = "Absolutely. The only requirements are to be proactive, share generously, and \
express yourself.";
var isCoders = "No. BAB is for everyone who wants to learn, to do, and create.";
var igrouply = "iGrouply is a BAB made website that aims to help people meet other interesting \
people easier. The site is a list of BAB members that displays their skills and other information. \
Sign up to be listed on the site and view members!";
var howHelp = "Be proactive. Share generously. Express yourself. If you'd like to help with \
more (event planning, publicity, etc.) let Will Gu know!";




var contentData = {

	"whatIs" : whatIs,
	"whatDoes" : whatDoes,
	"beginners" : beginners,
	"isCoders" : isCoders,
	"igrouply" : igrouply,
	"howHelp" : howHelp

};


var DescriptionView = React.createClass({

	render: function() {
		return(
			<p>{this.props.content}</p>
		);
	}
});

var FAQWidget = React.createClass({
	getInitialState: function() {
		return ({content: ""});
	},
	handleClick: function(name, e) {
		console.log("Handle click");
		this.setState({content:contentData[name]});
	},

	render: function() {
		return(
			<div>
				<ul>
					<li><a onClick={this.handleClick.bind(this, "whatIs")} >What is BAB?</a></li>
					<li><a onClick={this.handleClick.bind(this, "whatDoes")}>What does BAB do?</a></li>
					<li><a onClick={this.handleClick.bind(this, "beginners")}>Does BAB accept beginners?</a></li>
					<li><a onClick={this.handleClick.bind(this, "isCoders")}>Is BAB just for coders?</a></li>
					<li><a onClick={this.handleClick.bind(this, "igrouply")}>What is iGrouply.com?</a></li>
					<li><a onClick={this.handleClick.bind(this, "howHelp")}>How can I help BAB?</a></li>
				</ul>

				<DescriptionView content={this.state.content} />
			</div>
		);
	}

})

React.render(<FAQWidget />, document.getElementById("faqWidget"));