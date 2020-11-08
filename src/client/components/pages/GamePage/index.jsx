import { connect } from 'react-redux';
import { GamePage } from './GamePage';

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(GamePage);
