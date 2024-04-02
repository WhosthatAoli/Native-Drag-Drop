## Drag and Drop implemented by native html+js functions and react-dnd hook.

### Why is it Native?
Cause it just use react-dnd hook to mark the dom elements to be dragable or droppable. React-dnd is not provide functions to realize DND on anyposition or absorb position.
So, let's take a look at it.

### Try it on https://native-drag-and-drop.vercel.app

### List DnD
![Screenshot 2024-04-02 at 3 42 51 PM](https://github.com/WhosthatAoli/Native-Drag-Drop/assets/54309838/e497371c-f292-49fb-aa25-28329fe24692)

Pass id to drop board, and drop board map the pics.

### Any Position DnD
![Screenshot 2024-04-02 at 3 53 44 PM](https://github.com/WhosthatAoli/Native-Drag-Drop/assets/54309838/bb7ea30b-ceb5-4309-b83a-39ec1df55be6)

What's under the hood?
Need to give pictures which mapped in the board a dynamic style: absolute position. How to caculate this position?
All offset use the left top anchor of the element(frame) as reference.
First, let's say the when you drag, you cursor in the picture frame with an offset, call it (dargOffsetX,dragOffsetY).
Second, when you move your cursor to drop in the board, get the cursor offset of the board, is (boardOffsetX,boardOffsetY)
So, the picture position(left top anchor) in the drop board should be (boardOffsetX,boardOffsetY) - (dargOffsetX,dragOffsetY).

### Absorb to Grid Dnd
![Screenshot 2024-04-02 at 4 01 36 PM](https://github.com/WhosthatAoli/Native-Drag-Drop/assets/54309838/98a6636e-45b6-4d42-aafc-ce6af1e9b218)

What's under the hood?
Use the same position caculation as Any position Dnd. 
And add:
Board need to be grid layout. 
Use position/(grid number) is the pic (start col, start row) in the grid board.

Good to have:
Grid size should be align with the picture size. Can smaller that picture size, but recommend to be Integer multiple. Like 30x30 size pic with 30x30 grid size.




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
