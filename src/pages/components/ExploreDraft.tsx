import * as React from "react";
import styled from "styled-components";
import { Typography, Tabs, Card, Button, Icon } from "antd";

import Book from "../../components/svg/Book";

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const Container = styled.div`
  max-width: 980px;
  margin: auto;
  padding-top: 56px;
`;

const HeaderFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ContentFlex = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InfoFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const QuestionCircle = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #001429;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExploreDraft = () => {
  return (
    <Container>
      <HeaderFlex>
        <div>
          <Book size={56} style={{ fill: "#001529" }} />
        </div>
        <div style={{ marginLeft: 32 }}>
          <Title level={3}>Explore Steamery</Title>
          <Paragraph>
            Get set up and start building steam engines for your customers
          </Paragraph>
        </div>
      </HeaderFlex>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Setting up" key="1">
          <CardFlex>
            <Card
              title="Connect your email"
              style={{
                width: 316,
                marginBottom: 16,
                marginRight: 16,
                display: "flex",
                flexDirection: "column"
              }}
              bodyStyle={{ flex: "1 1" }}
            >
              <ContentFlex>
                <div style={{ flex: "1 1" }}>
                  <p>
                    Sync your email with Steamery to log your customer requests
                    for engines automatically in the app
                  </p>
                </div>
                <div>
                  <Button>Connect your email</Button>
                </div>
              </ContentFlex>
            </Card>
            <Card
              title="Manage your account settings"
              style={{
                width: 316,
                marginBottom: 16,
                marginRight: 16,
                display: "flex",
                flexDirection: "column"
              }}
              bodyStyle={{ flex: "1 1" }}
            >
              <ContentFlex>
                <div style={{ flex: "1 1" }}>
                  <p>
                    Set up your email signature, time zone and email
                    notifications
                  </p>
                </div>
                <div>
                  <Button>Manage your account</Button>
                </div>
              </ContentFlex>
            </Card>
            <Card
              title="Invite your Team"
              style={{
                width: 316,
                marginBottom: 16,
                display: "flex",
                flexDirection: "column"
              }}
              bodyStyle={{ flex: "1 1" }}
            >
              <ContentFlex>
                <div style={{ flex: "1 1" }}>
                  <p>
                    Invite your colleagues via email and start collaborating
                    with them
                  </p>
                </div>
                <div>
                  <Button>Invite colleagues</Button>
                </div>
              </ContentFlex>
            </Card>
          </CardFlex>
        </TabPane>
        <TabPane tab="CRM Basics" key="2" disabled>
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Marketing Basics" key="3" disabled>
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      <InfoFlex>
        <div>
          <Icon type="question-circle" style={{ fontSize: 20, padding: 8 }} />
        </div>
        <div>
          <Paragraph>
            <b>Click on the question mark icon</b> in the bottom-left of your
            Steamery App to access our Help Center, or check out the{" "}
            <a href="/#">Steamery Academy</a> for eBooks, reports, courses and
            webinars on the future of steam enginery.
          </Paragraph>
        </div>
      </InfoFlex>
      <QuestionCircle>
        <Icon type="question-circle" style={{ color: "white", fontSize: 24 }} />
      </QuestionCircle>
    </Container>
  );
};

export default ExploreDraft;
