import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const BUTTONFONTSIZE = ".875";
const COLUMNHEADINGSIZE = "2.81";
const COLUMNBODYSIZE = ".812";
const SPACEONE = "1.2";
const DropShadow =
  "0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)";

export const primary = {
  color: "#388CE4",
  textColor: "#FFF",
  textMinAlpha: "0.37",
  textMaxAlphia: "1"
};

export const accentColor = {
  color: "#4e4e4e"
};

export const Row = styled.div`
  padding: 0 ${props => (props.space ? props.space : "0")};
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const TopBar = styled.section`
  width: 100%;
  background: ${props =>
    props.topBarColor ? props.topBarColor : primary.color};
`;
export const TopBarTitle = styled.a`
  color: ${props => (props.titleColor ? props.titleColor : primary.textColor)};
  padding: ${SPACEONE}em 0.5em ${SPACEONE}em;
  font-size: 1em;
  text-transform: uppercase;
  line-height: 28px;
  text-align: center;
  margin-right: ${props => (props.rightSpace ? "1em;" : "0")};
`;
export const Flex = styled.span`
  flex: 2;
`;

export const MenuBar = styled.div`
    <TopBar>
        <h1>Hi There</h1>
    </TopBar>
`;
