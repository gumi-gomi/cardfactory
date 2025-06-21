import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SurveyModal from './SurveyModal';

const Body1all = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;

  h2 {
    max-width: 1300px;
    margin: 0 auto;
    margin-bottom: 15px;
    padding-left: 30px;
  }

  .box1 {
    width: 100%;
    max-width: 1300px;
    height: 400px;
    margin: 0 auto 40px auto;
    background-image: url('${process.env.PUBLIC_URL}/img/whatsnew.png');
    background-size: cover;
    background-position: center;
    background-color: royalblue;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #fff;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    cursor: pointer;

      @media screen and (max-width: 740px) {
            height: 300px;
        }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      transition: 0.2s ease;
      z-index: 1;
    }

    &:hover::before {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
    }
  }

  .box2 {
    max-width: 1300px;
    height: 500px;
    margin: 0 auto 40px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media screen and (max-width:1340px) {
        height: 400px;
    }
     @media screen and (max-width: 1100px) {
            height: 530px;
        }
          @media screen and (max-width: 880px) {
            height: 450px;
        }
          @media screen and (max-width: 740px) {
            height: 400px;
        }

    .scroll {
      flex: 2;
      height: 100%;
      overflow: hidden;
      position: relative;

      .slick-prev,
      .slick-next {
        display: none !important;
      }

      .slide-item {
        height: 470px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        gap: 20px;
        padding: 20px;
        box-sizing: border-box;
         @media screen and (max-width:1340px) {
        height: 400px;
    }
    @media screen and (max-width: 1100px) {
            height: 500px;
        }
          @media screen and (max-width: 880px) {
            height: 420px;
        }
          @media screen and (max-width: 740px) {
            height: 350px;
        }

        .item1box {
          outline: 1px solid rgba(0, 0, 0, 0.05);
          flex: 1;
          height: 100%;
          border-radius: 5px;
          box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.3s ease;

          &:hover {
            position: relative;
            transform: translateY(-20px);
          }
        }

        .item1, .item2, .item3, .item4, .item5, .item6, .item7, .item8, .item9 {
          background-position: center;
          background-size: cover;
          transition: 0.2s;
        }

        .item1 { background-image: url('${process.env.PUBLIC_URL}/img/item1.png'); }
        .item2 { background-image: url('${process.env.PUBLIC_URL}/img/item2.png'); }
        .item3 { background-image: url('${process.env.PUBLIC_URL}/img/item3.png'); }
        .item4 { background-image: url('${process.env.PUBLIC_URL}/img/item4.png'); }
        .item5 { background-image: url('${process.env.PUBLIC_URL}/img/item5.png'); }
        .item6 { background-image: url('${process.env.PUBLIC_URL}/img/item6.png'); }
        .item7 { background-image: url('${process.env.PUBLIC_URL}/img/item7.png'); }
        .item8 { background-image: url('${process.env.PUBLIC_URL}/img/item8.png'); }
        .item9 { background-image: url('${process.env.PUBLIC_URL}/img/item9.png'); }
      }

      .slick-dots {
        bottom: -30px;
      }
    }

    .side {
      background-color: rgba(0, 0, 0, 0.1);
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background-image: url('${process.env.PUBLIC_URL}/img/search.png');
      background-size: cover;
      background-position: center;
      outline: 1px solid rgba(0, 0, 0, 0.05);

        @media screen and (max-width: 1100px) {
            display: none;
        }

      .recommend-box {
        color: #000;
        text-align: center;

      

        h3 {
          font-size: 25px;
          margin-bottom: 12px;
        }

        p {
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 20px;
          font-weight: 600;
        }

        button {
          background: white;
          color: royalblue;
          font-weight: bold;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

          &:hover {
            background: #f2f2f2;
          }
        }
      }
    }
  }

  .box3 {
    max-width: 1300px;
    margin: 0 auto 60px auto;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    @media screen and (max-width: 740px) {
            flex-direction: column;
        }

    .feature {
      flex: 1;
      padding: 30px 20px;
      background: #f8f8f8;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

        @media screen and (max-width: 740px) {
            margin-left: 20px;
            margin-right: 20px;
        }

      h4 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
           @media screen and (max-width: 1100px) {
            font-size: 15px;
            letter-spacing: -1px;
        }
         @media screen and (max-width: 740px) {
            font-size: 18px;
            letter-spacing: 0px;
        }
      }

      p {
        font-size: 14px;
        color: #555;
        font-weight: 700;
        line-height: 1.5;
           @media screen and (max-width: 1100px) {
            font-size: 12px;
            word-break: keep-all;
        }
         @media screen and (max-width: 740px) {
            font-size: 14px;
            letter-spacing: 0px;
        }
      }
    }
  }
`

const Body1 = () => {

const [modalOpen, setModalOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  }

  return (
    <Body1all>
      <h2>WHAT'S NEW</h2>

      <div className="box1" />

      <div className="box2">
        <div className="scroll">
          <Slider {...settings}>
            {[1, 2, 3].map((_, i) => (
              <div key={i}>
                <div className="slide-item">
                  <div className={`item1box item${i * 3 + 1}`} />
                  <div className={`item1box item${i * 3 + 2}`} />
                  <div className={`item1box item${i * 3 + 3}`} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="side">
          <div className="recommend-box">
            <h3>💡 나에게 맞는 카드 찾기</h3>
            <p>간단한 질문 몇 개로<br />당신에게 딱 맞는 카드를 추천해드려요.</p>
            <button onClick={() => setModalOpen(true)}>지금 시작하기</button>
            {modalOpen && <SurveyModal onClose={() => setModalOpen(false)} />}
          </div>
        </div>
      </div>

      <div className="box3">
        <div className="feature">
          <h4>🏷️ 맞춤 카드 추천</h4>
          <p>설문 기반 추천으로 시작부터 정확하게</p>
        </div>
        <div className="feature">
          <h4>💳 다양한 카드 혜택</h4>
          <p>생활, 쇼핑, 교통까지 폭넓은 혜택 제공</p>
        </div>
        <div className="feature">
          <h4>🕒 3분 안에 신청 가능</h4>
          <p>빠르고 간편한 카드 탐색/신청 경험</p>
        </div>
        <div className="feature">
          <h4>🛡️ 안심 보안 시스템</h4>
          <p>고객 정보를 안전하게 보호합니다</p>
        </div>
      </div>
    </Body1all>
  )
}

export default Body1
