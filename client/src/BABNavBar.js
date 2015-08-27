var ulStyle = {
    display: "inline",
    listStyleType: "none",
    margin: "0",
    padding: "0"
}
var liStyle = {
    display: "inline",
    padding: "15",
    color: "grey"
}

var liStyleSelected = {
	padding: "15",
	display: "inline",
	color: "black"


}

var aStyle = {
	color: "inherit"
}

var BABNavBarItems = React.createClass({
	
	render: function() {
		var style1 = liStyle;
		var style2 = liStyle;
		var style3 = liStyle;
		var style4 = liStyle;
		var style5 = liStyle;
		if (this.props.currentURL == "/") {
			style1 = liStyleSelected;
		} else if (this.props.currentURL == "/about") {
			style2 = liStyleSelected;
		} else if (this.props.currentURL == "/links") {
			style3 = liStyleSelected;
		} else if (this.props.currentURL == "/members") {
			style4 = liStyleSelected;
		} else if (this.props.currentURL == "/faq") {
			style5 = liStyleSelected;
		}
		return(
			<ul style={ulStyle}>
				<li style={style1}><a style={aStyle} href="/">Home</a></li>
				<li style={style2}><a style={aStyle} href="/about">About</a></li>
				<li style={style4}><a style={aStyle} href="/members">Members</a></li>
				<li style={style5}><a style={aStyle} href="/faq">FAQ</a></li>
				<li style={liStyle}><a style={aStyle} target="_blank" href="http://facebook.com/groups/bruinappbuilders">FB Group</a></li>
				<li style={liStyle}><a style={aStyle} target="_blank" href="http://bruinappbuilders.us10.list-manage1.com/subscribe?u=92195b3bc7dd1b9f8be465521&id=5821f555c7">Mailing List</a></li>
				<li style={liStyle}><a style={aStyle} target="_blank" href="mailto:info@bruinappbuilders.com">Contact</a></li>

			</ul>
		);
	}

});
				//<li style={style3}><a href="/links">Links</a></li>
				//Fun facts link: 

var BABHeader = React.createClass({

	render: function() {
		return(
			<header id="navBar">
				<img width="100" src="/public/images/logo2.png" />
				<BABNavBarItems currentURL={this.props.currentURL} />
			</header>
		);
	}
});


var pathName = window.location.pathname;

React.render(<BABHeader currentURL={pathName} />, document.getElementById("babNavBar"));
