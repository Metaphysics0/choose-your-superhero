"use client";

import { useSelectedHeroModal } from "@/providers/selectedHeroModalProvider";
import HeroCard from "../hero-card/HeroCard";
import { Tooltip } from "react-tooltip";
import { Icon } from "@iconify/react";

export default function SelectedHeroModal() {
  const [{ shouldShowModal, hero }, setShouldShowModal] =
    useSelectedHeroModal();

  const closeModal = () => {
    setShouldShowModal({ shouldShowModal: false });
  };

  return shouldShowModal && hero ? (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={closeModal}
      >
        <div
          className="relative my-6 mx-auto w-[calc(100%_-_15rem)]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5 border-0 max-h-screen overflow-scroll rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none">
            <div
              className="absolute top-3 right-0 flex items-center pr-3 cursor-pointer hover:text-red-500"
              onClick={closeModal}
            >
              <Icon icon="ph:x-bold" />
            </div>
            <HeroCard hero={hero} id={hero.id} isModalView={true} />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null;
}
