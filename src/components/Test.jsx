import { useRef, useState } from 'react';
import UseOutsideClick from './UseOutsideClick';

function Test() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOutsideClick(ref, () => setShowContent(false));

  console.log(ref.current);

  return (
    <div>
      {showContent ? (
        <div
          ref={ref}
          style={{
            backgroundColor: 'black',
            padding: '.1rem 1rem',
            borderRadius: '5px',
          }}
        >
          <span
            style={{
              float: 'right',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={() => setShowContent(false)}
          >
            &times;
          </span>
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
