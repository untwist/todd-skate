import { spotCategories } from '../../data/spots'
import type { SpotCategory } from '../../data/spots'

export function SpotFilters({
  active,
  onChange,
}: {
  active: SpotCategory
  onChange: (next: SpotCategory) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {spotCategories.map((cat) => {
        const isActive = cat === active
        return (
          <button
            key={cat}
            className={
              isActive
                ? 'bg-primary-container text-black px-6 py-2 font-headline font-bold text-xs uppercase'
                : 'bg-surface-container-highest text-white/70 px-6 py-2 font-headline font-bold text-xs uppercase hover:text-white'
            }
            type="button"
            onClick={() => onChange(cat)}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}

