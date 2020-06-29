import React from 'react';
import { Typography, Button, Divider, Card, Avatar } from 'antd';
import styled from 'styled-components';

import { FormComponentProps } from 'antd/lib/form/Form';
import { connect } from 'react-redux';

import { logout } from '../../../redux/actions/auth';
import { ReduxState } from '../../../redux/reducers';

const { Title, Text } = Typography;

const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface OwnProps {
  onClose: Function;
}

interface DispatchProps {
  logout: () => void;
  auth: any;
}

type Props = OwnProps & DispatchProps;

const AntAccount = ({ onClose, logout, auth }: Props) => {
  const handleLogout = () => {
    logout();
    onClose();
  };
  return (
    <Card style={{ width: 300 }}>
      <UserDetails>
        <Avatar size={48} src={auth.photoURL} icon="user" />
        <div style={{ marginLeft: 16 }}>
          <Title style={{ margin: 0 }} level={4}>
            {auth.name}
          </Title>
          <Text>{auth.email}</Text>
        </div>
      </UserDetails>
      <div>
        <Text type="secondary">{`id: ${auth.id}`}</Text>
      </div>
      <Divider />
      <Flex>
        <Button type="danger" onClick={handleLogout}>
          Log out
        </Button>
      </Flex>
    </Card>
  );
};

const mapStateToProps = (state: ReduxState) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(AntAccount);
