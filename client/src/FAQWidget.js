/*var whatIsContent = "BAB is a community centered around helping people
learn practical skills and using them to create products and services. /n We
welcome all skills levels and encourage bringing value to the  people and
communities around you. /n Coders, graphic designers, leaders,  dancers,
artists, are all are welcome to participate in the expression of humanity."
*/
var whatIs = "BAB is a community centered around helping people learn practical skills \
and using them to create products and services. \
\
We welcome all skills levels and types of learners, whether you're a coder, graphic designer, or artist.\
 As long as you're interested in making mobile and web apps and want to create cool things, you're welcome."

var whatDoes = "BAB is a community that strives to help you towards your goals. We do this by \
offering events (iOS workshops, Graphic Design workshops), mentorship, and opportunities (work days, socials, etc.) to meet people who can help guide you in the right \
direction. Join our mailing list to stay updated with opportunities!";
var whenDoes = "Join our mailing list and check our FB group for event reminders and details!"
var beginners = "Absolutely. The only requirements are to be proactive, share generously, and \
express yourself.";
var isCoders = "No. BAB is for everyone who wants to learn, to do, and create.";
var igrouply = "iGrouply is a BAB made website that aims to help people meet other interesting \
people easier. The site is a list of BAB members that displays their skills and other information. \
Sign up to be listed on the site and view members!";
var howHelp = "Be proactive. Share generously. Express yourself. If you'd like to help with \
more (event planning, publicity, etc.) let Will Gu know!";
var canI = "Yes! Contact Will Gu with event/program proposals and he'd love to help you out.";
var history = "BAB was founded for the purpose of bringing students together to create meaningful \
relationships with each other. We believe that by creating a strong community, that community will \
then go forward and help society by creating meaningful products and services.  What drives us is \
knowing we're making a difference in the lives of others and our own. We do things a bit differently.\
 And we hope you will too.";


var contentData = {

	"whatIs" : whatIs,
	"whatDoes" : whatDoes,
	"whenDoes" : whenDoes,
	"beginners" : beginners,
	"isCoders" : isCoders,
	"igrouply" : igrouply,
	"howHelp" : howHelp,
	"canI" : canI,
	"history" : history
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
					<li><a onClick={this.handleClick.bind(this, "whenDoes")}>When does BAB meet?</a></li>
					<li><a onClick={this.handleClick.bind(this, "beginners")}>Does BAB accept beginners?</a></li>
					<li><a onClick={this.handleClick.bind(this, "isCoders")}>Is BAB just for coders?</a></li>
					<li><a onClick={this.handleClick.bind(this, "igrouply")}>What is iGrouply.com?</a></li>
					<li><a onClick={this.handleClick.bind(this, "howHelp")}>How can I help BAB?</a></li>
					<li><a onClick={this.handleClick.bind(this, "canI")}>Can I host events and programs for BAB?</a></li>
					<li><a onClick={this.handleClick.bind(this, "history")}>Why was BAB founded?</a></li>

				</ul>

				<DescriptionView content={this.state.content} />
			</div>
		);
	}

})

React.render(<FAQWidget />, document.getElementById("faqWidget"));
