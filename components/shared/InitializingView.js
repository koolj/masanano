import React, { Component } from 'react'
import { connect } from 'react-redux';
import raf from 'raf';
import Console from './Console';

class InitializingView extends Component {

  constructor(props) {
    super(props);
    this.estimatedDuration = 30;
    this.timeStarted = null;
    this.updateProgress = this.updateProgress.bind(this);
    this.state = {
      showConsole: false
    }
  }

  updateProgress() {
    // Time since started
    const timeSinceBeg = (new Date().getTime() - this.timeStarted) / 1000
    if(this.progressBar) {
      let progress = Math.min(timeSinceBeg / this.estimatedDuration, 1)
      this.progressBar.style = `transform:scaleX(${progress});`
    }
    raf(this.updateProgress);
  }

  componentDidMount() {
    this.timeStarted = new Date().getTime();
    this.updateProgress();
  }

  render () {
    return (
      <div className="initializing-view pt-20 pb-20 pr-12 pl-12">
        {!this.props.requestedFileRecording &&
          <div>
            <div style = "position: relative;display: flex;justify-content:space-between;">
                <img src="/static/ml_s2.png" alt="logo" style="max-width: 100%" />
            </div>
            <h2 className="text-grey text-3xl font-bold">Initializing Miraway MasaNano</h2>
          </div>
        }
        {this.props.requestedFileRecording &&
          <h2 className="text-white text-3xl font-bold">Restarting to process video file {this.props.fileName.split("/").pop()}</h2>
        }
        <div className="w-1/5 mt-5 h-5 progress-bar rounded overflow-hidden">
          <div className="shadow w-full h-full bg-light">
            <div
              className="bg-dark py-2 progress-bar-content"
              ref={el => (this.progressBar = el)}
            >
            </div>
          </div>
        </div>
        {!this.state.showConsole &&
          <button className="btn btn-secondary mt-10 rounded" onClick={() => this.setState({showConsole: true})}>
            Show details
          </button>
        }
        {this.state.showConsole &&
          <div className="mt-10">
            <a
              className="btn btn-light rounded cursor-pointer"
              onClick={() => this.setState({showConsole: false})}
            >
              Hide details
            </a>
            <a
              className="ml-2 btn btn-secondary rounded"
              target="_blank"
              href="/console"
            >
              Download logs
            </a>
          </div>
        }
        {this.state.showConsole &&
          <div className="console mt-10">
            <Console />
          </div>
        }
        <style jsx>{`
          .initializing-view {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background-color: white;
          }

          .console {
            width: 100%;
            flex: 1;
          }

          .progress-bar {
            min-width: 200px;
            position: relative;
          }

          .progress-bar-content {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform-origin: 0 0;
            transform:scaleX(0);
          }
        `}</style>
      </div>
    )
  }
}

export default connect((state) => {

  return {
    fileName: state.app.getIn(['config','VIDEO_INPUTS_PARAMS','file'])
  }
})(InitializingView)
