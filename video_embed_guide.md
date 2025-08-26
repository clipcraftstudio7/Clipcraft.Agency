# Video Embed Guide - Replace Local Videos with YouTube/TikTok

## Why This Solution Works:
✅ **No file size limits** - YouTube/TikTok handle the heavy lifting
✅ **Better performance** - Videos load instantly
✅ **Automatic optimization** - Platforms optimize for different devices
✅ **No hosting costs** - Free video hosting
✅ **Better compatibility** - Works on all devices/browsers

## Step 1: Upload Videos to YouTube

### For each video file, upload to YouTube:
1. Go to [YouTube Studio](https://studio.youtube.com/)
2. Click "CREATE" → "Upload videos"
3. Upload your video files
4. Set visibility to "Unlisted" (if you don't want them public)
5. Copy the video ID from the URL (e.g., `dQw4w9WgXcQ` from `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)

### Video Mapping:
- `show.mp4` → YouTube Video ID: `[YOUR_SHOW_VIDEO_ID]`
- `reel.mp4` → YouTube Video ID: `[YOUR_REEL_VIDEO_ID]`
- Short form videos → YouTube Shorts or TikTok embeds
- Long form videos → YouTube embeds

## Step 2: Replace Video Elements

### Example 1: Replace Showreel Video
**Current:**
```html
<div class="showreel-video-container">
  <video src="assets/video/show.mp4" autoplay loop muted playsinline></video>
</div>
```

**Replace with:**
```html
<div class="showreel-video-container">
  <iframe 
    src="https://www.youtube.com/embed/[YOUR_SHOW_VIDEO_ID]?autoplay=1&loop=1&mute=1&playlist=[YOUR_SHOW_VIDEO_ID]&controls=0&showinfo=0&rel=0"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
```

### Example 2: Replace Short Form Videos
**Current:**
```html
<div class="project-card phone-frame shortform-item">
  <video src="assets/video/shortformvideo/tiktokio.com_5db1bxt7szxFKUy5i6bs.mp4" autoplay muted loop></video>
</div>
```

**Replace with:**
```html
<div class="project-card phone-frame shortform-item">
  <iframe 
    src="https://www.youtube.com/embed/[YOUR_SHORT_VIDEO_ID]?autoplay=1&loop=1&mute=1&playlist=[YOUR_SHORT_VIDEO_ID]&controls=0&showinfo=0&rel=0"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
```

### Example 3: TikTok Embed (Alternative)
```html
<div class="project-card phone-frame shortform-item">
  <blockquote 
    class="tiktok-embed" 
    cite="https://www.tiktok.com/@yourusername/video/[TIKTOK_VIDEO_ID]"
    data-video-id="[TIKTOK_VIDEO_ID]">
  </blockquote>
  <script async src="https://www.tiktok.com/embed.js"></script>
</div>
```

## Step 3: CSS Styling for Embeds

Add this CSS to make embeds look like your current videos:

```css
.showreel-video-container iframe,
.project-card iframe {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
}

/* For TikTok embeds */
.tiktok-embed {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}
```

## Step 4: YouTube Embed Parameters

### Autoplay with Loop:
```
?autoplay=1&loop=1&mute=1&playlist=[VIDEO_ID]&controls=0&showinfo=0&rel=0
```

### Parameters Explained:
- `autoplay=1` - Video starts automatically
- `loop=1` - Video loops continuously
- `mute=1` - Video is muted (required for autoplay)
- `playlist=[VIDEO_ID]` - Required for looping
- `controls=0` - Hide player controls
- `showinfo=0` - Hide video info
- `rel=0` - Don't show related videos

## Step 5: Implementation Steps

1. **Upload all videos to YouTube** (set to unlisted)
2. **Get video IDs** from YouTube URLs
3. **Replace each `<video>` element** with `<iframe>` embed
4. **Test locally** to ensure embeds work
5. **Deploy to Render** - videos will load instantly!

## Benefits:
- ✅ **Instant loading** - No more 100MB+ file downloads
- ✅ **Mobile optimized** - YouTube handles mobile optimization
- ✅ **CDN delivery** - Global fast loading
- ✅ **Automatic compression** - YouTube optimizes quality
- ✅ **Analytics** - Track video views in YouTube Studio

## Example Video IDs to Replace:
- `show.mp4` → `[YOUR_SHOW_VIDEO_ID]`
- `reel.mp4` → `[YOUR_REEL_VIDEO_ID]`
- Short form videos → `[YOUR_SHORT_VIDEO_IDS]`
- Long form videos → `[YOUR_LONG_VIDEO_IDS]`

This approach will completely solve your video loading issues and provide a much better user experience!

