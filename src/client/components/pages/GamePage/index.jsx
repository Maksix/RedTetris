import { GamePage } from './GamePage';
import { joinRoom } from '../../../actions/joinRoomAction';

<<<<<<< HEAD
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

const mapDispatchToProps = {
  joinRoomAction: joinRoom,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
=======
export default GamePage;
>>>>>>> 178d7670c39d6cf76e61bc77efdb7af844d3a989
