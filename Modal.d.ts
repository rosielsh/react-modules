import { default as React } from 'react';
type ModalPosition = 'center' | 'bottom';
interface ModalProps {
    width?: string;
    height?: string;
    position: ModalPosition;
    title?: string;
    children?: React.ReactNode;
    onClose: () => void;
}
declare function Modal({ width, height, position, title, onClose, children }: ModalProps): import("react/jsx-runtime").JSX.Element;
export default Modal;
