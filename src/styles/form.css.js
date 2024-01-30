import styled from "styled-components"

const css = {
  FormContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 600px;
    height: auto;
    min-height: 60px;
    border-radius: 10px;
    box-shadow: 0px 0px 4px grey;
    margin: 40px auto 40px;
    padding: 20px;
    
  `,
  Input: styled.input`
    display: block;
    position: relative;
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    background-color: rgb(255, 255, 240);
    border-radius: 10px;
    padding-left: 14px;
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0px;
      
    }
  `,
  Button: styled.span`
    display: block;
    position: relative;
    width: 220px;
    height: 44px;
    line-height: 42px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    background-color: ${props => props.backgroundColor};
  `
}

export default css