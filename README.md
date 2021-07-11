# Electron boilerplate with React and Typescript

Another boilerplate for Electron with React and Typescript but simpler and more maintainable.

## Get started

Clone the template and move into the directory :

```
git clone https://github.com/balsigergil/electron-react-typescript-boilerplate.git <your-project>
```

```
cd <your-project>
```

Install dependencies and start the development build :

```
yarn
yarn start
```

## Folders structure

```
<your-project>
┝ configs:  webpack configurations
┝ dist:     webpack output directory
┝ out:      electron-builder output directory
┝ res:      resources for electron-builder (e.g icons)
┝ scripts:  babel script
└ src:      you probably know it already :)
```

## Build for production

Build for production using [electron-builder](https://www.electron.build/) with :

```
yarn dist
```
