import { ThemeProvider } from '@/contexts/theme';
import router from '@/router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
