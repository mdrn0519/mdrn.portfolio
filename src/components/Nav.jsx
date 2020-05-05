import React from "react";
import { Transition } from 'react-transition-group';

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.smoothScroll = this.smoothScroll.bind(this)

    this.state = {
      prevPage: "Intro",
      navFade: false
    }
  }

  smoothScroll(el) {
    const pages = this.props.pages
    const destIndex = pages.indexOf(el.target.innerText) // prevとnextページのインデックス
    const height = window.innerHeight

    // console.log(destIndex * height);

    const wrapper = document.getElementById("section-wrapper")

    wrapper.scrollTo({
      top: destIndex * height,
      behavior: "smooth"
    })

    return false
  }

  static getDerivedStateFromProps(nextProps,prevstate) {
    if (nextProps.thisPage !== prevstate.prevPage) {
      // console.log(`thisPage : ${nextProps.thisPage}`);
      // console.log(`prevPage : ${prevstate.prevPage}`);

      return {prevPage: nextProps.thisPage, navFade: false}
    }

    return null
  }

  render() {
    if (this.props.thisPage === "Intro") return false;

    const pages = Object.values(this.props);

    pages.pop();

    const pagenames = pages.map((pagename,i) => {
      if(i === 1) {
        return(
          <div key={i} className="nav--pagenames current_page">
            { `— ${pagename}` }
          </div>
        )
      } else {
        return(
          <button key={i} className="nav--pagenames" onClick={this.smoothScroll}>
            { pagename }
          </button>
        )
      }
    })

    return (
      <Transition in={this.state.navFade} timeout={1500}>
        {state => {
          return (
            <div className={`nav letter fade-${state}`}>
              { pagenames }
            </div>
          )
        }}
      </Transition>
    )
  }

  componentDidUpdate() {
    if (this.props.thisPage === "Intro" || this.state.navFade) return false;

    // console.log(`navFade : ${this.state.navFade}`);
    this.setState({
      navFade: true
    })
  }
}

export default Nav
