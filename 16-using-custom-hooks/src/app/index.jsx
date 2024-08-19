import Home from '@/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NoteListPage from './../pages/NoteList';
import NewNotePage from './../pages/NewNote';
import NoteDetailPage from './../pages/NoteDetail';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/notes',
    element: <NoteListPage />,
  },
  {
    path: '/notes/new',
    element: <NewNotePage />,
  },
  {
    path: '/notes/detail',
    element: <NoteDetailPage />,
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
