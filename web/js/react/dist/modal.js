'use strict';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    var className = 'modal';
    className += this.state.isOpen ? ' open' : '';
    return React.createElement("div", null, React.createElement("button", {
      className: "button-open",
      onClick: this.toggleOpen
    }, "Modal \xF6ffnen"), React.createElement("div", {
      className: className
    }, React.createElement("div", {
      className: "content"
    }, React.createElement("button", {
      className: "close-button",
      onClick: this.toggleOpen
    }, "X"), React.createElement("div", null, React.createElement("h2", null, "Ich bin das Modal"), React.createElement("div", null, "Man kann mich \xFCber das X schlie\xDFen, aber auch \xFCber einen Klick au\xDFerhalb"), React.createElement("iframe", {
      src: "https://giphy.com/embed/xT77XWum9yH7zNkFW0",
      width: "480",
      height: "270",
      frameBorder: "0",
      className: "giphy-embed",
      allowFullScreen: true
    }), React.createElement("p", null, React.createElement("a", {
      href: "https://giphy.com/gifs/9jumpin-wow-nice-well-done-xT77XWum9yH7zNkFW0"
    }, "via GIPHY")))), React.createElement("button", {
      className: "background",
      onClick: this.toggleOpen
    })));
  }

}

const e = React.createElement;
const domContainer = document.querySelector('#react-modal');
ReactDOM.render(e(Modal), domContainer);