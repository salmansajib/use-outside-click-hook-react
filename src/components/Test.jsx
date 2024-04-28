import { useState } from 'react';

function Test() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      {showContent ? (
        <div
          style={{
            backgroundColor: 'black',
            padding: '1rem',
            borderRadius: '5px',
          }}
        >
          <h1>This is a random content</h1>
          <p>
            Please click outside ot this to close this. It won&apos;t close if
            you click inside of this content.{' '}
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}

export default Test;
