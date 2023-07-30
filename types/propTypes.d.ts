interface ISearchInputProps {
  searchText: string;
  setSearchText: ISetString;
  setSearchResults: ISetSelectedHeroesAction;
  searchResults: ISuperhero[];
  isLoading?: boolean;
  setIsLoading: ISetBoolean;
}

interface ISearchResultProps {
  searchResults: ISuperhero[];
  setSearchResults: ISetSelectedHeroesAction;
  errorMessage?: string;
}

interface ISearchResultItemProps {
  hero: ISuperhero;
  key: number;
  selectedHeroes: ISuperhero[] | undefined;
  setSelectedHeroes: ISetSelectedHeroesAction;
  shouldShowModal: IShouldShowSelectedHeroModal;
  setShouldShowModal: ISetShouldShowModal;
}

interface IShouldShowSelectedHeroModal {
  shouldShowModal: boolean;
  hero?: ISuperhero;
}
type ISetString = Dispatch<SetStateAction<string>>;
type ISetBoolean = Dispatch<SetStateAction<boolean>>;
type ISetSelectedHeroesAction = Dispatch<SetStateAction<ISuperhero[]>>;
type ISetShouldShowModal = Dispatch<
  SetStateAction<IShouldShowSelectedHeroModal>
>;
