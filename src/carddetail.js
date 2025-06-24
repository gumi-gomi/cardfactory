import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const CardBox = styled.div`
  width: 220px;
  height: 340px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImg = styled.img`
  height:64%;
  width: auto;
  /* object-fit: cover; */
  transform: rotate(90deg);
  transform-origin: center center;
`;

const CardTitle = styled.div`
  margin-top: 10px;
  font-weight: bold;
  color: #333;
  font-size: 16px;
  text-align: center;
`;

const cardData = {
  premium: [
    { title: 'Premium 1', img: `${process.env.PUBLIC_URL}/img/card1.webp` },
    { title: 'Premium 2', img: `${process.env.PUBLIC_URL}/img/card4.webp` },
    { title: 'Premium 3', img: `${process.env.PUBLIC_URL}/img/card5.webp` },
    { title: 'Premium 4', img: `${process.env.PUBLIC_URL}/img/card6.webp` }
  ],
  shopping: [
    { title: 'Shopping 1', img: `${process.env.PUBLIC_URL}/img/card2.webp` },
    { title: 'Shopping 2', img: `${process.env.PUBLIC_URL}/img/card3.webp` },
    { title: 'Shopping 3', img: `${process.env.PUBLIC_URL}/img/card7.webp` },
    { title: 'Shopping 4', img: `${process.env.PUBLIC_URL}/img/card17.webp` }
  ],
  smart: [
    { title: 'Smart Pick 1', img: `${process.env.PUBLIC_URL}/img/card8.webp` },
    { title: 'Smart Pick 2', img: `${process.env.PUBLIC_URL}/img/card19.webp` },
    { title: 'Smart Pick 3', img: `${process.env.PUBLIC_URL}/img/card18.webp` }
  ]
};

const CardDetail = () => {
  const renderCards = (cards) =>
    cards.map((item, i) => (
      <div key={i}>
        <CardBox>
          <CardImg src={item.img} alt={item.title} />
        </CardBox>
        <CardTitle>{item.title}</CardTitle>
      </div>
    ));

  return (
    <Wrapper>
      <Section>
        <SectionTitle>Premium</SectionTitle>
        <CardGrid>{renderCards(cardData.premium)}</CardGrid>
      </Section>

      <Section>
        <SectionTitle>Shopping</SectionTitle>
        <CardGrid>{renderCards(cardData.shopping)}</CardGrid>
      </Section>

      <Section>
        <SectionTitle>Smart Pick</SectionTitle>
        <CardGrid>{renderCards(cardData.smart)}</CardGrid>
      </Section>
    </Wrapper>
  );
};

export default CardDetail;
