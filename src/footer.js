import React from 'react'
import styled from 'styled-components'

const FooterAll = styled.div`
width: 100%;
max-width: 1300px;
height: 300px;
/* outline: 1px dotted red; */
margin: 0 auto;
display: flex;
gap: 10px;
margin-top: 130px;



div{
    flex: 1;
    /* outline: 1px dotted red; */
    font-size: 14px;
    @media screen and (max-width: 800px) {
    font-size: 12px;
}
  @media screen and (max-width: 650px) {
    font-size: 11px;
    letter-spacing: -1px;
}
}
.area1{
    margin-left: 30px;
    ul{
        list-style: none;
        li{
            margin-bottom: 5px;
            span{
                margin-right: 15px;
                font-weight: 700;
            }
        }
    }
}
.area2{
    ul{
        list-style: none;
        li{
            margin-bottom: 5px;
            span{
                margin-right: 15px;
                font-weight: 700;
            }
        }
    }
}
.area3{
    @media screen and (max-width: 550px) {
        margin-right: 30px;
        word-break: keep-all;
    }
}
.area4{
    /* outline: 1px dotted red; */
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 550px) {
        display: none;
    }
     ul{
        width: 170px;
        /* outline: 1px dotted red; */
        list-style: none;
        display: flex;
        li{
            flex: 1;
            /* outline: 1px dotted red; */
            font-weight: 700;
            text-align: center;
            /* margin-right: 30px; */
            span{
                margin-right: 15px;
                font-weight: 700;
            }
        }
    }
    .btmlogo{
        margin-top: 20px;
        /* outline: 1px dotted red; */
        width: 150px;
        height: 50px;
        margin-left: 10px;
        background-image: url('/img/logo.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
}
`

const footer = () => {
  return (
    <>
    <FooterAll>
     <div className='area1'>
        <ul>
            <li><span>고객센터</span> 1455-5555</li>
            <li><span>카드신청</span> 1455-5554</li>
            <li><span>금융신청</span> 1455-5354</li>
            <li><span>분실신고</span> 1455-5344</li>
            
        </ul>
     </div>
     <div className='area2'>
        <ul>
            <li><span>회사소개</span></li>
            <li>회사소개</li>
            <li>영업점 안내</li>
            <li>개인정보 처리방침</li>
            <li>고객권리안내</li>
            <li>이용약관</li>
            
        </ul>
     </div>
     <div className='area3'>
        대전시 서구 용문동 333-44 용문빌딩 3층<br/>
        사업자등록번호 3333-3333-33333<br/>
        COPYRIGHT. CARDFACTORY CO
     </div>
     <div className='area4'>
        <ul>
            <li>개인</li>
            <li>법인</li>
            <li>가맹점</li>
        </ul>
        <div className='btmlogo'></div>
     </div>
    </FooterAll>
    </>
  )
}

export default footer
