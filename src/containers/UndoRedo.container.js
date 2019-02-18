import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import UndoRedoButtons from './../components/elements/UndoRedoButtons';

const mapStateToProps = state => {
  return {
    canUndo: true,
    canRedo: true,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo()),
  }
}

const UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedoButtons);

export default UndoRedo;
