import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { DialogProps } from './confirmation-dialog.interface';

interface Props {
  dialogProps: DialogProps;
  children: React.ReactNode;
}

export const ConfirmationDialogComponent: React.FunctionComponent<Props> = ({
  dialogProps,
  children,
}) => {
  const { isOpen, onAccept, onClose, title, labels } = dialogProps;

  const handleAccept = () => {
    onAccept();
    onClose();
  };

  return (
    <Dialog open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="contained">
          {labels.closeButton}
        </Button>
        <Button onClick={handleAccept} color="primary" variant="contained">
          {labels.acceptButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
