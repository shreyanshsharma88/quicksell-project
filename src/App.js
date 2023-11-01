import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Main } from "./components/container";
import { TasksProvider } from "./context/tasksProvider";

function App() {
  const queryClient = new QueryClient();
  

  return (
    <QueryClientProvider client={queryClient}>

    <TasksProvider>
      <Main />
    </TasksProvider>
    </QueryClientProvider>
  );
}

export default App;
