interface LabelProps {
    closeButton: string;
    acceptButton: string;
  }

export interface DialogProps {
    isOpen: boolean;
    onAccept: () => void;
    onClose: () => void;
    title: string | React.ReactNode;
    labels: LabelProps;
}