import React from 'react';

import './stylesheets/main_style.scss';
import main_bg from './images/main_bg_front.png';

import Intro from './components/Intro';
import Profiles from './components/Profiles';
import Skils from './components/Skils'
import Work01 from './components/Work_01';
import Work02 from './components/Work_02';
import Contact from './components/Contact';

import Nav from './components/Nav'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisibleSection: "Intro",
      prevSection: "",
      nextSection: "Profiles"
    }
  }

  // 初回の再レンダーを防ぐ
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    if (this.state.isVisibleSection !== nextState.isVisibleSection) {
        return true;
    }
    return false;
  }

  get sectionTitles() {
    const sections = [...document.querySelectorAll('section')]
    this._titles = sections.map(title => {
      return title.dataset.sectionName
    })

    return this._titles
  }

  obserber() {
    const lazyVisibles = [...document.querySelectorAll("section")];

    const options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.5
    }

    const toggleDisplay = entries => {
      entries.forEach(entry => {
        const isVisible = entry.isIntersecting
        const sectionIndex = this.sectionTitles.indexOf(entry.target.dataset.sectionName)

        if (isVisible) {
          entry.target.classList.add('visible')

          this.setState({
            isVisibleSection: entry.target.dataset.sectionName,
            prevSection: this.sectionTitles[sectionIndex -1] ? this.sectionTitles[sectionIndex -1] : "",
            nextSection: this.sectionTitles[sectionIndex +1] ? this.sectionTitles[sectionIndex +1] : "",
          })

        } else {
          entry.target.classList.remove('visible')
        }
      });
    }

    const obserber = new IntersectionObserver(toggleDisplay, options);

    lazyVisibles.forEach(el => {obserber.observe(el)})
  }

  render() {
    return (
      <div id="section-wrapper" className="section-wrapper">
        <p className={this.state.isVisibleSection === "Intro" ? "greeting" : "greeting fadeOut"}>
          Hello Everyone!!
        </p>
        <div
          className={this.state.isVisibleSection === "Intro" ? "background" : "background scaleUp"}
          style={{backgroundImage: `url(${main_bg})`}}
        >
        </div>
        
        <Intro />
        <Profiles />
        <Skils />
        <Work01 />
        <Work02 />
        <Contact />

        <Nav
          prevPage= {this.state.prevSection}
          thisPage= {this.state.isVisibleSection}
          nextPage= {this.state.nextSection}
          pages = {this.sectionTitles}
        />
      </div>
    )
  }

  componentDidMount() {
    this.obserber();
  }
}

export default App;
