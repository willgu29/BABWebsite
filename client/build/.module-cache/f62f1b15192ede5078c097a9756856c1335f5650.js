var ulStyle = {
    listStyleType: "none",
    margin: "0",
    padding: "0"
}
var liStyle = {
    display: "inline"
}

var liStyleSelected = {
	display: "inline",
	backgroundColor: "green"
}

var BABNavBarItems = React.createClass({displayName: "BABNavBarItems",
	
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
			React.createElement("ul", {style: ulStyle}, 
				React.createElement("li", {style: style1}, React.createElement("a", {href: "/"}, "Home")), 
				React.createElement("li", {style: style2}, React.createElement("a", {href: "/about"}, "About")), 
				React.createElement("li", {style: style3}, React.createElement("a", {href: "/links"}, "Links")), 
				React.createElement("li", {style: style4}, React.createElement("a", {href: "/members"}, "Members")), 
				React.createElement("li", {style: style5}, React.createElement("a", {href: "/faq"}, "FAQ")), 
				React.createElement("li", {style: liStyle}, React.createElement("a", {target: "_blank", href: "http://facebook.com/groups/bruinappbuilders"}, "FB Group")), 
				React.createElement("li", {style: liStyle}, React.createElement("a", {target: "_blank", href: "http://bruinappbuilders.us10.list-manage1.com/subscribe?u=92195b3bc7dd1b9f8be465521&id=5821f555c7"}, "Mailing List")), 
				React.createElement("li", {style: liStyle}, React.createElement("a", {target: "_blank", href: "mailto:info@bruinappbuilders.com"}, "Contact"))

			)
		);
	}

});

var BABHeader = React.createClass({displayName: "BABHeader",

	render: function() {
		return(
			React.createElement("div", {id: "navBar"}, 
				React.createElement("img", {src: "/public/images/logo1.png"}), 
				React.createElement(BABNavBarItems, {currentURL: this.props.currentURL})
			)
		);
	}
});


var pathName = window.location.pathname;

React.render(React.createElement(BABHeader, {currentURL: pathName}), document.getElementById("babNavBar"));