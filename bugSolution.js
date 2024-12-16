```javascript
// bugSolution.js
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    if (router) { //Check if router is available
      router.push('/another-page');
    }
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default function MyPage({ showComponent }) {
  return (
    <div>
      {showComponent && <MyComponent />}
    </div>
  );
}
```