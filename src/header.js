import React from 'react'
import styled from 'styled-components'

const HeaderAll = styled.div`
     width: 100%;
     max-width: 1300px;
     height: 70px;
     /* background-color: red; */
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     margin: 0 auto;
     display: flex;
     justify-content: space-between;
     margin-top: 10px;
     z-index: 99;
     
    .logo{ 
     /* margin-left: 30px ; */
     height: 100%;
     width: 150px;
     /* background-color: blue; */
     background-image: url('${process.env.PUBLIC_URL}/img/logo.png');
     background-size: contain;
     background-repeat: no-repeat;
    }
    ul{
        list-style: none;
        display: flex;
        /* margin-right: 30px; */
        /* background-color: red; */
        width: 400px;
        gap: 50px;
        text-align: center;
        height: 35px;
        li{
            border-radius: 5px;
            line-height: 35px;
            /* outline: 1px solid rgba(54,54,54,0.03); */
            /* background-color: rgba(256,256,256,0.8); */
            /* box-shadow: 2px 2px 3px rgba(0,0,0,0.03); */
            flex: 1;
            font-size: 15px;
            font-weight: 700;
            transition: 0.2s;
            &:hover{
                /* background-color: rgba(54,54,54,0.05); */
                font-size: 16px;
            }
            cursor: pointer;
            &:nth-child(1){}
            &:nth-child(2){}
            &:nth-child(3){}
            &:nth-child(4){}

        }
    }
`

const header = () => {
  return (
    <>
        <HeaderAll>
        <div className='logo'>
            {/* logo */}
        </div>
        <ul>
            <li>카드</li>
            <li>혜택</li>
            <li>고객지원</li>
            <li>Q&A</li>
        </ul>
        </HeaderAll>
    </>
  )
}

export default header
