import { useRouter } from 'next/router';

interface SearchBarProps {
  value: string;
  setValue: (val: string) => void;
}

const SearchBar = ({ setValue, value }: SearchBarProps) => {
  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) router.push({ pathname: `/search/${value.toLowerCase()}` });
    setValue('');
  };

  return (
    <div className="flex items-center w-full sm:w-auto">
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          value={value}
          onChange={handleInput}
          aria-label="search"
          className="transition-width w-full md:w-60 md:focus:w-80 lg:focus:w-96 py-1.5 focus:border-accent bg-bgFull border-b-2 border-inputBorder placeholder-inputPlaceholder focus:outline-none"
        />
      </form>
    </div>
  );
};

export default SearchBar;
