import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Modal = ({title, subtitle, visible, cancelButton, children, onOk, onCancel}) => {
  const handleOk = () => {
    if (onOk) {
      onOk();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className={classnames('modal', {visible})}>
      <div className="modal-dialog">
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <h5 className="modal-subtitle">{subtitle}</h5>
          <button type="button" className="btn close btn-inline btn-primary" onClick={handleCancel}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={handleOk}>OK</button>
          {cancelButton ? <button type="button" className="btn btn-default" onClick={handleCancel}>Cancel</button> : null}
        </div>
      </div>

      <div className={classnames('modal-mask', {visible})} />
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  visible: PropTypes.bool,
  cancelButton: PropTypes.bool,
  children: PropTypes.any,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};
Modal.defaultProps = {
  title: '',
  subtitle: '',
  visible: false,
  cancelButton: true,
  children: null
};

export default Modal;