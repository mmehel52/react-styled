import styled from "styled-components";

export const FooterDiv = styled.footer`
  background: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.header};
`;
export const FooterContent = styled.div`
  max-width: ${({ theme }) => theme["max-width"]};
  margin: auto;
  padding: 4rem 0;
`;
export const Flogo = styled.img`
  width: 340px;
  padding: 2rem;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    display: block;
    margin: 0 auto;
  }
`;
export const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    list-style-type: none;
  }
  li {
    margin-bottom: 1rem;
    padding: 0 0.4rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
    flex-direction: column;
    ul {
      padding: 1.8rem 0;
    }
  }
`;
export const SocialIcons = styled(FooterFlex)`
  align-items: center;
  a {
    color: ${({ theme }) => theme.colors.header};
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 0.6rem;
    margin: 0.5rem;
    border-radius: 50%;
  }
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: row;
    justify-content: center;
  }
`;
