# ScrollContentImagePairs Component

A React component that creates an engaging scroll-based content presentation with fixed images that transition as content scrolls, inspired by Stripe's homepage design.

## Features

### Desktop Mode (lg screens and above)
- **Two-column layout**: Content on the left, images on the right
- **Smooth image transitions**: Images fade in/out as associated content scrolls into view
- **Fixed positioning**: Images remain fixed in the viewport center while content scrolls
- **Smart scroll behavior**:
  - First content section: Image scrolls with content until reaching vertical center, then becomes fixed
  - Middle sections: Image stays fixed in center, transitioning between images as content changes
  - Last content section: Image scrolls out with the content when scrolling past

### Mobile Mode (below lg breakpoint)
- **Stacked layout**: Content and images are displayed in alternating blocks
- **Traditional scroll**: Standard vertical scrolling with no fixed positioning
- **Responsive spacing**: Optimized spacing for smaller screens

## Props

```typescript
interface ContentImagePair {
  content: ReactNode  // Any React component or JSX
  image: string       // URL/path to the image
}

interface ScrollContentImagePairsProps {
  contentImagePairs: ContentImagePair[]
}
```

## Usage

```tsx
import ScrollContentImagePairs from '@/components/ScrollContentImagePairs'

const MyPage = () => {
  const pairs = [
    {
      content: (
        <div>
          <h2>Feature One</h2>
          <p>Description of feature one...</p>
        </div>
      ),
      image: '/images/feature-1.jpg'
    },
    {
      content: (
        <div>
          <h2>Feature Two</h2>
          <p>Description of feature two...</p>
        </div>
      ),
      image: '/images/feature-2.jpg'
    },
    // ... more pairs
  ]

  return <ScrollContentImagePairs contentImagePairs={pairs} />
}
```

## Technical Implementation

### Intersection Observer API
- Uses Intersection Observer to detect when content sections enter the viewport
- Configuration: `-50% 0px -50% 0px` root margin ensures detection at viewport center
- Triggers image transitions when content is centered

### Scroll Event Listener
- Monitors scroll position to determine image positioning state:
  - `scrolling`: When first content is entering view
  - `fixed`: When content is in the main scroll area
  - `scrolling-out`: When last content is exiting view

### CSS Classes
- Tailwind CSS for responsive design
- Custom transitions for smooth opacity changes
- Dynamic positioning based on scroll state

## Styling Customization

The component uses Tailwind CSS classes. You can customize:

- **Content spacing**: Modify `space-y-32` and `py-32` in the content container
- **Image size**: Adjust `h-[60vh]` for image container height
- **Transition speed**: Change `duration-500` for image fade transitions
- **Mobile spacing**: Modify `space-y-16` and `py-16` in mobile layout
- **Max widths**: Adjust `max-w-7xl` and `max-w-3xl` for container widths

## Browser Compatibility

- Requires Intersection Observer API (supported in all modern browsers)
- Uses passive scroll event listeners for better performance
- Gracefully falls back to mobile layout on smaller screens

## Performance Considerations

- Passive scroll event listeners minimize performance impact
- Intersection Observer is more efficient than scroll-based calculations
- Images are pre-loaded but hidden with opacity for smooth transitions
- Component cleans up event listeners and observers on unmount

## Example

See `ScrollContentImagePairs.example.tsx` for a complete working example.
