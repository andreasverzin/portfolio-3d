import styled from "styled-components";

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  
  &:hover {
      background-color: #212d45;
      transform: scale(1.2);
      cursor: pointer;    
    }
`;

export const FooterWrapper = styled.section`
	width: calc(100vw - 96px);
  max-width: 1150px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;  
`;

export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #fff;
		left: 6px;
	}	
`;

export const SocialIconsContainer = styled.div`
  max-width: 1150px;
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 450px)  {    
    flex-direction: column;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
`;

export const Slogan = styled.p`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem 1rem 1rem 0;	
`;

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;
`;

export const LinkList = styled.ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;	
  
  @media screen and (max-width: 450px)  {
    display: flex;
    flex-direction: column;
  }
`;

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`;

export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;	
`;

export const CvButton = styled.button`
  outline: 2px solid transparent;
  outline-offset: 2px;
  color: #ffffff;
  font-weight: 700;
  padding: 0.75rem 2rem;
  border-radius: 0.75rem;
  width: fit-content;
  margin-right: 1rem;
  background-color: #15102E;
  transition: .3s ease;
  
  &:hover {      
    background-color: #211A4B;    
  }
`;

