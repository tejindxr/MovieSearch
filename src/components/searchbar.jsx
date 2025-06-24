import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-10  text-amber-100 placeholder:text-blue-100"
      />
    </div>
  );
};

export default SearchBar;
