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
        return <div>
            <button className="button-open" onClick={this.toggleOpen}>Modal öffnen</button>
            <div className={className}>
              <div className='content'>
                <button className='close-button' onClick={this.toggleOpen}>X</button>
                <div>
                  <h2>Ich bin das Modal</h2>
                  <div>Man kann mich über das X schließen, aber auch über einen Klick außerhalb</div>
                  <iframe src="https://giphy.com/embed/xT77XWum9yH7zNkFW0" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/9jumpin-wow-nice-well-done-xT77XWum9yH7zNkFW0">via GIPHY</a></p>
                </div>
              </div>
              <button className='background' onClick={this.toggleOpen}></button>
            </div>
          </div>
    }
}

const e = React.createElement;
const domContainer = document.querySelector('#react-modal');
ReactDOM.render(e(Modal), domContainer);
