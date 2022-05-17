import { Container, CreateTask, Footer, Header, ToDoTask } from "../components";

const ToDoList = () => {
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
