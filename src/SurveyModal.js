// SurveyModal.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  width: 90%;
  max-width: 500px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #888;
  &:hover {
    color: #000;
  }
`;

const Question = styled.div`
  margin-bottom: 20px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OptionButton = styled.button`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: inherit;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s, color 0.2s;

  &.selected {
    background-color: royalblue !important;
    color: white !important;
  }

  &:hover {
    background-color: #ececec;
  }

  &.selected:hover {
    background-color: royalblue;
  }
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const SurveyModal = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      q: '1️⃣ 주 사용 목적은 무엇인가요?',
      key: 'purpose',
      options: ['일상 소비', '쇼핑 / 패션', '교통 / 대중교통', '여행 / 해외결제', '기타'],
    },
    {
      q: '2️⃣ 선호하는 카드 혜택은?',
      key: 'benefit',
      options: ['캐시백', '포인트 적립', '할인', '무이자 할부', '연회비가 저렴한 카드'],
    },
    {
      q: '3️⃣ 당신의 소비 스타일은?',
      key: 'spending',
      options: ['월 30만 원 이하의 소소한 소비', '월 30~70만 원 중간 정도', '월 70만 원 이상 고소비'],
    },
  ];

  const handleSelect = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const getResult = () => {
    if (answers.purpose === '쇼핑 / 패션' && answers.benefit === '캐시백') {
      return '🛍️ 쇼핑 캐시백 카드 추천: G-STYLE 카드';
    }
    return '✨ 당신에게 어울리는 카드: SIMPLE SMART 카드';
  };

  const isCurrentAnswered = !!answers[questions[step]?.key];

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        {step < questions.length ? (
          <>
            <Question>{questions[step].q}</Question>
            <Options>
              {questions[step].options.map((opt) => (
                <OptionButton
                  key={opt}
                  className={answers[questions[step].key] === opt ? 'selected' : ''}
                  onClick={() => handleSelect(questions[step].key, opt)}
                >
                  {opt}
                </OptionButton>
              ))}
            </Options>
            <NavButtons>
              <button disabled={step === 0} onClick={() => setStep((s) => s - 1)}>이전</button>
              <button disabled={!isCurrentAnswered} onClick={() => setStep((s) => s + 1)}>다음</button>
            </NavButtons>
          </>
        ) : (
          <>
            <h3>추천 결과</h3>
            <p>{getResult()}</p>
            <button onClick={onClose}>닫기</button>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default SurveyModal;
