import { useRef } from "react";
import toast from "react-hot-toast";
import { connect } from "react-redux";
import { addTodo } from "../../redux";
import "./createTask.scss";

const CreateTask = () => {
  const inputRef: any = useRef();

  const handleSubmitTask = (e: any) => {
    e.preventDefault();

    if (inputRef.current.value.length === 0) {
      toast.error("Fill the input");
    } else {
      addTodo(inputRef.current.value);
      inputRef.current.value = "";
      toast.success("Task added!");
    }
  };

  return (
    <form onSubmit={handleSubmitTask}>
      <input
        type="text"
        placeholder="What needs to be done?"
        className="create-task"
        ref={inputRef}
      />
    </form>
  );
};

export default connect(null, { addTodo })(CreateTask);
