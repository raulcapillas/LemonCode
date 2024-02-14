import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { DialogProps } from './confirmation-dialog.interface';

describe('confirmation dialog component specs', () => {
  it('should not display a dialog', () => {
    //  Arrage
    const dialogProps: DialogProps = {
      isOpen: false,
      onAccept: () => {},
      onClose: () => {},
      title: '',
      labels: {
        acceptButton: '',
        closeButton: '',
      },
    };

    //  Act
    const { container } = render(
      <ConfirmationDialogComponent dialogProps={dialogProps}>
        <h1>test</h1>
      </ConfirmationDialogComponent>
    );

    //  Assert
    expect(container.firstChild).toBeNull();
  });
  it('should display a dialog', async() => {
    //  Arrage
    const dialogProps: DialogProps = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: '',
      labels: {
        acceptButton: '',
        closeButton: '',
      },
    };

    //  Act
    const { container } = await render(
      <ConfirmationDialogComponent dialogProps={dialogProps}>
        <h1>test</h1>
      </ConfirmationDialogComponent>
    );
    
    //  Assert
    //expect(container.firstChild).not.toBeNull();
  });
  it('', () => {
    //  Arrage
    //  Act
    //  Assert
  });
});
