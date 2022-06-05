import React from "react";
import { FiCheck, FiX } from "react-icons/fi";
import create from "zustand";
import Button from "../components/common/Button";

interface ModalState {
  modalState: boolean;
  modalContent: React.ReactNode;
  hideModal: () => void;
  showSuccessMessage: (message: string) => void;
  showErrorMessage: (message: string) => void;
  showConfirmationModal: (
    message: string,
    confirmationAction: () => void
  ) => void;
}

export const useModal = create<ModalState>((set) => ({
  modalState: false,
  modalType: "message",
  modalContent: "",
  showSuccessMessage: (message) => {
    set(() => {
      return {
        modalState: true,
        modalContent: (
          <p className="flex items-center">
            <FiCheck stroke="#4ade80" className="stroke-green-400 mr-2" />
            {message}
          </p>
        ),
      };
    });
  },
  showErrorMessage: (message) => {
    set(() => {
      return {
        modalState: true,
        modalContent: (
          <p className="flex items-center">
            <FiX stroke="#f472b6" className="stroke-pink-400 mr-2" />
            {message}
          </p>
        ),
      };
    });
  },
  hideModal: () => {
    set(() => {
      return {
        modalState: false,
      };
    });
  },
  showConfirmationModal: (message, confirmationAction) => {
    set((state) => {
      return {
        modalState: true,
        modalContent: (
          <div className="flex flex-col item-center justify-around">
            <p className="mb-4">{message}</p>
            <div className="flex items-center justify-between">
              <Button onClick={state.hideModal}>Cancel</Button>
              <Button onClick={confirmationAction}>Confirm</Button>
            </div>
          </div>
        ),
      };
    });
  },
}));
