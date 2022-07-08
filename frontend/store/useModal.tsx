import React, { useState } from "react";
import { FiCheck, FiPlus, FiX } from "react-icons/fi";
import create from "zustand";
import AddProjectModal from "../components/AddProjectModal";
import Button from "../components/common/Button";
import EditProjectModal from "../components/EditProjectModal";

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
  showAddProjectModal: (confirmationAction: () => void) => void;
  showEditProjectModal: (projectId: number) => void;
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
            <FiCheck className="mr-2" />
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
            <FiX className="mr-2" />
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
              <Button onClick={state.hideModal} theme="text">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  confirmationAction();
                  state.hideModal();
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        ),
      };
    });
  },
  showAddProjectModal: () => {
    set((state) => {
      return {
        modalState: true,
        modalContent: <AddProjectModal />,
      };
    });
  },
  showEditProjectModal: (projectId) => {
    set((state) => {
      return {
        modalState: true,
        modalContent: <EditProjectModal projectId={projectId} />,
      };
    });
  },
}));
