"use client";

import { useState } from "react";

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onMaterialChange: (material: string) => void;
  onCategoryChange: (category: string) => void;
  onGenderChange: (gender: string) => void;
}

export function SearchFilters({
  onSearch,
  onMaterialChange,
  onCategoryChange,
  onGenderChange,
}: SearchFiltersProps) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="search"
          placeholder="Search: black tank top, wool blazer..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            onSearch(e.target.value);
          }}
          className="w-full px-4 py-3 pl-12 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <div className="flex flex-wrap gap-2">
        <select
          onChange={(e) => onMaterialChange(e.target.value)}
          className="px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 text-sm"
        >
          <option value="all">All Materials</option>
          <option value="natural">Natural Fibers</option>
          <option value="regenerated">Regenerated</option>
          <option value="synthetic">Synthetics</option>
          <option value="blend">Blends</option>
          <option value="verified">Verified % Only</option>
        </select>

        <select
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 text-sm"
        >
          <option value="all">All Categories</option>
          <option value="casual">Casual</option>
          <option value="workwear">Workwear</option>
          <option value="activewear">Activewear</option>
          <option value="intimates">Intimates</option>
          <option value="basics">Basics</option>
        </select>

        <select
          onChange={(e) => onGenderChange(e.target.value)}
          className="px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 text-sm"
        >
          <option value="all">All Genders</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
        </select>
      </div>
    </div>
  );
}
