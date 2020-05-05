import React from 'react';

class Intro extends React.Component {
  constructor(props) {
    super(props)

    this.smoothScroll = this.smoothScroll.bind(this)
  }

  smoothScroll() {
    const height = window.innerHeight
    const wrapper = document.getElementById("section-wrapper")

    wrapper.scrollTo({
      top: height,
      behavior: "smooth"
    })
  }

  render() {    
    return(
      <section className="intro" data-section-name="Intro">
        <h1 className="intro--disc letter">mdrn's portfolio site</h1>
        <div className="btn scroll_btn">
          <button className="scroll_btn__inner" onClick={this.smoothScroll}><i className="fas fa-angle-double-down fas__animation" />Scroll plz!!</button>
        </div>
      </section>
    )
  }
}

export default Intro
