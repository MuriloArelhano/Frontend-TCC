import React, { useState, useRef, useCallback, useEffect } from 'react';
// icons
import { FiDownload } from 'react-icons/fi';
// styles
import { CsvPopupContainer, CsvPopupContent } from './styles';

const CsvPopup = ({ content }) => {
  const [popupOpen, showPopup] = useState(false);
  const popupRef = useRef();

  const handleClickOutside = useCallback((event) => {
    if (popupRef?.current) {
      if (!popupRef?.current.contains(event.target)) {
        showPopup(false);
      }
    }
  }, []);

  useEffect(() => {
    if (popupOpen) {
      document.addEventListener('click', handleClickOutside, false);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    }
  }, [handleClickOutside, popupOpen]);

  return (
    <CsvPopupContainer ref={popupRef}>
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