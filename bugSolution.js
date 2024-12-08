```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: The effect runs only once after the initial render.
    console.log('Component mounted');
    // Or perform other operations that should only run once after mount
    return () => {
      console.log('Component unmounted')
    }
  }, []);
  useEffect(() => {
    // Correct logic: This effect runs whenever the count changes
    console.log('Count updated:', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```