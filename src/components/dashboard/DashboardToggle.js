import { Button, Icon, Drawer, Alert } from 'rsuite';
import { useMediaQuery, useModalSate } from '../../misc/custom-hooks';
import Dashboard from '.';
import { useCallback } from 'react';
import { auth } from '../../misc/firebase';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModalSate();
  const isMobile = useMediaQuery('(max-width:992px)');
  const onSignOut = useCallback(() => {
    auth.signOut();
    Alert.info('Signed out', 400);
    close();
  }, [close]);
  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
        <Dashboard onSignOut={onSignOut} />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
