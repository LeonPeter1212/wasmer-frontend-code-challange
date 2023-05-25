import React from "react";
import { Input } from "antd";
import { Search as SearchIcon } from "react-feather";

interface SearchInputProps {
	placeholder?: string;
	nopadding?: boolean;
}

const onSearch = (value: string) => console.log(value);

export const SearchInput: React.FC<SearchInputProps> = ({
	placeholder = "Input search text",
	nopadding = false,
}) => (
	<div className={`cursor-pointer custom-search w-full ${nopadding ? "" : "px-4"}`}>
		<Input
			placeholder={placeholder}
			addonBefore={
				<SearchIcon
					size={16}
					onClick={() => onSearch("search value")}
					className="px-3"
					style={{ width: '40px' }}
				/>
			}
		/>
	</div>
);
