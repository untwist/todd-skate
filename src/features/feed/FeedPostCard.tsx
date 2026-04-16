import type { FeedPost } from '../../data/feed'
import { Icon } from '../../components/ui/Icon'

function Stars({ count }: { count: number }) {
  const full = Math.max(0, Math.min(5, count))
  return (
    <div className="flex gap-1 mt-2 items-center">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Icon
          key={idx}
          name="star"
          filled={idx < full}
          className={idx < full ? 'text-primary-container text-sm' : 'text-white/20 text-sm'}
        />
      ))}
    </div>
  )
}

export function FeedPostCard({ post }: { post: FeedPost }) {
  return (
    <article className="bg-surface-container-lowest overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-surface-container-highest">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary">
            <img
              className="w-full h-full object-cover"
              src={post.avatarUrl}
              alt={`${post.handle} avatar`}
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="font-headline font-bold text-white uppercase tracking-tight">
              {post.handle}
            </h4>
            <p className="text-xs text-white/50 uppercase font-bold">
              {post.timeAndLocation}
            </p>
          </div>
        </div>
        <Icon name="more_horiz" className="text-white/30" />
      </div>

      <div className="relative aspect-video group">
        <img
          className="w-full h-full object-cover"
          src={post.imageUrl}
          alt={post.title}
          loading="lazy"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-20 h-20 bg-primary-container text-on-primary-container flex items-center justify-center">
            <Icon name="play_arrow" filled className="text-5xl" />
          </div>
        </div>

        {post.verifiedLabel ? (
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-secondary-container text-black px-3 py-1 font-headline font-black text-[10px] uppercase tracking-widest">
              {post.verifiedLabel}
            </span>
          </div>
        ) : null}

        <div className="absolute bottom-0 left-0 right-0 scrim-bottom p-6 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-headline font-black text-white uppercase italic leading-none">
              {post.title}
            </h2>
            <div className="flex items-center gap-2">
              <Stars count={post.stars} />
              <span className="text-[10px] text-white/60 ml-2 font-bold uppercase tracking-widest">
                {post.skillLabel}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button
              className="w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary-container hover:text-black transition-none"
              type="button"
              aria-label="Props"
            >
              <Icon name="favorite" />
            </button>
            <button
              className="w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-secondary-container hover:text-black transition-none"
              type="button"
              aria-label="Share"
            >
              <Icon name="share" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex gap-6 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-headline font-bold text-xl">{post.props}</span>
            <span className="text-[10px] text-white/40 font-black uppercase">
              PROPS
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-headline font-bold text-xl">
              {post.comments}
            </span>
            <span className="text-[10px] text-white/40 font-black uppercase">
              COMMENTS
            </span>
          </div>
        </div>

        <div className="text-sm text-white/70 leading-relaxed max-w-xl">
          <span className="font-bold text-white mr-2">{post.handle}</span>
          {post.caption}
        </div>

        <div className="mt-4 flex items-center gap-4">
          <input
            className="flex-1 bg-surface-container-highest border-none focus:ring-1 focus:ring-primary-container text-xs font-bold p-3 placeholder:text-white/30"
            placeholder="ADD COMMENT..."
            type="text"
          />
          <button
            className="bg-primary-container text-on-primary-container px-6 py-3 text-xs font-black uppercase tracking-widest"
            type="button"
          >
            POST
          </button>
        </div>
      </div>
    </article>
  )
}

