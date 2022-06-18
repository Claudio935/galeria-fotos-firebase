import styled from "styled-components";

export const AreaTotal = styled.div`
  width: 100%;
  background-color: #2c3549;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AreaConteudo = styled.div`
  width: 70%;
  min-height: 100%;
  background-color: #2c3549;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 25px;
`;
export const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const H1 = styled.h1`
  color: #fff;
  font-size: 48px;
  font-weight: 500;
`;
export const ContainerFotos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ContainerInputFile = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  background-color: #3e3f44;
  box-shadow: 5px 5px 15px 5px #6d6d6d;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px;
`;
export const InputFile = styled.input`
  margin: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 20px;
  border: #fff 1px solid;
  padding: 5px;
  border-radius: 5px;
`;
export const ButtonSend = styled.button`
  height: 30px;
  width: 90px;
  border-radius: 5px;
  background: #03042b;
  color: #fff;
  border: 0px;
  &:hover {
    transform: scale(1.1);
    background-color: #2c3549;
    cursor: pointer;
    box-shadow: 100px 0px 48px -15px #2c3549 !important;
  }
`;
export const Image = styled.img`
  height: 200px;
  width: 300px;
`;
export const ImageIcon = styled.img`
  color: #fff;
`;
export const ContainerImagem = styled.div`
  cursor: pointer;
  height: 200px;
  width: 300px;
  margin: 25px 5px;
  &:hover {
    & .container-legenda-button {
      transform: translateY(-40px);
      background: #03042b;
      opacity: 1;
    }
  }
`;
export const ContainerLegendaButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  opacity: 0;
  padding: 5px;
  border-radius: 20px 20px 0px 0px;
  transition-duration: 0.5s;
  padding: 0px 15px;
`;
export const LegendaPhoto = styled.label`
  color: #fff;
`;
export const buttonDelete = styled.button`
  width: 30px;
  height: 30px;
  padding: 6px;
  background-color: #cd0a0a;
  border-radius: 15px;
  margin: 5px;
  display: flex;
  border: 0px;
  justify-content: center;
  align-items: center;
  color: red;
  opacity: 1;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: #ec0101;
    box-shadow: 100px 0px 48px -15px #ec0101 !important;
  }
`;
