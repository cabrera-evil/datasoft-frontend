import React, { useState, useRef, useEffect, useCallback } from 'react';

interface DropdownItem {
    catId: number;
    catName: string;
}

interface DropdownProps {
    title: string;
    items: DropdownItem[];
    onSelect: (item: DropdownItem) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, onSelect }) => {
    const dropdownButtonRef = useRef<HTMLButtonElement>(null);
    const dropdownMenuRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (
                dropdownButtonRef.current &&
                dropdownMenuRef.current &&
                !dropdownButtonRef.current.contains(event.target as Node) &&
                !dropdownMenuRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        },
        [dropdownButtonRef, dropdownMenuRef]
    );

    useEffect(() => {
        if (isDropdownOpen) {
            dropdownMenuRef.current?.classList.remove('hidden');
        } else {
            dropdownMenuRef.current?.classList.add('hidden');
        }
    }, [isDropdownOpen]);

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    const handleItemClick = (item: DropdownItem) => {
        onSelect(item);
        setIsDropdownOpen(false);
    };

    return (
        <>
            <div className="relative inline-block text-left">
                <button
                    ref={dropdownButtonRef}
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                    onClick={toggleDropdown}
                >
                    {title}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2 -mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div
                    ref={dropdownMenuRef}
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden"
                >
                    <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                        {/* "All" option */}
                        <div
                            onClick={() => handleItemClick({ catId: 0, catName: 'All' })}
                            className="block px-4 py-2 mb-1 text-sm text-gray-700 rounded-md bg-white hover:bg-gray-100 cursor-pointer"
                            role="menuitem"
                        >
                            All
                        </div>
                        {/* Other categories */}
                        {items.map((item) => (
                            <div
                                key={item.catId}
                                onClick={() => handleItemClick(item)}
                                className="block px-4 py-2 mb-1 text-sm text-gray-700 rounded-md bg-white hover:bg-gray-100 cursor-pointer"
                                role="menuitem"
                            >
                                {item.catName}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dropdown;
