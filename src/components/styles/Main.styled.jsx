import styled from "styled-components";

const StyledMain = styled.div`
  max-width: ${({ theme }) => theme["max-width"]};
  margin: auto;
`;
export const Cont = styled.div`
  margin: 1rem auto;
  padding: 3rem;
  box-shadow: 3px 3px 3px 3px #b3b3b3;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ id }) => (id % 2 ? "row" : "row-reverse")};
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
  }
`;
export const Img = styled.img`
  width: 50%;
  min-width: 300px;
  object-fit: cover;
  padding: 2rem;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    margin: 2rem 0;
    width: 100%;
    min-width: 300px;
  }
`;
export const Desc = styled.p`
  max-width: 500px;
  min-width: 250px;
  font-size: 1.1rem;
`;

export default StyledMain;
