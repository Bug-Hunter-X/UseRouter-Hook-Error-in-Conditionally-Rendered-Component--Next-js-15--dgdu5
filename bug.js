In Next.js 15, a subtle issue can arise when using `next/navigation`'s `useRouter` hook within a component that's conditionally rendered.  If the component rendering the hook isn't mounted when the page initially loads, attempting to use the router's methods (e.g., `push`, `replace`) can throw an error because the router instance might not be fully initialized.

```javascript
// bug.js
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/another-page');
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