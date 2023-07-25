interface ISearchInputProps {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setSearchResults: Dispatch<SetStateAction<ISuperhero[]>>;
  isLoading?: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

interface ISearchResultProps {
  searchResults: ISuperhero[];
  isLoading: boolean;
  errorMessage?: string;
}
