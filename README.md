<div id="top"></div>

<!-- PROJECT LOGO -->

<br />

<div align="center">
  <h3 align="center">React Native Mobile Developer Recruitment Test</h3>
 
  <p align="center">
    An application built with React Native for hiring purposes.
    <br />
    <br />
</div>

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ABOUT THE PROJECT -->

## About The Project

In general this app contains two screens, one for the main screen and one for the detail screen. The main screen is a list of transactions fetched from [here](https://recruitment-test.flip.id/frontend-test) , and the detail screen is description of a transaction send using params from the main screen.

### Project Structure

Entry point for the app code is from the `source` folder. Source folder contains the following files/folders:

- assets: contains the images used in the app.
- hooks: contains custom hooks used in the app.
- screens: contains the screens used in the app.
- utilites: contains the utilities/helpers used in the app.
- `index.tsx`: contains NavigationContainer from the react-navigation library.

### Custom Hooks

- useService: custom hook for fetching data from the backend.
- useFilter: custom hook for filtering transaction data.

### Built With

![ReactNative][react-native] ![ReactNavigation][react-navigation] ![Typescript][typescript]

## Screen Shots

![Home Screen Shot][home-screenshot]
![Detail Screen Shot][detail-screenshot]
![Modal Screen Shot][modal-screenshot]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[react-native]: https://img.shields.io/badge/reactnative-000000?style=for-the-badge&logo=react&logoColor=white
[typescript]: https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&logoColor=white
[react-navigation]: https://img.shields.io/badge/ReactNavigation-000000?style=for-the-badge&logo=react&logoColor=white
[react-navigation-url]: https://reactnavigation.org/
[react-native-url]: https://reactnative.dev/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=000
[linkedin-url]: https://linkedin.com/in/ekobokan
[home-screenshot]: readme-assets/home.png
[modal-screenshot]: readme-assets/modal.png
[detail-screenshot]: readme-assets/detail.png
