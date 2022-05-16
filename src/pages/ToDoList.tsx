import { useEffect } from "react";
import { Container, Footer, Header, ToDoTask } from "../components";
import CreateTask from "../components/CreateTask/CreateTask";
import { getTodosAPI } from "../utils/services/todos";

const ToDoList = () => {
  
  useEffect(() => {
    const getTodos = async () => {
      const apiResponse = getTodosAPI()
      console.log(await apiResponse);
    }

    getTodos()
  }, []);

  return (
    <Container>
      <Header />
      <CreateTask />
      <ToDoTask />
      <Footer />
    </Container>
  );
};

export default ToDoList;
