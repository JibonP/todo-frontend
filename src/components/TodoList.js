import React, { useState, useEffect } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import axios from "axios";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get(
      "http://ec2-3-19-67-200.us-east-2.compute.amazonaws.com:8000/api/tasks/"
    );
    setTasks(response.data);
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://ec2-3-19-67-200.us-east-2.compute.amazonaws.com:8000/api/tasks/",
      {
        name,
        task,
        completed: false,
      }
    );
    setTasks([...tasks, response.data]);
    setTask("");
    setName("");
  };

  const handleDeleteTask = async (id) => {
    await axios.delete(
      `http://ec2-3-19-67-200.us-east-2.compute.amazonaws.com:8000/api/tasks/${id}/`
    );
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = async (id) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    const response = await axios.put(
      `http://ec2-3-19-67-200.us-east-2.compute.amazonaws.com:8000/api/tasks/${id}/`,
      {
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      }
    );
    setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
  };

  return (
    <Container>
      <h1 className="mt-5">To-Do List</h1>
      <Form onSubmit={handleAddTask} className="mt-3">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formTask">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
      <ListGroup className="mt-3">
        {tasks.map((task) => (
          <ListGroup.Item
            key={task.id}
            className="d-flex justify-content-between align-items-center"
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.name} - {task.task}
            </span>
            <div>
              <Button
                variant="success"
                onClick={() => handleToggleComplete(task.id)}
              >
                Complete
              </Button>
              <Button
                variant="danger"
                className="ml-2"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TodoList;
