"use client";
import { Container } from "postcss";
import React, { useState } from "react";
import {
  TitleTodo,
  MainContainer,
  ListContainer,
  ListItem,
  BtnStyle,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  BlueColor,
  ContainerCol,
  Column,
  BtnDelete,
  InputCustom,
  GridContainers,
  BtnUpdate,
  BtnSubmit
} from "../component/TodoStyle";
import { useForm, SubmitHandler } from "react-hook-form";

const TodoPage: React.FC = () => {
  interface ITask {
    id: number;
    title: string;
    detail: string;
    status: string;
  }
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState<ITask>({
    id: 0,
    title: "",
    detail: "",
    status: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModal, setIsUpdateModal] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { handleSubmit, register, setValue, reset } = useForm<ITask>();

  const addTask: SubmitHandler<ITask> = (data) => {
    data.status = "TO DO";
    data.id = highestId() + 1;

    if (data?.title && data?.detail) {
      setTasks([...tasks, data]);
      reset();
      setIsModalOpen(false);
    }
  };

  const [idToUpdate, setIdToUpdate] = useState<number | null>(null);

  const openUpdateModal = (taskId: number) => {
    setIdToUpdate(taskId);
    const targetTask = tasks.find((task: ITask) => task.id === taskId);
    if (targetTask) {
      setValue("id", targetTask.id);
      setValue("title", targetTask.title);
      setValue("detail", targetTask.detail);
      setValue("status", targetTask.status);
    }
    setIsUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setIdToUpdate(null);
    reset();
    setIsModalOpen(false);
    setIsUpdateModal(false);

    // reset();
  };

  const updateTask = (taskId: number) => {
    openUpdateModal(taskId);
  };

  const highestId = () => {
    const id = tasks.length > 0 ? Math.max(...tasks.map((item) => item.id)) : 0;
    return id;
  };

  const deleteTask = (toDeleteTaskId: number) => {
    if (confirm("sure ? ")) {
      const updatedTask = tasks.filter(
        (task: ITask) => task.id !== toDeleteTaskId
      );
      setTasks(updatedTask);
    }
  };

  return (
    <MainContainer>
      <TitleTodo className="text-center">
        TODO <BlueColor>LIST</BlueColor>
      </TitleTodo>

      <BtnStyle onClick={openModal}>+ Add Task</BtnStyle>

      <ContainerCol>
        <Column>
          <div>TO DO</div>
          {tasks
            .filter((task) => task.status === "TO DO")
            .map((task, index) => (
              <ListItem key={task.id}>
                <p>
                  {task.id}.{task.title}
                </p>
                <p>{task.detail}</p>
                <GridContainers>
                  <BtnUpdate onClick={() => updateTask(task.id)}>
                    Update
                  </BtnUpdate>
                  <BtnDelete onClick={() => deleteTask(task.id)}>
                    Delete
                  </BtnDelete>
                </GridContainers>
              </ListItem>
            ))}
        </Column>
        <Column>
          <div>DOING</div>
          {tasks
            .filter((task) => task.status === "DOING")
            .map((task, index) => (
              <ListItem key={task.id}>
                <p>
                  {task.id}.{task.title}
                </p>
                <p>{task.detail}</p>
                <GridContainers>
                  <BtnUpdate onClick={() => updateTask(task.id)}>
                    Update
                  </BtnUpdate>
                  <BtnDelete onClick={() => deleteTask(task.id)}>
                    Delete
                  </BtnDelete>
                </GridContainers>
              </ListItem>
            ))}
        </Column>
        <Column>
          <div>DONE</div>
          {tasks
            .filter((task) => task.status === "DONE")
            .map((task, index) => (
              <ListItem key={task.id}>
                <p>
                  {task.id}.{task.title}
                </p>
                <p>{task.detail}</p>
                <GridContainers>
                  <BtnUpdate onClick={() => updateTask(task.id)}>
                    Update
                  </BtnUpdate>
                  <BtnDelete onClick={() => deleteTask(task.id)}>
                    Delete
                  </BtnDelete>
                </GridContainers>
              </ListItem>
            ))}
        </Column>
      </ContainerCol>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalCloseButton onClick={closeUpdateModal}>x</ModalCloseButton>

            <p>{"Add Task"}</p>
            <form
              onSubmit={handleSubmit((data) => {
                addTask(data);
              })}
            >
              <p>
                <InputCustom
                  {...register("title", { required: true })}
                  placeholder="หัวข้อ"
                />
              </p>
              <p>
                <InputCustom
                  {...register("detail", { required: true })}
                  placeholder="รายละเอียด"
                />
              </p>

              <p>
                <select
                  {...register("status")}
                  defaultValue="TO DO"
                  onChange={(e) => setValue("status", e.target.value)}
                  disabled={idToUpdate === null}
                >
                  <option value="TO DO">To Do</option>
                  <option value="DOING">Doing</option>
                  <option value="DONE">Done</option>
                </select>
              </p>
              <BtnSubmit type="submit" value="Add"/>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}

      {isUpdateModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalCloseButton onClick={closeUpdateModal}>x</ModalCloseButton>

            <p>{"Update Task"}</p>
            <form
              onSubmit={handleSubmit((data) => {
                if (idToUpdate !== null) {
                  // Update task
                  const newTask = tasks.filter(
                    (task: ITask) => task.id !== data.id
                  );
                  setTasks([...newTask, data]);

                  closeUpdateModal();
                }
              })}
            >
              {/* <InputCustom {...(register("id"), { required: true })} disabled /> */}
              <p>
                <InputCustom {...register("title", { required: true })} />
              </p>
              <p>
                <InputCustom {...register("detail", { required: true })} />
              </p>
              <p>
                <select
                  {...register("status")}
                  defaultValue="TO DO"
                  onChange={(e) => setValue("status", e.target.value)}
                  disabled={idToUpdate === null}
                >
                  <option value="TO DO">To Do</option>
                  <option value="DOING">Doing</option>
                  <option value="DONE">Done</option>
                </select>
              </p>
              <BtnSubmit type="submit" value="Add"/>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </MainContainer>
  );
};

export default TodoPage;
