import { Home } from "./Home";
import TaskItemElement from "./TaskItem";

const HomePage = () => {
  return (
    <Home.Root>
      <Home.Head>
        <Home.Form />
      </Home.Head>
      <Home.Body>
        <TaskItemElement />
      </Home.Body>
    </Home.Root>
  );
};

export default HomePage;
