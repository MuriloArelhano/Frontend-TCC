import React, { useState } from 'react';
// icons
import { FiDownload } from 'react-icons/fi';
// styles
import { CsvPopupContainer, CsvPopupContent } from './styles';

const CsvPopup = ({ content }) => {
  const [popupOpen, showPopup] = useState(false);

  return (
    <CsvPopupContainer>
      <button
        className="btn-download"
        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClick={() => showPopup(!popupOpen)}
      >
        Baixar CSV <FiDownload />
      </button>

      {popupOpen && (
        <CsvPopupContent onClick={() => {
          setTimeout(() => {
            showPopup(false);
          }, 500)
        }}>
          {content}
        </CsvPopupContent>
      )}
    </CsvPopupContainer>
  );
}

export default CsvPopup;