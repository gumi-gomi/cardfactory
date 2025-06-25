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
  height: 64%;
  width: auto;
  transform: rotate(90deg);
  transform-origin: center center;
`;

const CardTitle = styled.div`
  margin-top: 10px;
  font-weight: 700;
  color: #333;
  font-size: 16px;
  text-align: center;
`;

const CardText = styled.div`
  margin-top: 10px;
  font-weight: 500;
  color: #333;
  width: 220px;
  font-size: 14px;
  letter-spacing: -1px;
  word-break: keep-all;
  text-align: center;
  padding: 0px 30px;
  box-sizing: border-box;
`;

const cardData = {
  premium: [
    { title: 'AMEX GOLD', img: `${process.env.PUBLIC_URL}/img/card1.webp`, text: '아무나 가질 수 없는 럭셔리\n 그 이상의 카드' },
    { title: 'Boutique Copper', img: `${process.env.PUBLIC_URL}/img/card4.webp`, text: '연간 최대 80만 바우처 제공\n M포인트 또는 마일리지 적립' },
    { title: 'Boutique Velvet', img: `${process.env.PUBLIC_URL}/img/card5.webp`, text: '연간 30만 바우처 제공\n M포인트 또는 마일리지 적립' },
    { title: 'The Green', img: `${process.env.PUBLIC_URL}/img/card6.webp`, text: '국내외 가맹점 1% 적립\n 일상생활 5개 영역 10% 할인' }
  ],
  shopping: [
    { title: 'emart shpping', img: `${process.env.PUBLIC_URL}/img/card2.webp`, text: '이마트 가맹점 5% 적립\n 그 외 국내외가맹점 0.5% 적립' },
    { title: 'MUSINSA RED', img: `${process.env.PUBLIC_URL}/img/card18.webp`, text: '무신사 할인에 무신사 적립금 추가 5% 적립' },
    { title: '배달의민족 B-card', img: `${process.env.PUBLIC_URL}/img/card8.webp`, text: '배달의 민족 할인 5%\n한달에 3장의 추가 쿠폰' },
    { title: 'MUSINSA BLUE', img: `${process.env.PUBLIC_URL}/img/card17.webp`, text: '무신사 쿠폰 3장 추가\n적립금 5% 추가 적립' }
  ],
  smart: [
    { title: 'X cut', img: `${process.env.PUBLIC_URL}/img/card7.webp`, text: '편의점 5% 할인\n최대 50만 x캐시백' },
    { title: 'Korean Air Card', img: `${process.env.PUBLIC_URL}/img/card19.webp`, text: '연간 보너스 1만 마일리지\n1천원당 최대 3 마일리지 적립' },
    { title: 'The Color', img: `${process.env.PUBLIC_URL}/img/card3.webp`, text: '현대차 구매 1.5% 적립\n업종별 최대 3% 적립' }
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
        {item.text && (
          <CardText>
            {item.text.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </CardText>
        )}
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
