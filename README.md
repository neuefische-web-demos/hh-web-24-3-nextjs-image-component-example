# Next.js Image Example

This repository contains an example of implementing responsive images in a Next.js application using the next/image component.

The focus is on handling images with unknown sizes, ensuring they display correctly across various screen sizes and resolutions.

**Next.js Documentation** [`fill`](https://nextjs.org/docs/pages/api-reference/components/image#fill)

## Key Features:
- Responsive Images: Demonstrates the use of the fill property to make images responsive within a container.
- Container Styling: Ensures the container has `position: relative` and a defined height to prevent the image `height` from defaulting to 0.
- Image Styling: Utilizes `object-fit: cover` to maintain the aspect ratio of images and prevent stretching.

## Instructions
- Container Setup: Wrap the image in a container with `position: relative` and a defined height to ensure visibility.
- Image Properties: Use the `fill` property on the next/image component for responsive behavior.
- Styling: Apply `object-fit: cover` to the image to maintain its aspect ratio and prevent distortion.


## Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter
