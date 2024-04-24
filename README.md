# pptx generator POC application guide(client)

below documentation is the example for client side.
for the server side, move to [SERVER-SIDE-EXAMPLE](./server/README.md)

## requirements

- [pptxgenjs](https://github.com/gitbrent/PptxGenJS/) requires Node18.
- bundler (in this example, I used [Vite](https://v3.vitejs.dev/guide/)/React/Typescript)

## About this application

this application has both pptx generator and utils that helps to create pptx using pptxgenjs library.

to make the code work from this code example, copy @/utils/pptx folder in your application.

## installations

### install pptxgenjs

```bash
npm i pptxgenjs
```

### install react-router-dom (optional)

I installed [react-router](https://reactrouter.com/en/main/start/tutorial) to separate the test code
so we can see the code separated from other example code. the purpose of separation is to make a completely modularized code so we can copy whole folder and paste it to where it is needed.

```bash
npm install react-router-dom localforage match-sorter sort-by
```

### install [tailwindcss](https://tailwindcss.com/docs/installation) (optional)

I installed tailwindcss to reduce unnecessary styling work as well as mismatch from internal libraries in case it is upgraded but this project is not updated.

```bash
npm install -D tailwindcss
```

### install [shadcn/ui](https://ui.shadcn.com/docs/installation/vite) (optional)

I installed shadcn/ui for easier ui implementation including dropdown for the pptx generator functionalities.
This is optional if you want to implement only pdf download functionality.

## run application

### run the dev server

in the console, type below

```bash
npm run dev
```

(optional) if you are on development, open another console, and type below to run tailwindcss

```bash
npm run tailwind:watch
```

and see the url and port number showing in the console.

```bash
  VITE v5.2.10  ready in 794 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```

in this example, <http://localhost:5173/> is where you should navigate to see the example project.

## open the browser with the port number

it will show multiple buttons for the example
