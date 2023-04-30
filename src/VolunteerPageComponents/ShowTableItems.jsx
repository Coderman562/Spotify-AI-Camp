// ShowTableItems.jsx
import React from 'react';
import './ShowTableItems.css';

function ConfigCheckbox({ label, isChecked, onChange }) {
  return (
    <label className="configCheckbox">
      <span className="configCheckbox__label">{label}</span>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
        className="configCheckbox__input"
      />
    </label>
  );
}

function ShowTableItems({ tableConfig, setTableConfig }) {
  return (
    <div className="configCheckboxes">
      <ConfigCheckbox
        label="First Name"
        isChecked={tableConfig.showFirstName}
        onChange={(checked) =>
          setTableConfig((prevConfig) => ({ ...prevConfig, showFirstName: checked }))
        }
      />
      <ConfigCheckbox
        label="Last Name"
        isChecked={tableConfig.showLastName}
        onChange={(checked) =>
          setTableConfig((prevConfig) => ({ ...prevConfig, showLastName: checked }))
        }
      />
      <ConfigCheckbox
        label="Phone Number"
        isChecked={tableConfig.showPhoneNumber}
        onChange={(checked) =>
          setTableConfig((prevConfig) => ({ ...prevConfig, showPhoneNumber: checked }))
        }
      />
      <ConfigCheckbox
        label="Email"
        isChecked={tableConfig.showEmail}
        onChange={(checked) =>
          setTableConfig((prevConfig) => ({ ...prevConfig, showEmail: checked }))
        }
      />
      <ConfigCheckbox
        label="Address"
        isChecked={tableConfig.showAddress}
        onChange={(checked) =>
          setTableConfig((prevConfig) => ({ ...prevConfig, showAddress: checked }))
        }
      />
    </div>
  );
}

export default ShowTableItems;
