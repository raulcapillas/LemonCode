import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { DialogProps } from './confirmation-dialog.interface';

describe('confirmation dialog component specs', () => {
  it('should not display a dialog when isOpen is false', () => {
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

  it('should display a dialog with title, content and labels accept and close buttons when isOpen is true', () => {
    //  Arrage
    const dialogProps: DialogProps = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'Dialog test',
      labels: {
        acceptButton: 'Accept',
        closeButton: 'Close',
      },
    };

    //  Act
    render(
      <ConfirmationDialogComponent dialogProps={dialogProps}>
        <h1>Content test</h1>
      </ConfirmationDialogComponent>
    );

    //  Assert
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Content test'
    );
    expect(screen.getByText('Dialog test')).toBeInTheDocument();
    expect(screen.getByText('Accept')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });
  it('should call onClose function when close button is clicked', async () => {
    //  Arrage
    const dialogProps: DialogProps = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Dialog test',
      labels: {
        acceptButton: 'Accept',
        closeButton: 'Close',
      },
    };
    //  Act
    render(
      <ConfirmationDialogComponent dialogProps={dialogProps}>
        <h1>Content test</h1>
      </ConfirmationDialogComponent>
    );

    const buttonElement = screen.getByRole('button', { name: /Close/i });

    await userEvent.click(buttonElement);

    //  Assert
    expect(dialogProps.onClose).toHaveBeenCalledTimes(1);
  });
  it('should call onAccept function when accept button is clicked', async () => {
    //  Arrage
    const dialogProps: DialogProps = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Dialog test',
      labels: {
        acceptButton: 'Accept',
        closeButton: 'Close',
      },
    };
    //  Act
    render(
      <ConfirmationDialogComponent dialogProps={dialogProps}>
        <h1>Content test</h1>
      </ConfirmationDialogComponent>
    );

    const buttonElement = screen.getByRole('button', { name: /Accept/i });

    await userEvent.click(buttonElement);

    //  Assert
    expect(dialogProps.onAccept).toHaveBeenCalledTimes(1);
  });
});
