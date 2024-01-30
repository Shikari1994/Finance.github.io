import styled from "styled-components"





const css = {
  HeaderContainer: styled.header`
 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    width: 100%;
    height: 100px;
    
    padding: 0px 300px;
  `,
  FooterContainer: styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 80px;
    
    
  `,
  HeaderCSS: {
    Logo: styled.div`
      font-size: 35px;
      color: #00000;
    `,
    MenuContainer: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: relative;
     
      

    `
   
    


   
    
  }
}





export default css