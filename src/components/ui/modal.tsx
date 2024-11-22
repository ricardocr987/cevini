import React, { useRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside'; // Ensure this path is correct for your project structure
import ReactDOM from 'react-dom';

export type ModalProps = {
    modalStatus: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal = ({ modalStatus, onClose, children }: ModalProps) => {
    if (!modalStatus) return null;

    const modalRef = useRef(null);
    useClickOutside(modalRef, onClose);

    return ReactDOM.createPortal(
        (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div ref={modalRef} className="relative p-6 bg-white rounded-lg shadow-xl max-w-md w-full m-4">
                    {children}
                    <button
                        onClick={() => onClose()}
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    >
                        Close
                    </button>
                </div>
            </div>
        ),
        // note: app-root id on all pages
        document.getElementById('app-root')!
    );
};

export default Modal;
