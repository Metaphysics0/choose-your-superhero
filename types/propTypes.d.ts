interface ISearchInputProps {
  searchText: string;
  setSearchText: ISetString;
  setErrorMessage: ISetString;
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

type ISetString = Dispatch<SetStateAction<string>>;
type ISetBoolean = Dispatch<SetStateAction<boolean>>;
type ISetSelectedHeroesAction = Dispatch<SetStateAction<ISuperhero[]>>;
