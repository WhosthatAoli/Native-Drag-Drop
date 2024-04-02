## Drag and Drop implemented by native html+js functions and react-dnd hook.

### Why is it Native?
This implementation leverages the react-dnd hook to designate DOM elements as draggable or droppable. However, react-dnd does not inherently facilitate drag-and-drop actions at arbitrary positions or enable automatic positioning (snapping) to a grid. Our approach extends this functionality, allowing for more versatile drag-and-drop interactions.


### Explore the demo: https://native-drag-and-drop.vercel.app

## List Drag-and-Drop
![Screenshot 2024-04-02 at 3 42 51 PM](https://github.com/WhosthatAoli/Native-Drag-Drop/assets/54309838/e497371c-f292-49fb-aa25-28329fe24692)

In this mode, you can drag items onto a droppable area, which then maps the items accordingly. This is achieved by passing an identifier to the drop target, which then associates the dragged items with their new positions.

## Any-Position Drag-and-Drop
![Screenshot 2024-04-02 at 3 53 44 PM](https://github.com/WhosthatAoli/Native-Drag-Drop/assets/54309838/bb7ea30b-ceb5-4309-b83a-39ec1df55be6)

Behind the Scenes:
To enable dropping items at any position, each item needs an absolute position within the drop area. The calculation for this position involves:

1. Drag Offset: The cursor's position within the item being dragged, referred to as (dragOffsetX, dragOffsetY). This is calculated relative to the top-left corner of the item.

2. Board Offset: The cursor's position within the drop area, referred to as (boardOffsetX, boardOffsetY), obtained using the item's bounding rectangle.

The final position of the item within the drop area is determined by subtracting the drag offset from the board offset, aligning the item based on the cursor's drop position.


## Grid-Based Drag-and-Drop
![Screenshot 2024-04-02 at 4 01 36 PM](https://github.com/WhosthatAoli/Native-Drag-Drop/assets/54309838/98a6636e-45b6-4d42-aafc-ce6af1e9b218)

Behind the Scenes:

This mode builds on the any-position drag-and-drop by incorporating a grid layout. The item's final position snaps to the grid, calculated as follows:

**Grid Alignment**: 
The drop position is divided by the grid size to determine the item's starting column and row within the grid.

Recommendations:

For optimal alignment, the grid size should match or be an integer multiple of the item's size. For example, a 30x30 pixel item should correspond to a grid size of 30x30 pixels.




## Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
