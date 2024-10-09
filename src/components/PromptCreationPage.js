import React, { useState } from 'react';
import './PromptCreationPage.css';

const PromptCreationPage = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileUploaded(true);

      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleDeleteFile = () => {
    setFileUploaded(false);
    setFileName('');
    setFileContent('');
  };

  const handleNewFile = () => {
    document.getElementById('file-upload').click();
  };

  return (
    <div className="prompt-creation-page">
      <header>
        <nav>
          <button>PROMPTS</button>
          <button className="new-prompt">NEW PROMPT</button>
          <button>TEST</button>
        </nav>
        <button>LOGOUT</button>
      </header>

      <main>
        <div className="actions-container">
          <div className="input-container">
            <input type="text" placeholder="Prompt Name" />
            <textarea placeholder="Type in a prompt that reflects the personality or character you want the AI to have. It could be a single character, a statement, or a specific scenario. Be as detailed as possible to get the desired AI personality for your conversation. You can use it for entertainment, learning, brainstorming, or any other purpose. Be creative and have fun experimenting with different prompts!…" />
            <button className="save-button">SAVE</button>
          </div>

          <div className="upload-container">
            {!fileUploaded ? (
              <div className="upload-area">
                <p>Subir contexto:</p>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="#707070" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="8" stroke="none" />
                  <polyline points="14 10 12 8 10 10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                </svg>
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
                <button onClick={() => document.getElementById('file-upload').click()}>
                  FILE UPLOAD
                </button>
              </div>
            ) : (
              <div className="file-preview-container">
                <div className="file-info">
                  <span>{fileName}</span>
                  <div className="file-buttons">
                    <button onClick={handleNewFile} className='new-file-button'>NEW FILE</button>
                    <button onClick={handleDeleteFile} className="eliminar-file-button">ELIMINAR</button>
                  </div>
                </div>
                <div className="file-preview">
                  <pre>{fileContent}</pre>
                </div>
              </div>
            )}
            {!fileUploaded && (
              <button className="view-button">VIEW</button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PromptCreationPage;
