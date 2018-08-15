import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './flow/actions';
import * as TYPES from './flow/types';
import { IStoreState } from '../../store/types';
import { Header } from './components/Header';
import './style.less';

const localImage = require('@/assets/welearnmore.png');
const onLineImage: string = 'http://images.w3crange.com/welearnmore.png';

class HomeComponent extends React.Component<TYPES.IHomePageProps, TYPES.IHomePageState> {
  constructor(props: TYPES.IHomePageProps){
    super(props);
    this.state = {
      name: ''
    };
  }

  actionDataSync = () => {
    this.props.dataSync();
  }

  actionDataAsync = () => {
    this.props.dataAsync('icepy');
  }

  setName = () => {
    this.setState({
      name: 'icepy'
    });
  }

  logReactRouterObj = () => {
    console.log(this.props.history);
  }

  render() {
    const { homePage, global } = this.props;
    const { syncId, asyncId } = homePage;
    const { globalSyncId } = global;
    const { name } = this.state;
    return (
      <div className="container">
        <Header localImageSrc={ localImage } onLineImageSrc={ onLineImage } />
        <div className="buttons">
          <button onClick={ this.actionDataSync }> dataSync action </button>
          <button onClick={ this.actionDataAsync }> dataAsync action </button>
          <button onClick={ this.setName }> setState name </button>
          <button onClick={ this.logReactRouterObj }> react-router object </button>
        </div>
        <div className="contents">
          <p>
            syncId: { syncId }
          </p>
          <p>
            asyncId: { asyncId }
          </p>
          <p>
            setState name: { name }
          </p>
          <p>
            react-router object: open Chrome Dev Tool console.log;
          </p>
          <p>
            global Sync Id: { globalSyncId }
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState ) => {
  const { homePage, global } = state;
  return {
    homePage,
    global
  }
}

export const HomePage = connect(mapStateToProps, actions)(HomeComponent)