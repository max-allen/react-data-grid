const React = require('react');
require('../../../../themes/react-data-grid-toolbar.css');
import PropTypes from 'prop-types';

class Toolbar extends React.Component {
  static propTypes = {
    onAddRow: PropTypes.func,
    onDeleteRow: PropTypes.func,
    onToggleFilter: PropTypes.func,
    enableFilter: PropTypes.bool,
    numberOfRows: PropTypes.number,
    addRowButtonText: PropTypes.string,
    filterRowsButtonText: PropTypes.string,
    children: PropTypes.any
  };

  static defaultProps = {
    enableAddRow: true,
    enableDeleteRow: true,
    addRowButtonText: 'Add Row',
    deleteRowButtonText: 'Delete Row',
    filterRowsButtonText: 'Filter Rows'
  };

  onAddRow = () => {
    if (this.props.onAddRow !== null && this.props.onAddRow instanceof Function) {
      this.props.onAddRow({newRowIndex: this.props.numberOfRows});
    }
  };

  onDeleteRow = () => {
    if (this.props.onDeleteRow !== null && this.props.onDeleteRow instanceof Function) {
      this.props.onDeleteRow({newRowIndex: this.props.numberOfRows});
    }
  };

  renderAddRowButton = () => {
    if (this.props.onAddRow) {
      return (<button type="button" className="btn" onClick={this.onAddRow}>
        {this.props.addRowButtonText}
      </button>);
    }
  };

  renderDeleteRowButton = () => {
    if (this.props.onDeleteRow) {
      return (<button type="button" className="btn" onClick={this.onDeleteRow}>
        {this.props.deleteRowButtonText}
        </button>);
    }
  };

  renderToggleFilterButton = () => {
    if (this.props.enableFilter) {
      return (<button type="button" className="btn" onClick={this.props.onToggleFilter}>
      {this.props.filterRowsButtonText}
    </button>);
    }
  };

  render() {
    console.log('PROPS', this.props)
    return (
      <div className="react-grid-Toolbar">
        <div className="tools">
          {this.renderAddRowButton()}
          {this.renderDeleteRowButton()}
          {this.renderToggleFilterButton()}
          {this.props.children}
        </div>
      </div>);
  }
}

module.exports = Toolbar;
