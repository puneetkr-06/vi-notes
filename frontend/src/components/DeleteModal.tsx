import React from "react";

type Props = {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
};

const DeleteModal: React.FC<Props> = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Are you sure?</h3>
                <p>This action cannot be undone.</p>

                <div className="modal-buttons">
                    <button className="confirm" onClick={onConfirm}>
                        Yes, Delete
                    </button>
                    <button className="cancel" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;