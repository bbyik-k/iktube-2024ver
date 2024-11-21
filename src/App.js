import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiPorvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiPorvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiPorvider>
    </>
  );
}

export default App;
