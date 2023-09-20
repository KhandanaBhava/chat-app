import { Button, Icon, Drawer, Alert } from 'rsuite';
import { useMediaQuery, useModalSate } from '../../misc/custom-hooks';
import Dashboard from '.';
import { useCallback } from 'react';
import { auth, database } from '../../misc/firebase';
import { isOfflineForDatabase } from '../../context/profile.context';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModalSate();
  const isMobile = useMediaQuery('(max-width:992px)');
  const onSignOut = useCallback(() => {
    database
      .ref(`/status/${auth.currentUser.uid}`)
      .set(isOfflineForDatabase)
      .then(() => {
        auth.signOut();
        Alert.info('Signed out', 400);
        close();
      })
      .catch(err => {
        Alert.error(err.message, 4000);
      });
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
