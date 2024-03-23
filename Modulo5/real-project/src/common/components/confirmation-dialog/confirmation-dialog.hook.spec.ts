import { renderHook } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup, createEmptyLookup } from 'common/models';

describe('useConfirmationDialog specs', () => {
  const item: Lookup = {
    id: '1',
    name: 'John',
  };

  it('Should return an object with isOpen to be falsy, itemToDelete as createEmptyLookup and onAccept, onClose and onOpenDialog as function', () => {
    //  Arrage
    //  Act
    const { result } = renderHook(() => useConfirmationDialog());
    //  Assert

    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('Should return and object with isOpen true and itemToDelete as item', () => {
    //  Arrage
    //  Act
    const renderUseConfirmationDialog = renderHook(() =>
      useConfirmationDialog()
    );
    const { result } = renderUseConfirmationDialog;
    result.current.onOpenDialog(item);
    renderUseConfirmationDialog.rerender();

    //  Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('Should return isOpen false  after calling onOpenDialog', () => {
    //  Arrage
    //  Act
    const renderUseConfirmationDialog = renderHook(() =>
      useConfirmationDialog()
    );
    const { result } = renderUseConfirmationDialog;
    result.current.onOpenDialog(item);
    result.current.onClose();
    renderUseConfirmationDialog.rerender();

    //  Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual(item);
  });
});
