"use client";

import React, { useEffect } from "react";

const SelectedHeroModal = React.createContext<
  | [
      IShouldShowSelectedHeroModal,
      React.Dispatch<React.SetStateAction<IShouldShowSelectedHeroModal>>
    ]
  | undefined
>(undefined);

export function SelectedHeroModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedHeroModal, toggleSelectedHeroModal] =
    React.useState<IShouldShowSelectedHeroModal>({ shouldShowModal: false });

  return (
    <SelectedHeroModal.Provider
      value={[selectedHeroModal, toggleSelectedHeroModal]}
    >
      {children}
    </SelectedHeroModal.Provider>
  );
}

export function useSelectedHeroModal() {
  const context = React.useContext(SelectedHeroModal);
  if (context === undefined) {
    throw new Error(
      "useSelectedHeroModal must be used within a SelectedHeroModalProvider"
    );
  }
  const [selectedHeroModal, toggleSelectedHeroModal] = context;

  useEffect(() => {
    const closeModalOnEscape = (e: KeyboardEvent | any): void => {
      if (e.key === "Escape")
        toggleSelectedHeroModal?.({ shouldShowModal: false });
    };
    document.addEventListener("keydown", closeModalOnEscape);
    return () => {
      document.removeEventListener("keydown", closeModalOnEscape);
    };
  }, [toggleSelectedHeroModal]);

  return context;
}
