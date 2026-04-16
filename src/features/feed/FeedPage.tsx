import { Icon } from '../../components/ui/Icon'
import { feedPosts } from '../../data/feed'
import { FeedPostCard } from './FeedPostCard'

export function FeedPage() {
  return (
    <>
      <div className="w-full max-w-2xl space-y-12">
        {feedPosts.map((post) => (
          <FeedPostCard key={post.title} post={post} />
        ))}
      </div>

      <button
        className="fixed bottom-24 md:bottom-8 right-8 w-16 h-16 machined-edge text-black flex items-center justify-center shadow-2xl z-50"
        type="button"
        aria-label="Create"
      >
        <Icon name="add" filled className="text-4xl" />
      </button>
    </>
  )
}

