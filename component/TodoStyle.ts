import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #f1f1f1;
  height: 100vh;
  padding: 50px;
`;

export const TitleTodo = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const ListContainer = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0;
  width: 50%;
  height: 50%;
  text-align: center;
  transform: translateX(50%);
`;

export const ListItem = styled.div`
  background-color: #e7e7e7;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
  margin-right: 10px;
  border-bottom: 1px dashed #e7e7e7;
`;

export const ListItemText = styled.span`
  font-size: 16px;
`;

export const DeleteButton = styled.button`
  background-color: #ff6961;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #ff4136;
  }
`;

export const BtnStyle = styled.button`
  background-color: #0d7985;
  border-radius: 15px;
  padding: 10px;
  border: none;
  color: #ffffff;
  margin: auto;
  display: flex;
  margin-top: 10px;
`;

export const BtnSubmit = styled.input`
  background-color: #0d7985;
  border-radius: 15px;
  padding: 10px;
  border: none;
  color: #ffffff;
  margin: auto;
  display: flex;
  margin-top: 10px;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  font-size: 20px; /* Set the default font size */
  font-weight: 500;
  right: 35%;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 767px) {
    right: 10%;
  }
`;

export const BlueColor = styled.span`
  color: #0d7985;
`;

export const ContainerCol = styled.div`
  text-align: center;
  // display: flex;
  // flex-wrap: wrap;
  // gap: 16px;
  padding: 25px 0;

  display: flex;
  flex-wrap: wrap; /* Allow flex items to wrap to the next line */
  margin: -8px; /
  background-color:grey;
`;

export const Column = styled.div`
  // flex: 1;
  // flex-basis: calc(33.3333% - 16px);
  // border-right: 1px solid grey;

  flex: 1;
  flex-basis: calc(33.3333% - 16px);
  margin: 8px; /* Adjust margin to create spacing between columns */

  @media (max-width: 767px) {
    flex-basis: 100%; /* Set to full width on smaller screens (mobile) */
  }
`;

export const InputCustom = styled.input`
  border-radius: 5px;
  width: 50%;
  height: 25px;
  border: 1px solid grey;
`;

export const GridContainers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns with equal width (6:6) */
  gap: 16px; /* Adjust the gap between columns if needed */
  margin-top: 10px;
`;

export const BtnUpdate = styled.button`
  background-color: #e1f5f0;
  border-radius: 15px;
  padding: 10px;
  border: none;
  text-align: center;
`;

export const BtnDelete = styled.button`
  background-color: red;
  border-radius: 15px;
  padding: 10px;
  border: none;
  text-align: center;
  color: white;
`;
