import styled from "styled-components";

const Logo = ({logo,newclass}) => {
  return (
    <Styles>
      <div className={`logo ${newclass}`}>
        <img src={logo} alt="Logo" />
      </div>
    </Styles>
  );
};

export default Logo;

const Styles = styled.div`
.signlogo{
  height:1.5rem;

}
.signlogo>img{
height:100%
}

`;
