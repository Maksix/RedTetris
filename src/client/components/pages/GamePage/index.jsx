import { connect } from 'react-redux';
import { GamePage } from './GamePage';
import { joinRoom } from '../../../actions/joinRoomAction';

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

const mapDispatchToProps = {
  joinRoomAction: joinRoom,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
