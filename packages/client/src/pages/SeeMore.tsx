import styled from "@emotion/styled";
import BottomNavigation from "../components/BottomNavigation";
import IconButtonList from "../components/SeeMore/IconButtonList";
import UserInfo from "../components/SeeMore/UserInfo";
import TopNaviagion from "../components/TopNavigation";

const Base = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 12px;
  box-sizing: border-box;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function SeeMore() {
  return (
    <Base>
      <Container>
        <TopNaviagion title="더보기" />
        <UserInfo username="김철수" telNo="010-1234-5678" />
        <IconButtonList />
        <BottomNavigation />
      </Container>
    </Base>
  );
}
